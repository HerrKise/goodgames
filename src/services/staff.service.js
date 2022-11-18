import http from "../http";
import localStorageService from "./localStorage.service";

const staffEndpoint = "staff/";

const staffService = {
    login: async (email, password) => {
        const { data } = await http.post(staffEndpoint + "login", {
            email,
            password
        });
        return data;
    },
    register: async (email, role, password, login) => {
        const { data } = await http.post(staffEndpoint + "register", {
            email,
            role,
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

export default staffService;
