import axios from "axios";
import { useSelector } from "react-redux";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import staffService from "../services/staff.service";
import { getIsStaff } from "../store/reducers/staffSlice";

export const API_URL = "https://dev.gg.org.ru/api/";
export const IMG_URL = "https://dev.gg.org.ru/";

console.log("http init");

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
        console.log(error);
        const originalRequest = error.config;
        const isStaff = localStorageService.getIsStaff();
        console.log("isStaff: ", isStaff);
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const { refreshToken, accessToken } =
                    isStaff === "true"
                        ? await staffService.refresh()
                        : await authService.refresh();
                localStorageService.setTokens(refreshToken, accessToken);
                return http.request(originalRequest);
            } catch (error) {
                console.log("Not authorized");
                localStorageService.removeAuthData();
                http.request(originalRequest);
            }
        }
        throw error;
    }
);

export default http;
