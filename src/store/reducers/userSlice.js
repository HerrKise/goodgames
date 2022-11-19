import { createSlice } from "@reduxjs/toolkit";
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

export const signIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { refreshToken, accessToken } = await authService.login(payload);
        localStorageService.setTokens(refreshToken, accessToken);
        const { userId } = await authService.getUserId();
        localStorageService.setUserId(userId);

        // работает норм
        /* const data = await userService.getProfile({ userId: userId });
        console.log(data); */

        // пусть пока токены будут в таком объекте
        /* state.entities = responce.data.user;
        state.isLoading = false; */
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
        // пусть пока токены будут в таком объекте
        /* state.entities = responce.data.user;
        state.isLoading = false; */
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
