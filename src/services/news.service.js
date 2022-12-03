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
    },
    getNews: async (payload) => {
        const { data } = await http.get(newsEndpoint + "/GetNews", payload);
        return data;
    },
    getNewsByEditorId: async (payload) => {
        const { data } = await http.get(
            newsEndpoint + "/GetNewsByNewsEditorId",
            payload
        );
        return data;
    },
    uploadPicture: async (payload) => {
        const { data } = await http.post(
            newsEndpoint + "/UploadPicture",
            payload
        );
        console.log(data);
        return data;
    }
};

export default newsService;
