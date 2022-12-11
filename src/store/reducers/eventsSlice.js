import { createSlice, createAction } from "@reduxjs/toolkit";
import eventService from "../../services/event.service";

const initialState = {
    entities: null,
    selectedEvent: null,
    isLoading: false,
    error: null
};

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        eventsRequested: (state) => {
            state.isLoading = true;
        },
        eventsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        eventsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        eventCreateRequested: (state) => {
            state.isLoading = true;
        },
        eventCreateSuccess: (state, action) => {
            state.isLoading = false;
        },
        eventCreateFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        eventUpdateRequested: (state) => {
            state.isLoading = true;
        },
        eventUpdateSuccess: (state, action) => {
            state.isLoading = false;
        },
        eventUpdateFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        eventRequestedById: (state) => {
            state.isLoading = true;
        },
        eventReceivedById: (state, action) => {
            state.selectedEvent = action.payload;
            state.isLoading = false;
        },
        eventRequestByIdFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const { reducer: eventsReducer, actions } = eventsSlice;
export const {
    eventsRequested,
    eventsReceived,
    eventsRequestFailed,
    eventRequestedById,
    eventReceivedById,
    eventRequestByIdFailed,
    eventCreateSuccess,
    eventCreateRequested,
    eventCreateFailed,
    eventUpdateRequested,
    eventUpdateSuccess,
    eventUpdateFailed
} = actions;

export const create = (payload) => async (dispatch) => {
    dispatch(eventCreateRequested());
    try {
        const data = await eventService.create(payload);
        dispatch(eventCreateSuccess());
    } catch (e) {
        dispatch(eventCreateFailed(e));
    }
};

export const update = (payload) => async (dispatch) => {
    dispatch(eventUpdateRequested());
    try {
        const data = await eventService.create(payload);
        dispatch(eventUpdateSuccess());
    } catch (e) {
        dispatch(eventUpdateFailed(e));
    }
};

export const getEventsList = () => async (dispatch) => {
    dispatch(eventsRequested());
    try {
        const data = await eventService.get();
        dispatch(eventsReceived(data));
    } catch (e) {
        dispatch(eventsRequestFailed(e));
    }
};

export const getSelectedEvent = (id) => async (dispatch) => {
    dispatch(eventRequestedById());
    try {
        const data = await eventService.getById(id);
        dispatch(eventReceivedById(data));
    } catch (e) {
        dispatch(eventRequestByIdFailed(e));
    }
};

export const getEventsListData = () => (state) => state.events.entities;
export const getSelectedEventData = () => (state) => state.events.selectedEvent;
export const getEventsLoadingStatus = () => (state) => state.events.isLoading;
