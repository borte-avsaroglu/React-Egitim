import axios from "axios";

export const config = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 15000,
    headers: {token: 'token123'},
    data: {ip: '192.168.0.1'},
})