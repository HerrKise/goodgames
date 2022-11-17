import axios from "axios";
import { getAccessToken } from "../services/localStorage.service";

export const API_URL = "http://localhost:5050/api/"; // потом поменяем на настоящий

const http = axios.create({
    baseURL: API_URL
});

http.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`
        };
    }
    return config;
});

export default http;
