import { createSlice, createAction } from "@reduxjs/toolkit";
import postService from "../../services/posts.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null,
};

export const offerSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
        offersRequested: (state) => {
            state.isLoading = true;
        },
        offersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        offersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        offersRequestedById: (state) => {
            state.isLoading = true;
        },
        offersReceivedById: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        offersRequestByIdFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { reducer: newsReducer, actions } = newsSlice;
export const {
    offersRequested,
    offersReceived,
    offersRequestFailed,
    offersRequestedById,
    offersReceivedById,
    offersRequestByIdFailed,
} = actions;

const createOffersRequested = createAction("news/createNewsRequested");
const createOffersFailed = createAction("news/createNewsFailed");
const createOffersSuccess = createAction("news/createNewsSuccess");

const editOffersRequested = createAction("news/editNewsRequested");
const editOffersFailed = createAction("news/editNewsFailed");
const editOffersSuccess = createAction("news/editNewsSuccess");

const deleteOffersRequested = createAction("news/deleteNewsRequested");
const deleteOffersFailed = createAction("news/deleteNewsFailed");
const deleteOffersSuccess = createAction("news/deleteNewsSuccess");

export const loadOffers = (payload) => async (dispatch) => {
    dispatch(offersRequested());
    try {
        const data = await postService.getNews(payload);
        dispatch(offersReceived(data));
    } catch (e) {
        dispatch(offersRequestFailed(e.responce.data.error));
    }
};

export const loadUserOffers = (payload) => async (dispatch) => {
    dispatch(offersRequestedById());
    try {
        const data = await postService.getPostsByEditorId(payload);
        dispatch(offersReceivedById(data));
    } catch (e) {
        dispatch(offersRequestByIdFailed(e.responce.data.error));
    }
};

export const createOffers = (payload) => async (dispatch) => {
    dispatch(createOffersRequested());
    try {
        const data = await postService.create(payload);
        dispatch(createOffersSuccess());
    } catch (e) {
        dispatch(createOffersFailed(e.responce.data.error));
    }
};

export const editOffers = (payload) => async (dispatch) => {
    dispatch(editOffersRequested());
    try {
        const data = await postService.edit(payload);
        dispatch(editOffersSuccess());
    } catch (e) {
        dispatch(editOffersFailed(e.responce.data.error));
    }
};

export const deleteOffers = (payload) => async (dispatch) => {
    dispatch(deleteOffersRequested());
    try {
        const data = await postService.delete(payload);
        dispatch(deleteOffersSuccess());
    } catch (e) {
        dispatch(deleteOffersFailed(e.responce.data.error));
    }
};

export const getOffersData = () => (state) => state.news.entities;
export const getOffersLoadingStatus = () => (state) => state.news.isLoading;
