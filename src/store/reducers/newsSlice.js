import { createSlice, createAction } from "@reduxjs/toolkit";
import postService from "../../services/posts.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null,
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        newsRequested: (state) => {
            state.isLoading = true;
        },
        newsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        newsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        newsRequestedById: (state) => {
            state.isLoading = true;
        },
        newsReceivedById: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        newsRequestByIdFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        photoUrlRequested: (state) => {
            state.isLoading = true;
        },
        photoUrlReceived: (state, action) => {
            state.uploadingPhotoUrl = action.payload;
            state.isLoading = false;
        },
        photoUrlRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { reducer: newsReducer, actions } = newsSlice;
export const {
    newsRequested,
    newsReceived,
    newsRequestFailed,
    newsRequestedById,
    newsReceivedById,
    newsRequestByIdFailed,
    photoUrlRequested,
    photoUrlReceived,
    photoUrlRequestFailed,
} = actions;

const createNewsRequested = createAction("news/createNewsRequested");
const createNewsFailed = createAction("news/createNewsFailed");
const createNewsSuccess = createAction("news/createNewsSuccess");

const editNewsRequested = createAction("news/editNewsRequested");
const editNewsFailed = createAction("news/editNewsFailed");
const editNewsSuccess = createAction("news/editNewsSuccess");

const deleteNewsRequested = createAction("news/deleteNewsRequested");
const deleteNewsFailed = createAction("news/deleteNewsFailed");
const deleteNewsSuccess = createAction("news/deleteNewsSuccess");

export const loadNews = (payload) => async (dispatch) => {
    dispatch(newsRequested());
    try {
        const data = await postService.getPosts(payload);
        console.log(data);
        dispatch(newsReceived(data));
    } catch (e) {
        dispatch(newsRequestFailed(e));
    }
};

export const loadUserNews = (payload) => async (dispatch) => {
    dispatch(newsRequestedById());
    try {
        const data = await postService.getPostsByEditorId(payload);
        dispatch(newsReceivedById(data));
    } catch (e) {
        dispatch(newsRequestByIdFailed(e.responce.data.error));
    }
};

export const getPhotoUrl = (payload) => async (dispatch) => {
    dispatch(photoUrlRequested());
    try {
        const data = await postService.uploadPicture(payload);
        dispatch(photoUrlReceived(data));
    } catch (e) {
        dispatch(photoUrlRequestFailed(e.responce.data.error));
    }
};

export const createNews = (payload) => async (dispatch) => {
    dispatch(createNewsRequested());
    try {
        const data = await postService.create(payload);
        dispatch(createNewsSuccess());
    } catch (e) {
        dispatch(createNewsFailed(e));
    }
};

export const editNews = (payload) => async (dispatch) => {
    dispatch(editNewsRequested());
    try {
        const data = await postService.edit(payload);
        dispatch(editNewsSuccess());
    } catch (e) {
        dispatch(editNewsFailed(e.responce.data.error));
    }
};

export const deleteNews = (payload) => async (dispatch) => {
    dispatch(deleteNewsRequested());
    try {
        const data = await postService.delete(payload);
        dispatch(deleteNewsSuccess());
    } catch (e) {
        dispatch(deleteNewsFailed(e.responce.data.error));
    }
};

export const getNewsData = () => (state) => state.news.entities;
export const getNewsLoadingStatus = () => (state) => state.news.isLoading;
export const getPhotoUrlData = () => (state) => state.news.uploadingPhotoUrl;
