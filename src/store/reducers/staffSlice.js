import { createSlice, createAction } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import staffService from "../../services/staff.service";
import userService from "../../services/user.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          isLoggedIn: true,
          role: null,
          auth: { userId: localStorageService.getUserId() }
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          isLoggedIn: false,
          role: null,
          auth: null
      };

export const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        staffRequested: (state) => {
            state.isLoading = true;
        },
        staffReceived: (state, action) => {
            state.entities = action.payload;
            state.role = action.payload.role;
            state.isLoading = false;
        },
        staffRequestFailed: (state, action) => {
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
            state.isLoading = false;
        },
        logout: (state, action) => {
            state.entities = null;
            state.auth = null;
            state.isLoading = false;
            state.isLoggedIn = false;
            localStorageService.removeAuthData();
        }
    }
});

export const { reducer: staffReducer, actions } = staffSlice;
export const {
    logout,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    staffRequested,
    staffReceived,
    staffRequestFailed
} = actions;

const editUserProfileRequested = createAction("user/editUserProfileRequested");
const editUserProfileFailed = createAction("user/editUserProfileFailed");
const editUserProfileSuccess = createAction("user/editUserProfileSuccess");

const updatePasswordRequested = createAction("user/updatePasswordRequested");
const updatePasswordFailed = createAction("user/updatePasswordFailed");
const updatePasswordSuccess = createAction("user/updatePasswordSuccess");

const updatePictureRequested = createAction("user/updatePictureRequested");
const updatePictureFailed = createAction("user/updatePictureFailed");
const updatePictureSuccess = createAction("user/updatePictureSuccess");

export const signIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { refreshToken, accessToken } = await staffService.login(payload);
        localStorageService.setTokens(refreshToken, accessToken);
        const { id } = await staffService.getProfile();
        localStorageService.setUserId(id);
        dispatch(authRequestSuccess());
    } catch (e) {
        console.log(e);
        dispatch(authRequestFailed(e.response.data.errors));
    }
};

// ======================================= ПЕРЕДЕЛАТЬ

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

// ======================================= ПЕРЕДЕЛАТЬ

export const loadUserProfile = () => async (dispatch) => {
    dispatch(userRequested());
    try {
        const data = await userService.getProfile();
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

export const generateRestorePassword = (payload) => async (dispatch) => {
    dispatch(updatePasswordRequested());
    try {
        const data = await authService.generateRestorePassword(payload);
        dispatch(updatePasswordSuccess());
    } catch (e) {
        console.log(e);
        dispatch(updatePasswordFailed());
    }
};

export const restorePassword = (payload) => async (dispatch) => {
    dispatch(updatePasswordRequested());
    try {
        const data = await authService.restorePassword(payload);
        dispatch(updatePasswordSuccess());
    } catch (e) {
        console.log(e);
        dispatch(updatePasswordFailed());
    }
};

export const updatePicture = (payload) => async (dispatch) => {
    dispatch(updatePictureRequested());
    try {
        const data = await userService.updateProfilePicture(payload);
        dispatch(updatePictureSuccess());
    } catch (e) {
        console.log(e);
        dispatch(updatePictureFailed());
    }
};

export const getUserProfileData = () => (state) => state.user.entities;
export const getUserLoadingStatus = () => (state) => state.user.isLoading;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getIsStaff = () => (state) => state.user.role;
