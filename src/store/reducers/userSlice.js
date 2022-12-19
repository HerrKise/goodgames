import { createSlice, createAction } from "@reduxjs/toolkit";
import { redirect, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import userService from "../../services/user.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { staffLogout } from "./staffSlice";
/* const dispatch = useDispatch(); */

const initialState =
    localStorageService.getAccessToken() &&
    localStorageService.getIsStaff() !== "true"
        ? {
              entities: null,
              isLoading: false,
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
            state.isLoading = true;
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
        userLogout: (state, action) => {
            state.entities = null;
            state.auth = null;
            state.isLoading = false;
            state.isLoggedIn = false;
            localStorageService.removeAuthData();
        }
    }
});

export const { reducer: userReducer, actions } = userSlice;
export const {
    userLogout,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    userRequested,
    userReceived,
    usersRequestFailed
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

const confirmEmailRequested = createAction("user/confirmEmailRequested");
const confirmEmailFailed = createAction("user/confirmEmailFailed");
const confirmEmailSuccessfullySent = createAction(
    "user/confirmEmailSuccessfullySent"
);

export const loadUserProfile = () => async (dispatch) => {
    console.log("загрузчик начал работу");
    dispatch(userRequested());
    try {
        const data = await authService.getMe();
        dispatch(userReceived(data));
        console.log(data);
    } catch (e) {
        console.log(e);
        dispatch(usersRequestFailed(e.response.data.errors));
    }
};

export const signIn =
    ({ payload, navigate }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const { refreshToken, accessToken } = await authService.login(
                payload
            );
            localStorageService.setTokens(refreshToken, accessToken);
            const { id } = await authService.getMe();
            localStorageService.setUserId(id);
            dispatch(authRequestSuccess());
            /* dispatch(loadUserProfile({ userId: userId })); */
            navigate("/profilepage");
        } catch (e) {
            console.log(e);
            console.log(e.response.data.detail);
            dispatch(authRequestFailed(e.response.data.detail));
            toast.error(e.response.data.detail);
        }
    };

export const register =
    ({ payload, navigate }) =>
    async (dispatch) => {
        dispatch(staffLogout());
        dispatch(authRequested());
        try {
            const { refreshToken, accessToken } = await authService.register(
                payload
            );
            localStorageService.setTokens(refreshToken, accessToken);

            const { id } = await authService.getMe();
            localStorageService.setUserId(id);
            dispatch(authRequestSuccess());
            navigate("/profilepage");
        } catch (e) {
            console.log(e);
            Object.values(e.response.data.errors).map((log) =>
                toast.error(log[0])
            );
            dispatch(authRequestFailed(e.response.data.errors));
        }
    };

export const editUserProfile = (payload) => async (dispatch) => {
    dispatch(editUserProfileRequested());
    try {
        const data = await userService.editProfile(payload);
        dispatch(editUserProfileSuccess());
        toast.success("Profile was successfully updated");
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
        toast.success("Profile was successfully updated");
    } catch (e) {
        console.log(e);
        dispatch(updatePasswordFailed());
        Object.values(e.response.data.errors).map((log) => toast.error(log[0]));
    }
};

export const generateRestorePassword = (payload) => async (dispatch) => {
    dispatch(updatePasswordRequested());
    try {
        const data = await authService.generateRestorePassword(payload);
        dispatch(updatePasswordSuccess());
        toast.success(
            "Message with password restoring link is sent. Please, check your email"
        );
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
        toast.success("New password was set");
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
        const userId = localStorageService.getUserId();
        dispatch(loadUserProfile({ userId: userId }));
    } catch (e) {
        console.log(e);
        dispatch(updatePictureFailed());
    }
};

export const confirmEmail = (payload) => async (dispatch) => {
    dispatch(confirmEmailRequested());
    try {
        const data = await userService.confirmEmail(payload);
        dispatch(confirmEmailSuccessfullySent());
    } catch (e) {
        console.log(e);
        dispatch(confirmEmailFailed());
    }
};

export const resendEmailConfirmation = () => async (dispatch) => {
    dispatch(confirmEmailRequested());
    try {
        const data = await userService.resendEmailConfirmation();
        dispatch(confirmEmailSuccessfullySent());
    } catch (e) {
        console.log(e);
        dispatch(confirmEmailFailed());
    }
};

export const getUserProfileData = () => (state) => state.user.entities;
export const getUserMatches = () => (state) => state.user.entities.matches;
export const getUserLoadingStatus = () => (state) => state.user.isLoading;
export const getIsUserLoggedIn = () => (state) => state.user.isLoggedIn;
export const getErrors = () => (state) => state.user.error;
