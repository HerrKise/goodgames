import { createSlice, createAction } from "@reduxjs/toolkit";
import shopService from "../../services/shop.service";

const initialState = {
    entities: null,
    selectedShopItem: null,
    isLoading: false,
    error: null,
};

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        shopListItemsRequested: (state) => {
            state.isLoading = true;
        },
        shopListItemsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        shopListItemsFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        shopItemRequestedById: (state) => {
            state.isLoading = true;
        },
        shopItemRequestByIdSuccess: (state, action) => {
            state.selectedShopItem = action.payload;
            state.isLoading = false;
        },
        shopItemByIdFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { reducer: shopReducer, actions } = shopSlice;
export const {
    shopListItemsRequested,
    shopListItemsReceived,
    shopListItemsFailed,
    shopItemRequestedById,
    shopItemRequestByIdSuccess,
    shopItemByIdFailed,
} = actions;

const productCreateRequested = createAction("shop/productCreateRequested");
const productCreateFailed = createAction("shop/productCreateFailed");
const productCreateSuccess = createAction("shop/productCreateSuccess");

const productUpdateRequested = createAction("shop/productUpdateRequested");
const productUpdateSuccess = createAction("shop/productUpdateSuccess");
const productUpdateFailed = createAction("shop/productUpdateFailed");

const buyProductRequested = createAction("shop/buyProductRequested");
const buyProductSuccess = createAction("shop/buyProductSuccess");
const buyProductFailed = createAction("shop/buyProductFailed");

export const createProduct = (payload) => async (dispatch) => {
    dispatch(productCreateRequested());
    try {
        const data = await shopService.create(payload);
        dispatch(productCreateSuccess());
    } catch (e) {
        dispatch(productCreateFailed());
    }
};

export const buyProduct = (payload) => async (dispatch) => {
    dispatch(buyProductRequested());
    try {
        const data = await shopService.buy(payload);
        dispatch(buyProductSuccess());
    } catch (e) {
        dispatch(buyProductFailed());
    }
};

export const updateProduct = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const data = await eventService.create(payload);
        dispatch(productUpdateSuccess());
    } catch (e) {
        dispatch(productUpdateFailed());
    }
};

export const getProductsList = (payload) => async (dispatch) => {
    dispatch(shopListItemsRequested());
    try {
        const data = await shopService.getShopItemsList(payload);
        dispatch(shopListItemsReceived(data));
    } catch (e) {
        dispatch(shopListItemsFailed(e));
    }
};

export const getExtendedProductsList = (payload) => async (dispatch) => {
    dispatch(shopListItemsRequested());
    try {
        const data = await shopService.getExtendedShopItems(payload);
        dispatch(shopListItemsReceived(data));
    } catch (e) {
        dispatch(shopListItemsFailed(e));
    }
};

export const getSelectedShopItem = (payload) => async (dispatch) => {
    dispatch(shopItemRequestedById());
    try {
        const data = await shopService.getShopItem(payload);
        dispatch(shopItemRequestByIdSuccess(data));
    } catch (e) {
        dispatch(eventRequestByIdFailed(e));
    }
};

export const getShopListData = () => (state) => state.shop.entities;
export const getSelectedShopItemData = () => (state) =>
    state.shop.selectedShopItem;
export const getShopLoadingStatus = () => (state) => state.shop.isLoading;
