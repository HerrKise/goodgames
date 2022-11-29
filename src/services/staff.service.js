import http from "../http";
import localStorageService from "./localStorage.service";

console.log("initiate staff service");

const staffEndpoint = "/AdminPanel";

const staffService = {
    login: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Login", payload);
        return data;
    },
    createEmployee: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/CreateEmployee",
            payload
        );
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
    getProfile: async () => {
        console.log("get working");
        const { data } = await http.get(staffEndpoint + "/GetMe");
        return data;
    },
    getUsersList: async (payload) => {
        const { data } = await http.get(staffEndpoint + "/GetUsers", payload);
        return data;
    },
    getUser: async (payload) => {
        const { data } = await http.get(staffEndpoint + "/GetUser", payload);
        return data;
    }
};

export default staffService;
