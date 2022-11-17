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
    register: async (email, pubgId, password, login) => {
        const { data } = await http.post(authEndpoint + "register", {
            email,
            pubgId,
            password,
            login
        });
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
