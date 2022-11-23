import http from "../http";

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
    updatePassword: async (payload) => {
        const { data } = await http.post(
            userEndpoint + "/UpdatePassword",
            payload
        );
        return data;
    },
    updateProfilePicture: async (payload) => {
        const { data } = await http.post(
            userEndpoint + "/UpdateProfilePicture",
            payload
        );
        return data;
    },
    confirmEmail: async (payload) => {
        const { data } = await http.post(
            userEndpoint + "/ConfirmEmail",
            payload
        );
        return data;
    },
    resendEmailConfirmation: async () => {
        const { data } = await http.post(
            userEndpoint + "/ResendEmailConfirmation"
        );
        return data;
    }
};

export default userService;
