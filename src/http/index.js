import axios from "axios";
import localStorageService from "../services/localStorage.service";

export const API_URL = "http://localhost:5050/api/"; // потом поменяем на настоящий

const http = axios.create({
    baseURL: API_URL
});

http.interceptors.request.use(async (config) => {
    const expiresDate = localStorageService.getTokenExpiresDate();
    const refreshToken = localStorageService.getRefreshToken();
    const isExpired = refreshToken && expiresDate < Date.now();

    // пока непонятно, будет ли дата истечения жизни токена

    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`
        };
    }
    return config;
});

export default http;
