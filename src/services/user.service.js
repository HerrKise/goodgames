import http from "../http";
import localStorageService from "./localStorage.service";

const userEndpoint = "/Profile";

const userService = {
    getProfile: async (payload) => {
        const { data } = await http.get(userEndpoint + "/GetProfile", payload);
        return data;
    },
    editProfile: async (payload) => {
        const { data } = await http.put(userEndpoint + "/EditProfile", payload);
        return data;
    },
    updatePassword: async () => {
        const { data } = await http.post(userEndpoint + "/UpdatePassword");
        return data;
    }
};

export default userService;
