import http from "../http";

const newsEndpoint = "/News";

const newsService = {
    create: async (payload) => {
        const { data } = await http.post(newsEndpoint + "/Create", payload);
        return data;
    },
    edit: async (payload) => {
        const { data } = await http.put(newsEndpoint + "/Edit", payload);
        return data;
    },
    delete: async (payload) => {
        const { data } = await http.delete(newsEndpoint + "/Delete", payload);
        return data;
    }
};

export default newsService;
