import axios from "axios";
import { useSelector } from "react-redux";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import staffService from "../services/staff.service";
import { getIsStaff } from "../store/reducers/staffSlice";

export const API_URL = "http://176.99.11.245/api/"; // потом поменяем на настоящий

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
                const isStaff = useSelector(getIsStaff());
                console.log("isStaff: ", isStaff);
                const { refreshToken, accessToken } = isStaff
                    ? await staffService.refresh()
                    : await authService.refresh();
                localStorageService.setTokens(refreshToken, accessToken);
                return http.request(originalRequest);
            } catch (error) {
                console.log("Not authorized");
            }
        }
        throw error;
    }
);

export default http;
