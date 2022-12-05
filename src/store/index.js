import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { staffReducer } from "./reducers/staffSlice";
import { newsReducer } from "./reducers/newsSlice";
import { actionsReducer } from "./reducers/actionsSlice";
import { offersReducer } from "./reducers/offersSlice";
import { teamsReducer } from "./reducers/teamsSlice";

const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer,
    news: newsReducer,
    actions: actionsReducer,
    offers: offersReducer,
    teams: teamsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
