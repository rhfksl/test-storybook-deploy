import axios from 'axios';

export const client = axios.create();

const API_URL_DEV = "https://future.nemoapp.kr";
const API_URL_PRODUCT = "https://www.nemoapp.kr";

export const getClient = (service: string) => {
    if(service === 'api') {
        client.defaults.baseURL = API_URL_DEV + "/api/";
    } else if (service === 'mobile') {
        client.defaults.baseURL = API_URL_DEV + "/mobile/";
    } else if (service === 'upload') {
        client.defaults.baseURL = API_URL_DEV + "/upload/";
    } else {
        client.defaults.baseURL = API_URL_DEV
    }

    return client
}