import http from "../http";
import localStorageService from "./localStorage.service";

const authEndpoint = "/Authenticate";

const authService = {
    login: async (payload) => {
        const { data } = await http.post(authEndpoint + "/Login", payload);
        return data;
    },
    register: async (payload) => {
        const { data } = await http.post(authEndpoint + "/Register", payload);
        console.log(data);
        return data;
    },
    refresh: async () => {
        const { data } = await http.post(authEndpoint + "/RefreshToken", {
            accessToken: localStorageService.getAccessToken(),
            refreshToken: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
