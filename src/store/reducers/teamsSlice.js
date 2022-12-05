import { createSlice, createAction } from "@reduxjs/toolkit";
import teamService from "../../services/team.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null,
    selectedTeam: null,
};

export const teamsSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        teamsRequested: (state) => {
            state.isLoading = true;
        },
        teamsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        teamsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        teamsRequestedById: (state) => {
            state.isLoading = true;
        },
        teamsReceivedById: (state, action) => {
            state.selectedTeam = action.payload;
            state.isLoading = false;
        },
        teamsRequestByIdFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { reducer: teamsReducer, actions } = teamsSlice;

export const {
    teamsRequested,
    teamsReceived,
    teamsRequestFailed,
    teamsRequestedById,
    teamsReceivedById,
    teamsRequestByIdFailed,
} = actions;

const createTeamsRequested = createAction("teams/createTeamsRequested");
const createTeamsFailed = createAction("teams/createTeamsFailed");
const createTeamsSuccess = createAction("teams/createTeamsSuccess");

const editTeamsRequested = createAction("teams/editTeamsRequested");
const editTeamsFailed = createAction("teams/editTeamsFailed");
const editTeamsSuccess = createAction("teams/editTeamsSuccess");

const deleteTeamsRequested = createAction("teams/deleteTeamsRequested");
const deleteTeamsFailed = createAction("teams/deleteTeamsFailed");
const deleteTeamsSuccess = createAction("teams/deleteTeamsSuccess");

const updateTeamsPictureRequested = createAction(
    "teams/updateTeamsPictureRequested"
);
const updateTeamsPictureFailed = createAction("teams/updateTeamsPictureFailed");

const updateTeamsPictureSuccess = createAction(
    "teams/updateTeamsPictureSuccess"
);

const joinTeamsRequested = createAction("teams/joinTeamsRequested");
const joinTeamsFailed = createAction("teams/joinTeamsFailed");
const joinTeamsSuccess = createAction("teams/joinTeamsSuccess");

const leaveTeamsRequested = createAction("teams/leaveTeamsRequested");
const leaveTeamsFailed = createAction("teams/leaveTeamsFailed");
const leaveTeamsSuccess = createAction("teams/leaveTeamsSuccess");

const getInvCodeRequested = createAction("teams/getInvCodeRequested");
const getInvCodeFailed = createAction("teams/getInvCodeFailed");
const getInvCodeSuccess = createAction("teams/getInvCodeSuccess");

export const createTeams = (payload) => async (dispatch) => {
    dispatch(createTeamsRequested());
    try {
        const data = await teamService.create(payload);
        dispatch(createTeamsSuccess());
    } catch (e) {
        dispatch(createTeamsFailed(e.responce.data.error));
    }
};

export const editTeams = (payload) => async (dispatch) => {
    dispatch(editTeamsRequested());
    try {
        const data = await teamService.update(payload);
        dispatch(editTeamsSuccess());
    } catch (e) {
        dispatch(editTeamsFailed(e.responce.data.error));
    }
};

export const deleteTeams = (payload) => async (dispatch) => {
    dispatch(deleteTeamsRequested());
    try {
        const data = await teamService.delete(payload);
        dispatch(deleteTeamsSuccess());
    } catch (e) {
        dispatch(deleteTeamsFailed(e.responce.data.error));
    }
};

export const updateTeamsPicture = (payload) => async (dispatch) => {
    dispatch(updateTeamsPictureRequested());
    try {
        const data = await teamService.updateLogo(payload);
        dispatch(updateTeamsPictureSuccess());
    } catch (e) {
        dispatch(updateTeamsPictureFailed(e.responce.data.error));
    }
};

export const joinTeams = (payload) => async (dispatch) => {
    dispatch(joinTeamsRequested());
    try {
        const data = await teamService.join(payload);
        dispatch(joinTeamsSuccess());
    } catch (e) {
        dispatch(joinTeamsFailed(e.responce.data.error));
    }
};

export const leaveTeams = (payload) => async (dispatch) => {
    dispatch(leaveTeamsRequested());
    try {
        const data = await teamService.leave(payload);
        dispatch(leaveTeamsSuccess());
    } catch (e) {
        dispatch(leaveTeamsFailed(e.responce.data.error));
    }
};

export const getInvitationLink = (payload) => async (dispatch) => {
    dispatch(getInvCodeRequested());
    try {
        const data = await teamService.getInvitationCodeLink(payload);
        dispatch(getInvCodeSuccess());
    } catch (e) {
        dispatch(getInvCodeFailed(e.responce.data.error));
    }
};

export const loadMyTeams = (payload) => async (dispatch) => {
    dispatch(teamsRequested());
    try {
        const data = await teamService.getMyTeamsList(payload);
        dispatch(teamsReceived(data));
    } catch (e) {
        dispatch(teamsRequestFailed(e));
    }
};

export const loadTeamByID = (payload) => async (dispatch) => {
    dispatch(teamsRequestedById());
    try {
        const data = await teamService.getTeam(payload);
        dispatch(teamsReceivedById(data));
    } catch (e) {
        dispatch(teamsRequestByIdFailed(e.responce.data.error));
    }
};

export const getTeamsData = () => (state) => state.teams.entities;
export const getSelectedTeam = () => (state) => state.teams.selectedTeam;
export const getTeamsLoadingStatus = () => (state) => state.teams.isLoading;
