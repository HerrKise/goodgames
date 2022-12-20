import http from "../http";

const groupEndpoint = "/Group";

const groupService = {
    join: async (payload) => {
        const { data } = await http.post(groupEndpoint + "/JoinGroup", payload);
        return data;
    }
};

export default groupService;
