import { createSlice, createAction } from "@reduxjs/toolkit";
import eventService from "../../services/event.service";
import groupService from "../../services/group.service";
import stageService from "../../services/stage.service";

const initialState = {
    entities: null,
    selectedEvent: null,
    stages: null,
    groups: null,
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
        stagesRequested: (state) => {
            state.isLoading = true;
        },
        stagesReceived: (state, action) => {
            state.stages = action.payload;
            state.isLoading = false;
        },
        stagesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        groupsRequested: (state) => {
            state.isLoading = true;
        },
        groupsReceived: (state, action) => {
            state.groups = action.payload;
            state.isLoading = false;
        },
        groupsRequestFailed: (state, action) => {
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
    stagesRequested,
    stagesReceived,
    stagesRequestFailed,
    groupsRequested,
    groupsReceived,
    groupsRequestFailed
} = actions;

const eventCreateRequested = createAction("events/eventCreateRequested");
const eventCreateFailed = createAction("events/eventCreateFailed");
const eventCreateSuccess = createAction("events/eventCreateSuccess");

const eventUpdateRequested = createAction("events/eventUpdateRequested");
const eventUpdateSuccess = createAction("events/eventUpdateSuccess");
const eventUpdateFailed = createAction("events/eventUpdateFailed");

const stageUpdateRequested = createAction("events/stageUpdateRequested");
const stageUpdateSuccess = createAction("events/stageUpdateSuccess");
const stageUpdateFailed = createAction("events/stageUpdateFailed");

const groupUpdateRequested = createAction("events/groupUpdateRequested");
const groupUpdateSuccess = createAction("events/groupUpdateSuccess");
const groupUpdateFailed = createAction("events/groupUpdateFailed");

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

export const updateStage = (payload) => async (dispatch) => {
    dispatch(stageUpdateRequested());
    try {
        const data = await stageService.update(payload);
        dispatch(stageUpdateSuccess());
    } catch (e) {
        dispatch(stageUpdateFailed());
    }
};

export const updateGroup = (payload) => async (dispatch) => {
    dispatch(groupUpdateRequested());
    try {
        const data = await groupService.update(payload);
        dispatch(groupUpdateSuccess());
    } catch (e) {
        dispatch(groupUpdateFailed());
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

export const getStagesList =
    ({ payload, navigate }) =>
    async (dispatch) => {
        dispatch(stagesRequested());
        try {
            const data = await stageService.getStages(payload);
            dispatch(stagesReceived(data));
            if (navigate) {
                navigate();
            }
        } catch (e) {
            dispatch(stagesRequestFailed(e));
        }
    };

export const getGroupsList = (payload) => async (dispatch) => {
    dispatch(groupsRequested());
    try {
        const data = await groupService.getGroups(payload);
        dispatch(groupsRequestedReceived(data));
    } catch (e) {
        dispatch(groupsRequestedRequestFailed(e));
    }
};

export const getSelectedEvent =
    ({ id, navigate }) =>
    async (dispatch) => {
        dispatch(eventRequestedById());
        try {
            const data = await eventService.getById(id);
            dispatch(eventReceivedById(data));
            if (navigate) {
                navigate();
            }
        } catch (e) {
            dispatch(eventRequestByIdFailed(e));
        }
    };

export const getEventsListData = () => (state) => state.events.entities;
export const getSelectedEventData = () => (state) => state.events.selectedEvent;
export const getStagesData = () => (state) => state.events.selectedEvent.stages;
export const getEventStages = () => (state) => state.events.stages;
export const getGroupsData = () => (state) => state.events.groups;
export const getEventsLoadingStatus = () => (state) => state.events.isLoading;
