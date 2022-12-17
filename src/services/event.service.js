import http from "../http";

const eventEndpoint = "/Event";

const eventService = {
    create: async (payload) => {
        const { data } = await http.post(
            eventEndpoint + "/CreateEvent",
            payload
        );
        return data;
    },
    joinEventCommand: async (payload) => {
        const { data } = await http.post(
            eventEndpoint + "/joinEventCommand",
            payload
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await http.put(
            eventEndpoint + "/UpdateEvent",
            payload
        );
        return data;
    },
    get: async () => {
        const { data } = await http.get(eventEndpoint + "/GetEvents");
        return data;
    },
    getById: async (id) => {
        const { data } = await http.get(eventEndpoint + "/GetEvent" + `/${id}`);
        return data;
    }
};

export default eventService;
