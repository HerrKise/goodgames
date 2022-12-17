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
        const { data } = await http.put(postsEndpoint + "/EditNews", payload);
        return data;
    },
    delete: async (payload) => {
        console.log("in postService", payload);
        const { data } = await http.delete(
            postsEndpoint + "/DeleteNews",
            payload
        );
        return data;
    },
    getPosts: async (payload) => {
        const { data } = await http.get(
            postsEndpoint + `/GetNews?Type=${payload.type}`
        );
        return data;
    },
    getPostsByEditorId: async (payload) => {
        const { data } = await http.get(
            postsEndpoint +
                `/GetNewsByNewsEditorId?Type=${payload.type}&NewsEditorId=${payload.newsEditorId}`
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
