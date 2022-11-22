import http from "../http";
import localStorageService from "./localStorage.service";

const staffEndpoint = "/Authenticate";

const authService = {
    login: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Login", payload);
        return data;
    },
    register: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Register", payload);
        console.log(data);
        return data;
    },
    refresh: async () => {
        const { data } = await http.post(staffEndpoint + "/RefreshToken", {
            token: localStorageService.getAccessToken(),
            refreshToken: localStorageService.getRefreshToken()
        });
        return data;
    },
    getUserId: async () => {
        const { data } = await http.get(staffEndpoint + "/GetMe");
        return data;
    },
    generateRestorePassword: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/GenerateRestorePassword",
            payload
        );
        return data;
    },
    restorePassword: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/RestorePassword",
            payload
        );
        return data;
    }
};

export default authService;
