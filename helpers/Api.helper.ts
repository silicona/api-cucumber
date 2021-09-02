import axios, { AxiosRequestConfig } from 'axios';

export const api = {
    checkPing: async () => {

        const datos: AxiosRequestConfig = {
            method: 'get',
            url: 'http://localhost:8888/github_page/index.html',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        }

        try {
            return axios.request(datos)
        } catch (e) {
            console.error('exception occurred while Ping', e);
            throw e;
        }
    },

    get: async (url: string) => {
        try {
            return axios.get(url);
        } catch (e) {
            console.error('exception occurred while GET', e);
            throw e;
        }
    },

    post: async (url: string, data?: AxiosRequestConfig) => {
        try {
            return axios.post(url, data);
        } catch (e) {
            console.error('exception occurred while POST', e);
            throw e;
        }
    },

    patch: async (url: string, data: object) => {
        try {
            return await axios.patch(url, data);
        } catch (e) {
            console.error('exception occurred while PATCH', e);
            throw e;
        }
    },

    delete: async (url: string, data: object) => {
        try {
            return await axios.delete(url);
        } catch (e) {
            console.error('exception occurred while DELETE', e);
            throw e;
        }
    }
}

