import http from "../http";

const stageEndpoint = "/Stage";

const stageService = {
    getStages: async (payload) => {
        const { data } = await http.get(
            stageEndpoint + `/GetStages/${payload}`
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await http.put(
            stageEndpoint + "/UpdateStage",
            payload
        );
        return data;
    }
};

export default stageService;
