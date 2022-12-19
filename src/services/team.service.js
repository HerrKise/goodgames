import http from "../http";

const teamEndpoint = "/Team";

const teamService = {
    create: async (payload) => {
        const { data } = await http.post(teamEndpoint + "/Create", payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await http.put(teamEndpoint + "/Update", payload);
        return data;
    },
    updateLogo: async (payload) => {
        const { data } = await http.post(teamEndpoint + "/UpdateLogo", payload);
        return data;
    },
    join: async (payload) => {
        const { data } = await http.post(teamEndpoint + "/JoinTeam", payload);
        return data;
    },
    joinAsManager: async (payload) => {
        const { data } = await http.post(
            teamEndpoint + "/JoinTeamManager",
            payload
        );
        return data;
    },
    leave: async (payload) => {
        const { data } = await http.post(teamEndpoint + "/LeaveTeam", payload);
        return data;
    },
    getMyTeamsList: async () => {
        const { data } = await http.get(teamEndpoint + "/GetMyTeams");
        return data;
    },
    getInvitationCodeLink: async (teamId) => {
        console.log(teamId);
        const { data } = await http.get(
            teamEndpoint + `/GetInvitationCodeLink/${teamId}`
        );
        return data;
    },
    getManagerCodeLink: async (teamId) => {
        console.log(teamId);
        const { data } = await http.get(
            teamEndpoint + `/GetManagerInvitationCodeLinkQuery/${teamId}`
        );
        return data;
    },
    getTeam: async (teamId) => {
        const { data } = await http.get(teamEndpoint + `/GetTeam/${teamId}`);
        return data;
    },
    getTeamByInvitationCode: async (code) => {
        const { data } = await http.get(
            teamEndpoint + `/GetTeamByInvitationCode/${code}`
        );
        return data;
    },
    getTeammates: async (teamId) => {
        const { data } = await http.get(
            teamEndpoint + `/GetTeammates/${teamId}`
        );
        return data;
    }
};

export default teamService;
