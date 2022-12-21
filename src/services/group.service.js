import http from "../http";

const groupEndpoint = "/Group";

const groupService = {
    join: async (payload) => {
        const { data } = await http.post(groupEndpoint + "/JoinGroup", payload);
        return data;
    },
    getGroups: async (payload) => {
        const { data } = await http.get(
            groupEndpoint + `/GetGroups/${payload}`
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await http.put(
            groupEndpoint + "/UpdateGroup",
            payload
        );
        return data;
    }
};

export default groupService;
