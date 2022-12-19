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
    eventRequestByIdFailed
} = actions;

const eventCreateRequested = createAction("events/eventCreateRequested");
const eventCreateFailed = createAction("events/eventCreateFailed");
const eventCreateSuccess = createAction("events/eventCreateSuccess");

const eventUpdateRequested = createAction("events/eventUpdateRequested");
const eventUpdateSuccess = createAction("events/eventUpdateSuccess");
const eventUpdateFailed = createAction("events/eventUpdateFailed");

const joinTeamApplicationRequested = createAction(
    "events/joinTeamApplicationRequested"
);
const joinTeamApplicationSuccess = createAction(
    "events/joinTeamApplicationSuccess"
);
const joinTeamApplicationUpdateFailed = createAction(
    "events/joinTeamApplicationUpdateFailed"
);

export const create = (payload) => async (dispatch) => {
    dispatch(eventCreateRequested());
    try {
        const data = await eventService.create(payload);
        dispatch(eventCreateSuccess());
    } catch (e) {
        dispatch(eventCreateFailed());
    }
};

export const update = (payload) => async (dispatch) => {
    dispatch(eventUpdateRequested());
    try {
        const data = await eventService.update(payload);
        dispatch(eventUpdateSuccess());
    } catch (e) {
        dispatch(eventUpdateFailed());
    }
};

export const joinTeamApplication = (payload) => async (dispatch) => {
    dispatch(joinTeamApplicationRequested());
    try {
        const data = await eventService.joinEventCommand(payload);
        dispatch(joinTeamApplicationSuccess());
    } catch (e) {
        dispatch(joinTeamApplicationUpdateFailed());
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

export const getSelectedEvent =
    ({ id, navigate }) =>
    async (dispatch) => {
        dispatch(eventRequestedById());
        try {
            const data = await eventService.getById(id);
            dispatch(eventReceivedById(data));
            navigate();
        } catch (e) {
            dispatch(eventRequestByIdFailed(e));
        }
    };

export const getEventsListData = () => (state) => state.events.entities;
export const getSelectedEventData = () => (state) => state.events.selectedEvent;
export const getStagesData = () => (state) => state.events.selectedEvent.stages;
export const getEventsLoadingStatus = () => (state) => state.events.isLoading;
