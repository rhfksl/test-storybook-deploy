import { call, put } from 'redux-saga/effects';

export default function createRequestSaga(type, request) {
  console.log("createRequestSaga..")
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    console.log("createRequestSaga function..")
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
  };
}