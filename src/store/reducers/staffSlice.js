import { createSlice } from "@reduxjs/toolkit";
import staffService from "../../services/staff.service";
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

export const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        login: async (state, action) => {
            const { email, password } = action.payload;
            try {
                const responce = await staffService.login(email, password);
                localStorage.setItem(responce.data.tokens); // пусть пока токены будут в таком объекте
                state.entities = responce.data.staff; // мб responce.data.user, уточнить с бэком
                state.isLoading = false;
            } catch (error) {
                console.log(e.responce?.data?.message);
            }
        },
        register: async (state, action) => {
            const { email, role, password, login } = action.payload;
            try {
                const responce = await authService.register(
                    email,
                    role,
                    password,
                    login
                );
                localStorage.setItem(responce.data.tokens); // пусть пока токены будут в таком объекте
                state.entities = responce.data.staff; // мб responce.data.user, уточнить с бэком
                state.isLoading = false;
            } catch (error) {
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

export const { reducer: staffReducer, actions } = staffSlice;
export const { login, register, logout } = actions;
