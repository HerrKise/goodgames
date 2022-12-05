import { createSlice, createAction } from "@reduxjs/toolkit";
import postService from "../../services/posts.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null
};

export const offersSlice = createSlice({
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
        }
    }
});

export const { reducer: offersReducer, actions } = offersSlice;
export const {
    offersRequested,
    offersReceived,
    offersRequestFailed,
    offersRequestedById,
    offersReceivedById,
    offersRequestByIdFailed
} = actions;

const createOffersRequested = createAction("offers/createOffersRequested");
const createOffersFailed = createAction("offers/createOffersFailed");
const createOffersSuccess = createAction("offers/createOffersSuccess");

const editOffersRequested = createAction("offers/editOffersRequested");
const editOffersFailed = createAction("offers/editOffersFailed");
const editOffersSuccess = createAction("offers/editOffersSuccess");

const deleteOffersRequested = createAction("offers/deleteOffersRequested");
const deleteOffersFailed = createAction("offers/deleteOffersFailed");
const deleteOffersSuccess = createAction("offers/deleteOffersSuccess");

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

export const getOffersData = () => (state) => state.offers.entities;
export const getOffersLoadingStatus = () => (state) => state.offers.isLoading;
