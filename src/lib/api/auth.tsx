//import * as apiUri from './apiUrl';
import { getClient } from './client';

export const ACCOUNTS = "accounts/";
const ACCOUNTS_TOKEN = ACCOUNTS + "token";
const ACCOUNTS_LOGOUT = ACCOUNTS + "logout";
const ACCOUNTS_PROFILE = ACCOUNTS + "profile";

// 로그인
export const accountsToken = async ({
    email,
    password,
}: { email: string, password: string }) => {
    const params = new URLSearchParams();
    params.append('Email', email);
    params.append('Password', password);
    try {
        const response = await getClient('api').post(ACCOUNTS_TOKEN, params, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        });
        console.log('accountsToken...');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

// 프로파일
export const accountsProfile = async () => {
    try {
        const response = await getClient('api').post(ACCOUNTS_PROFILE);
        console.log('accountsProfile...');
        console.log(response.data);
    } catch(error) {
        console.log(error);   
    }
}