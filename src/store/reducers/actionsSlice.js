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

export const { reducer: actionsReducer, actions } = actionsSlice;
export const {
    actionsRequested,
    actionsReceived,
    actionsRequestFailed,
    actionsRequestedById,
    actionsReceivedById,
    actionsRequestByIdFailed,
} = actions;

const createActionsRequested = createAction("actions/createActionsRequested");
const createActionsFailed = createAction("actions/createActionsFailed");
const createActionsSuccess = createAction("actions/createActionsSuccess");

const editActionsRequested = createAction("actions/editActionsRequested");
const editActionsFailed = createAction("actions/editActionsFailed");
const editActionsSuccess = createAction("actions/editActionsSuccess");

const deleteActionsRequested = createAction("actions/deleteActionsRequested");
const deleteActionsFailed = createAction("actions/deleteActionsFailed");
const deleteActionsSuccess = createAction("actions/deleteActionsSuccess");

export const loadActions = (payload) => async (dispatch) => {
    dispatch(actionsRequested());
    try {
        const data = await postService.getPosts(payload);
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

export const getActionsData = () => (state) => state.actions.entities;
export const getActionsLoadingStatus = () => (state) => state.actions.isLoading;
