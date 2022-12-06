import http from "../http";

const postsEndpoint = "/News";

const postsService = {
    create: async (payload) => {
        const { data } = await http.post(
            postsEndpoint + "/CreateNews",
            payload
        );
        return data;
    },
    edit: async (payload) => {
        const { data } = await http.put(postsEndpoint + "/Edit", payload);
        return data;
    },
    delete: async (payload) => {
        const { data } = await http.delete(postsEndpoint + "/Delete", payload);
        return data;
    },
    getPosts: async (payload) => {
        const { data } = await http.get(postsEndpoint + "/GetNews", payload);
        return data;
    },
    getPostsByEditorId: async (payload) => {
        const { data } = await http.get(
            postsEndpoint + "/GetNewsByNewsEditorId",
            payload
        );
        return data;
    },
    uploadPicture: async (payload) => {
        const { data } = await http.post(
            postsEndpoint + "/UploadPicture",
            payload
        );
        console.log(data);
        return data;
    },
};

export default postsService;
