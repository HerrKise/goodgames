import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { staffReducer } from "./reducers/staffSlice";

const rootReducer = combineReducers({ user: userReducer, staff: staffReducer });

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
