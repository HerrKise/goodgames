import http from "../http";

const organizerEndpoint = "/Organizer";

const organizerService = {
    editProfile: async (payload) => {
        const { data } = await http.put(
            organizerEndpoint + "/EditProfile",
            payload
        );
        return data;
    },
    updateLogo: async (payload) => {
        const { data } = await http.post(
            organizerEndpoint + "/UpdateLogo",
            payload
        );
        return data;
    }
};

export default organizerService;
