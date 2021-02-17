import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD: string = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;
const LOGIN = 'auth/LOGIN' as const;
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;

export const login = createAction(LOGIN, ({ email, password
}: {email: string, password: string}) => ({
    email,
    password
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.accountsToken);

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    auth: null,
    authError: null
}

function reducer(state = initialState, action:any) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: null,
                auth: null
            }
    }
}

// const auth = handleActions(
//     {
//         [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
//             ...state,
//             authError: null,
//             auth
//         })
//     },
//     initialState
// )

// export default auth;




