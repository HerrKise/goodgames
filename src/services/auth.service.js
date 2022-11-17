import http from "../http";
import localStorageService from "./localStorage.service";

const authEndpoint = "authenticate/";

const authService = {
    login: async (email, password) => {
        const { data } = await http.post(authEndpoint + "login", {
            email,
            password
        });
        return data;
    },
    register: async (payload) => {
        const { data } = await http.post(authEndpoint + "register", payload);
        return data;
    },
    refresh: async () => {
        const { data } = await http.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
