import http from "../http";

const gameEndpoint = "/Game";

const gameService = {
    create: async (payload) => {
        const { data } = await http.post(gameEndpoint + "/CreateGame", payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await http.put(gameEndpoint + "/UpdateGame", payload);
        return data;
    },
    get: async (eventId) => {
        const { data } = await http.get(gameEndpoint + `/GetGames/${eventId}`);
        return data;
    }
};

export default gameService;
