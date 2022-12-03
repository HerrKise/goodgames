import { createSlice, createAction } from "@reduxjs/toolkit";
import newsService from "../../services/news.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null
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
        }
    }
});

export const { reducer: newsReducer, actions } = newsSlice;
export const {
    newsRequested,
    newsReceived,
    newsRequestFailed,
    photoUrlRequested,
    photoUrlReceived,
    photoUrlRequestFailed
} = actions;

const createNewsRequested = createAction("news/createNewsRequested");
const createNewsFailed = createAction("news/createNewsFailed");
const createNewsSuccess = createAction("news/createNewsSuccess");

export const loadNews = (payload) => async (dispatch) => {
    dispatch(newsRequested());
    try {
        const data = await newsService.getNews(payload);
        dispatch(newsReceived(data));
    } catch (e) {
        dispatch(newsRequestFailed(e.responce.data.error));
    }
};

export const getPhotoUrl = (payload) => async (dispatch) => {
    dispatch(photoUrlRequested());
    try {
        const data = await newsService.uploadPicture(payload);
        dispatch(photoUrlReceived(data));
    } catch (e) {
        dispatch(photoUrlRequestFailed(e.responce.data.error));
    }
};

export const createNews = (payload) => async (dispatch) => {
    dispatch(createNewsRequested());
    try {
        const data = await newsService.create(payload);
        dispatch(createNewsSuccess());
    } catch (e) {
        dispatch(createNewsFailed(e.responce.data.error));
    }
};

export const getNewsData = () => (state) => state.news.entities;
export const getNewsLoadingStatus = () => (state) => state.news.isLoading;
export const getPhotoUrlData = () => (state) => state.news.uploadingPhotoUrl;
