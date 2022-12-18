import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
    getTeamsLoadingStatus,
    loadMyTeams,
    getTeamsData
} from "../store/reducers/teamsSlice";
import {
    getSelectedEventData,
    getEventsLoadingStatus,
    joinTeamApplication
} from "../store/reducers/eventsSlice";

const ChooseTeamToParticipate = () => {
    const dispatch = useDispatch();
    const isLoadingTeams = useSelector(getTeamsLoadingStatus());
    const event = useSelector(getSelectedEventData());
    const myTeamsList = useSelector(getTeamsData());
    useEffect(() => {
        dispatch(loadMyTeams());
    }, []);

    console.log(myTeamsList);

    const handlePickTeam = (teamId) => {
        dispatch(
            joinTeamApplication({
                id: teamId,
                eventId: event.id,
                isApproved: "Pending"
            })
        );
    };
    return (
        <>
            {!isLoadingTeams && myTeamsList && (
                <section>
                    <h1>Выберете команду для участия: </h1>
                    {myTeamsList.map((team) => (
                        <div key={team.id}>
                            <h1>
                                {team.tag}: {team.title}
                            </h1>
                            {/* <img src={team.logo.path} /> */}
                            <button
                                onClick={() => handlePickTeam(team.id)}
                                /* disabled={event.paticipants.includes(
                                    (participant) => participant.id === team.id
                                )} */
                            >
                                Отправить заявку
                            </button>
                        </div>
                    ))}
                </section>
            )}
        </>
    );
};

export default ChooseTeamToParticipate;
