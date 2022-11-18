import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() }
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null
      };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: async (state, action) => {
            try {
                const responce = await authService.login(action.payload);
                localStorage.setItem(responce.data.tokens); // пусть пока токены будут в таком объекте
                state.entities = responce.data.user;
                state.isLoading = false;
            } catch (e) {
                console.log(e.responce?.data?.message);
            }
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
export const { login, logout } = actions;

export const register = (payload) => async (dispatch) => {
    try {
        const responce = await authService.register(payload);
        console.log(responce);
        localStorage.setItem(responce.data?.tokens); // пусть пока токены будут в таком объекте
        /* state.entities = responce.data.user;
        state.isLoading = false; */
    } catch (e) {
        console.log(e.responce?.data?.message);
    }
};
