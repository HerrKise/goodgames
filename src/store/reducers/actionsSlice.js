import { createSlice, createAction } from "@reduxjs/toolkit";
import postService from "../../services/posts.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null,
};

export const actionsSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        actionsRequested: (state) => {
            state.isLoading = true;
        },
        actionsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        actionsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        actionsRequestedById: (state) => {
            state.isLoading = true;
        },
        actionsReceivedById: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        actionsRequestByIdFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { reducer: newsReducer, actions } = newsSlice;
export const {
    actionsRequested,
    actionsReceived,
    actionsRequestFailed,
    actionsRequestedById,
    actionsReceivedById,
    actionsRequestByIdFailed,
} = actions;

const createActionsRequested = createAction("news/createNewsRequested");
const createActionsFailed = createAction("news/createNewsFailed");
const createActionsSuccess = createAction("news/createNewsSuccess");

const editActionsRequested = createAction("news/editNewsRequested");
const editActionsFailed = createAction("news/editNewsFailed");
const editActionsSuccess = createAction("news/editNewsSuccess");

const deleteActionsRequested = createAction("news/deleteNewsRequested");
const deleteActionsFailed = createAction("news/deleteNewsFailed");
const deleteActionsSuccess = createAction("news/deleteNewsSuccess");

export const loadActions = (payload) => async (dispatch) => {
    dispatch(actionsRequested());
    try {
        const data = await postService.getNews(payload);
        dispatch(actionsReceived(data));
    } catch (e) {
        dispatch(actionsRequestFailed(e.responce.data.error));
    }
};

export const loadUserActions = (payload) => async (dispatch) => {
    dispatch(actionsRequestedById());
    try {
        const data = await postService.getPostsByEditorId(payload);
        dispatch(actionsReceivedById(data));
    } catch (e) {
        dispatch(actionsRequestByIdFailed(e.responce.data.error));
    }
};

export const createActions = (payload) => async (dispatch) => {
    dispatch(createActionsRequested());
    try {
        const data = await postService.create(payload);
        dispatch(createActionsSuccess());
    } catch (e) {
        dispatch(createActionsFailed(e.responce.data.error));
    }
};

export const editActions = (payload) => async (dispatch) => {
    dispatch(editActionsRequested());
    try {
        const data = await postService.edit(payload);
        dispatch(editActionsSuccess());
    } catch (e) {
        dispatch(editActionsFailed(e.responce.data.error));
    }
};

export const deleteActions = (payload) => async (dispatch) => {
    dispatch(deleteActionsRequested());
    try {
        const data = await postService.delete(payload);
        dispatch(deleteActionsSuccess());
    } catch (e) {
        dispatch(deleteActionsFailed(e.responce.data.error));
    }
};

export const getOffersData = () => (state) => state.news.entities;
export const getOffersLoadingStatus = () => (state) => state.news.isLoading;
