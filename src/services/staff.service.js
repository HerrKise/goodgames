import http from "../http";
import localStorageService from "./localStorage.service";

const staffEndpoint = "/AdminPanel";

const staffService = {
    login: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Login", payload);
        return data;
    },
    createEmployee: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/CreateEmployee",
            payload,
        );
        console.log(data);
        return data;
    },
    refresh: async () => {
        const { data } = await http.post(staffEndpoint + "/RefreshToken", {
            token: localStorageService.getAccessToken(),
            refreshToken: localStorageService.getRefreshToken(),
        });
        return data;
    },
    getProfile: async () => {
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
    },
    giveBan: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/GiveBan", payload);
        return data;
    },
    giveUnban: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/Unban", payload);
        return data;
    },
    giveShadowBan: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/GiveShadowBan",
            payload,
        );
        return data;
    },
    deleteUser: async (payload) => {
        const { data } = await http.delete(
            staffEndpoint + "/DeleteUser",
            payload,
        );
        return data;
    },
    deleteEmployee: async (payload) => {
        const { data } = await http.delete(
            staffEndpoint + "/DeleteEmployee",
            payload,
        );
        return data;
    },
    restoreUser: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/RestoreUser",
            payload,
        );
        return data;
    },
    restoreEmployee: async (payload) => {
        const { data } = await http.post(
            staffEndpoint + "/RestoreEmployee",
            payload,
        );
        return data;
    },
    getEmployeeLogs: async (payload) => {
        const { data } = await http.get(
            staffEndpoint + "/GetEmployeeLogs",
            payload,
        );
        return data;
    },
    getLogsByEmployeeId: async (payload) => {
        const { data } = await http.get(
            staffEndpoint + "/GetLogsByEmployeeId",
            payload,
        );
        return data;
    },
    giveCoins: async (payload) => {
        const { data } = await http.post(staffEndpoint + "/GiveCoins", payload);
        return data;
    },
};

export default staffService;
