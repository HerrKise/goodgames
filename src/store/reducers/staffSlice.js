import { createSlice, createAction } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import organizerService from "../../services/organizer.service";
import staffService from "../../services/staff.service";
import userService from "../../services/user.service";
import { userLogout } from "./userSlice";

const initialState =
    localStorageService.getAccessToken() &&
    localStorageService.getIsStaff() === "true"
        ? {
              entities: await staffService.getProfile(),
              isLoading: false,
              error: null,
              isLoggedIn: true,
              role: "staff",
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
            state.isLoading = true;
        },
        authRequestSuccess: (state, action) => {
            //тут возможно понадобиться еще через пейлоад передавать юзерайди, который надо будет отдельно полкчить по пост запросу
            state.isLoggedIn = true;
            state.isLoading = false;
            state.role = "staff";
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        staffLogout: (state, action) => {
            state.entities = null;
            state.auth = null;
            state.isLoading = false;
            state.isLoggedIn = false;
            console.log("сброс стафа");
            localStorageService.removeAuthData();
        }
    }
});

export const { reducer: staffReducer, actions } = staffSlice;
export const {
    staffLogout,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    staffRequested,
    staffReceived,
    staffRequestFailed
} = actions;

const editStaffProfileRequested = createAction(
    "staff/editUserProfileRequested"
);
const editStaffProfileFailed = createAction("staff/editUserProfileFailed");
const editStaffProfileSuccess = createAction("staff/editUserProfileSuccess");

const updatePasswordRequested = createAction("staff/updatePasswordRequested");
const updatePasswordFailed = createAction("staff/updatePasswordFailed");
const updatePasswordSuccess = createAction("staff/updatePasswordSuccess");

const updateLogoRequested = createAction("staff/updateLogoRequested");
const updateLogoFailed = createAction("staff/updateLogoFailed");
const updateLogoSuccess = createAction("staff/updateLogoSuccess");

const getUsersRequested = createAction("staff/getUsersRequested");
const getUsersFailed = createAction("staff/getUsersFailed");
const getUsersSuccess = createAction("staff/getUsersSuccess");

const getUserRequested = createAction("staff/getUserRequested");
const getUserFailed = createAction("staff/getUserFailed");
const getUserSuccess = createAction("staff/getUserSuccess");

export const loadStaffProfile = () => async (dispatch) => {
    dispatch(staffRequested());
    try {
        const data = await staffService.getProfile();
        dispatch(staffReceived(data));
        console.log(data);
    } catch (e) {
        console.log(e);
        dispatch(staffRequestFailed(e.response.data.errors));
    }
};

export const signIn =
    ({ payload, navigate }) =>
    async (dispatch) => {
        dispatch(userLogout());
        dispatch(authRequested());
        try {
            const { refreshToken, accessToken } = await staffService.login(
                payload
            );
            localStorageService.setTokens(refreshToken, accessToken);
            const { id } = await staffService.getProfile();
            localStorageService.setUserId(id);
            localStorageService.setStaff("true");
            dispatch(authRequestSuccess());
            dispatch(loadStaffProfile());
            navigate("/staff");
        } catch (e) {
            console.log(e);
            dispatch(authRequestFailed(e.response.data.errors));
        }
    };

// ======================================= ПЕРЕДЕЛАТЬ

export const register = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { data } = await staffService.createEmployee(payload);
        console.log(data);
        /* localStorageService.setTokens(refreshToken, accessToken);

        const { userId } = await authService.getUserId();
        localStorageService.setUserId(userId); */
        dispatch(authRequestSuccess());
    } catch (e) {
        console.log(e);
        dispatch(authRequestFailed(e.response.data.errors));
    }
};

// ======================================= ПЕРЕДЕЛАТЬ

export const editUserProfile = (payload) => async (dispatch) => {
    dispatch(editStaffProfileRequested());
    try {
        const data = await organizerService.editProfile(payload);
        dispatch(editStaffProfileSuccess());
        toast.success("Profile was successfully updated");
    } catch (e) {
        console.log(e);
        dispatch(editStaffProfileFailed());
    }
};

/* export const updatePassword = (payload) => async (dispatch) => {
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
}; */

export const updateLogo = (payload) => async (dispatch) => {
    dispatch(updateLogoRequested());
    try {
        const data = await organizerService.updateLogo(payload);
        dispatch(updateLogoSuccess());
    } catch (e) {
        console.log(e);
        dispatch(updateLogoFailed());
    }
};

export const getUsersList = (payload) => async (dispatch) => {
    dispatch(getUsersRequested());
    try {
        const data = await staffService.getUsersList(payload);
        dispatch(getUsersSuccess());
        console.log(data);
    } catch (e) {
        console.log(e);
        dispatch(getUsersFailed());
    }
};

export const getUser = (payload) => async (dispatch) => {
    dispatch(getUserRequested());
    try {
        const data = await staffService.getUser(payload);
        dispatch(getUserSuccess());
    } catch (e) {
        console.log(e);
        dispatch(getUserFailed());
    }
};

export const getStaffProfileData = () => (state) => state.staff.entities;
export const getStaffLoadingStatus = () => (state) => state.staff.isLoading;
export const getIsStaffLoggedIn = () => (state) => state.staff.isLoggedIn;
export const getIsStaff = () => (state) => state.staff.role !== null;
