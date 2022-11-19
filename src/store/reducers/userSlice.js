import { createSlice, createAction } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import userService from "../../services/user.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          isLoggedIn: true,
          auth: { userId: localStorageService.getUserId() }
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          isLoggedIn: false,
          auth: null
      };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userRequested: (state) => {
            state.isLoading = true;
        },
        userReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess: (state, action) => {
            //тут возможно понадобиться еще через пейлоад передавать юзерайди, который надо будет отдельно полкчить по пост запросу
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        logout: (state, action) => {
            state.entities = null;
            state.auth = null;
            state.isLoading = false;
            localStorageService.removeAuthData();
        }
    }
});

export const { reducer: userReducer, actions } = userSlice;
export const {
    logout,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    userRequested,
    userReceived,
    usersRequestFailed
} = actions;

const editUserProfileRequested = createAction("user/editUserProfileRequested");
const editUserProfileFailed = createAction("users/editUserProfileFailed");
const editUserProfileSuccess = createAction("users/editUserProfileSuccess");

const updatePasswordRequested = createAction("user/updatePasswordRequested");
const updatePasswordFailed = createAction("users/updatePasswordFailed");
const updatePasswordSuccess = createAction("users/updatePasswordSuccess");

export const signIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { refreshToken, accessToken } = await authService.login(payload);
        localStorageService.setTokens(refreshToken, accessToken);
        const { userId } = await authService.getUserId();
        localStorageService.setUserId(userId);
        dispatch(authRequestSuccess());
    } catch (e) {
        console.log(e);
        dispatch(authRequestFailed(e.response.data.errors));
    }
};

export const register = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { refreshToken, accessToken } = await authService.login(payload);
        localStorageService.setTokens(refreshToken, accessToken);

        const { userId } = await authService.getUserId();
        localStorageService.setUserId(userId);
        dispatch(authRequestSuccess());
    } catch (e) {
        console.log(e);
        dispatch(authRequestFailed(e.response.data.errors));
    }
};

export const loadUserProfile = (payload) => async (dispatch) => {
    dispatch(userRequested());
    try {
        const data = await userService.getProfile(payload);
        dispatch(userReceived(data));
        console.log(data);
    } catch (e) {
        console.log(e);
        dispatch(usersRequestFailed(e.response.data.errors));
    }
};

export const editUserProfile = (payload) => async (dispatch) => {
    dispatch(editUserProfileRequested());
    try {
        const data = await userService.editProfile(payload);
        dispatch(editUserProfileSuccess());
    } catch (e) {
        console.log(e);
        dispatch(editUserProfileFailed());
    }
};

export const updatePassword = (payload) => async (dispatch) => {
    dispatch(updatePasswordRequested());
    try {
        const data = await userService.updatePassword(payload);
        dispatch(updatePasswordSuccess());
    } catch (e) {
        console.log(e);
        dispatch(updatePasswordFailed());
    }
};

export const getUserProfileData = () => (state) => state.user.entities;
export const getUserLoadingStatus = () => (state) => state.user.isLoading;
