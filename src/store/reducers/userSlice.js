import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";

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
export const { logout, authRequested, authRequestSuccess, authRequestFailed } =
    actions;

export const signIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const response = await authService.login(payload);
        localStorageService.setTokens(
            response.refreshToken,
            response.accessToken
        ); // пусть пока токены будут в таком объекте
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
        const response = await authService.register(payload);
        console.log(response);
        localStorageService.setTokens(
            response.refreshToken,
            response.accessToken
        );
        dispatch(authRequestSuccess());
        // пусть пока токены будут в таком объекте
        /* state.entities = responce.data.user;
        state.isLoading = false; */
    } catch (e) {
        console.log(e);
        dispatch(authRequestFailed(e.response.data.errors));
    }
};
