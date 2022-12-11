import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { staffReducer } from "./reducers/staffSlice";
import { newsReducer } from "./reducers/newsSlice";
import { actionsReducer } from "./reducers/actionsSlice";
import { offersReducer } from "./reducers/offersSlice";
import { teamsReducer } from "./reducers/teamsSlice";
import { eventsReducer } from "./reducers/eventsSlice";
import { shopReducer } from "./reducers/shopSlice";

const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer,
    news: newsReducer,
    actions: actionsReducer,
    offers: offersReducer,
    teams: teamsReducer,
    events: eventsReducer,
    shop: shopReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
