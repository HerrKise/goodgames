import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { staffReducer } from "./reducers/staffSlice";
import { newsReducer } from "./reducers/newsSlice";
import { actionsReducer } from "./reducers/actionsSlice";
import { offersReducer } from "./reducers/offersSlice";

const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer,
    news: newsReducer,
    actions: actionsReducer,
    offers: offersReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
