import axios from "axios";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";

export const API_URL = "http://localhost:5050/api/"; // потом поменяем на настоящий

const http = axios.create({
    baseURL: API_URL
});

http.interceptors.request.use((config) => {
    const accessToken = localStorageService.getAccessToken();
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`
    };
    return config;
});

http.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const data = await authService.refresh();
                localStorageService.setTokens({
                    refreshToken: data.refresh_token,
                    accessToken: data.access_token,
                    userId: data.userId
                });
                return http.request(originalRequest);
            } catch (error) {
                console.log("Not authorized");
            }
        }
        throw error;
    }
);

export default http;
