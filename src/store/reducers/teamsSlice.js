import { createSlice, createAction } from "@reduxjs/toolkit";
import teamService from "../../services/team.service";

const initialState = {
    entities: null,
    isLoading: false,
    uploadingPhotoUrl: null,
    error: null,
    selectedTeam: null,
    selectedTeamByCode: null,
    code: null,
    teammates: null,
    managerCode: null,
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
        getInvCodeRequested: (state, action) => {
            state.isLoading = true;
        },
        getInvCodeReceived: (state, action) => {
            state.code = action.payload;
            state.isLoading = false;
        },
        getInvCodeFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        getManagerCodeRequested: (state, action) => {
            state.isLoading = true;
        },
        getManagerCodeReceived: (state, action) => {
            state.managerCode = action.payload;
            state.isLoading = false;
        },
        getManagerCodeFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        teamsRequestedByCode: (state) => {
            state.isLoading = true;
        },
        teamsReceivedByCode: (state, action) => {
            state.selectedTeamByCode = action.payload;
            state.isLoading = false;
        },
        teamsRequestByCodeFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        teammatesRequested: (state) => {
            state.isLoading = true;
        },
        teammatesReceived: (state, action) => {
            state.teammates = action.payload;
            state.isLoading = false;
        },
        teammatesRequestFailed: (state, action) => {
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
    getInvCodeRequested,
    getInvCodeReceived,
    getInvCodeFailed,
    teamsRequestedByCode,
    teamsReceivedByCode,
    teamsRequestByCodeFailed,
    teammatesRequested,
    teammatesReceived,
    teammatesRequestFailed,
    getManagerCodeRequested,
    getManagerCodeReceived,
    getManagerCodeFailed,
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

const joinTeamsAsManagerRequested = createAction(
    "teams/joinTeamsAsManagerRequested"
);
const joinTeamsAsManagerFailed = createAction("teams/joinTeamsAsManagerFailed");
const joinTeamsAsManagerSuccess = createAction(
    "teams/joinTeamsAsManagerSuccess"
);

const leaveTeamsRequested = createAction("teams/leaveTeamsRequested");
const leaveTeamsFailed = createAction("teams/leaveTeamsFailed");
const leaveTeamsSuccess = createAction("teams/leaveTeamsSuccess");


export const loadMyTeams = (payload) => async (dispatch) => {
    dispatch(teamsRequested());
    try {
        const data = await teamService.getMyTeamsList(payload);
        dispatch(teamsReceived(data));
    } catch (e) {
        dispatch(teamsRequestFailed(e));
    }
};

export const createTeams = (payload) => async (dispatch) => {
    dispatch(createTeamsRequested());
    try {
        const data = await teamService.create(payload);
        dispatch(createTeamsSuccess());
        dispatch(loadMyTeams());
    } catch (e) {
        dispatch(createTeamsFailed(e.responce.data.error));
    }
};

export const editTeams = (payload) => async (dispatch) => {
    dispatch(editTeamsRequested());
    try {
        const data = await teamService.update(payload);
        dispatch(editTeamsSuccess());
        dispatch(loadMyTeams());
    } catch (e) {
        dispatch(editTeamsFailed(e));
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
        dispatch(updateTeamsPictureFailed(e));
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

export const joinTeamAsManager = (payload) => async (dispatch) => {
    dispatch(joinTeamsAsManagerRequested());
    try {
        const data = await teamService.joinAsManager(payload);
        dispatch(joinTeamsAsManagerSuccess());
    } catch (e) {
        dispatch(joinTeamsAsManagerFailed(e.responce.data.error));
    }
};

export const leaveTeams = (payload) => async (dispatch) => {
    dispatch(leaveTeamsRequested());
    try {
        const data = await teamService.leave(payload);
        dispatch(leaveTeamsSuccess());
        dispatch(loadMyTeams());
    } catch (e) {
        dispatch(leaveTeamsFailed(e));
    }
};

export const getInvitationCode = (payload) => async (dispatch) => {
    dispatch(getInvCodeRequested());
    try {
        const data = await teamService.getInvitationCodeLink(payload);
        dispatch(getInvCodeReceived(data.code));
    } catch (e) {
        dispatch(getInvCodeFailed(e));
    }
};

export const loadManagerCode = (payload) => async (dispatch) => {
    dispatch(getManagerCodeRequested());
    try {
        const data = await teamService.getManagerCodeLink(payload);
        dispatch(getManagerCodeReceived(data.code));
    } catch (e) {
        dispatch(getManagerCodeFailed(e));
    }
};


export const loadTeamByID = (payload) => async (dispatch) => {
    dispatch(teamsRequestedById());
    try {
        const data = await teamService.getTeam(payload);
        dispatch(teamsReceivedById(data));
    } catch (e) {
        dispatch(teamsRequestByIdFailed(e));
    }
};

export const loadTeamByCode = (payload) => async (dispatch) => {
    dispatch(teamsRequestedByCode());
    try {
        const data = await teamService.getTeamByInvitationCode(payload);
        dispatch(teamsReceivedByCode(data));
    } catch (e) {
        dispatch(teamsRequestByCodeFailed(e));
    }
};

export const loadTeammates = (payload) => async (dispatch) => {
    dispatch(teammatesRequested());
    try {
        const data = await teamService.getTeammates(payload);
        console.log(data);
        dispatch(teammatesReceived(data));
    } catch (e) {
        dispatch(teammatesRequestFailed(e));
    }
};

export const getTeamsData = () => (state) => state.teams.entities;
export const getSelectedTeam = () => (state) => state.teams.selectedTeam;
export const getTeamsLoadingStatus = () => (state) => state.teams.isLoading;
export const getTeamsInvCode = () => (state) => state.teams.code;
export const getTeamByCode = () => (state) => state.teams.selectedTeamByCode;
export const getTeammatesData = () => (state) => state.teams.teammates;
export const getManagerCodeData = () => (state) => state.teams.managerCode;
