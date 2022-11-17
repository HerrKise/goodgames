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
            const { email, password } = action.payload;
            try {
                const responce = await authService.login(email, password);
                localStorage.setItem(responce.data.tokens); // пусть пока токены будут в таком объекте
                state.entities = responce.data.user;
                state.isLoading = false;
            } catch (error) {
                console.log(e.responce?.data?.message);
            }
        }
    }
});

export const { reducer: userReducer, actions } = userSlice;
export const {} = actions;
