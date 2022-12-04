import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { staffReducer } from "./reducers/staffSlice";
import { newsReducer } from "./reducers/newsSlice";

const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer,
    news: newsReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
