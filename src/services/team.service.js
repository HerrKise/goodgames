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
    leave: async (payload) => {
        const { data } = await http.post(teamEndpoint + "/LeaveTeam", payload);
        return data;
    },
    getMyTeamsList: async () => {
        const { data } = await http.get(teamEndpoint + "/GetMyTeams");
        return data;
    },
    getInvitationCodeLink: async (teamId) => {
        const { data } = await http.get(
            teamEndpoint + `/GetInvitationCodeLink/${teamId}`
        );
        return data;
    },
    getTeam: async (teamId) => {
        const { data } = await http.get(teamEndpoint + `/GetMyTeams/${teamId}`);
        return data;
    }
};

export default teamService;
