import http from "../http";
import localStorageService from "./localStorage.service";

const staffEndpoint = "/AdminPanel";

const staffService = {
    login: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Login", payload);
        return data;
    },
    /* register: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Register", payload);
        console.log(data);
        return data;
    }, */
    refresh: async () => {
        const { data } = await http.post(staffEndpoint + "/RefreshToken", {
            token: localStorageService.getAccessToken(),
            refreshToken: localStorageService.getRefreshToken()
        });
        return data;
    },
    getProfile: async () => {
        const { data } = await http.get(staffEndpoint + "/GetMe");
        return data;
    }
};

export default staffService;
