import { useDispatch, useSelector } from "react-redux";

import {
    getTeamsLoadingStatus,
    loadMyTeams
} from "../store/reducers/teamsSlice";
import {
    getSelectedEventData,
    getEventsLoadingStatus,
    joinTeamApplication
} from "../store/reducers/eventsSlice";

const ChooseTeamToParticipate = () => {
    const dispatch = useDispatch();
    const isLoading =
        useSelector(getTeamsLoadingStatus()) &&
        useSelector(getEventsLoadingStatus());
    const event = useSelector(getSelectedEventData());
    const myTeamsList = useDispatch(loadMyTeams());

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
            {!isLoading && myTeamsList && (
                <section>
                    <h1>Выберете команду для участия: </h1>
                    {myTeamsList.map((team) => (
                        <div key={team.id}>
                            <h1>
                                {team.tag}: {team.title}
                            </h1>
                            <img src={team.logo.path} />
                            <button
                                onClick={() => handlePickTeam(team.id)}
                                disabled={event.paticipants.includes(
                                    (participant) => participant.id === team.id
                                )}
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
