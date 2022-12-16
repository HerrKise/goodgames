import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import localStorageService from "../services/localStorage.service";

import {
    getStagesData,
    getEventsLoadingStatus,
    getSelectedEventData
} from "../store/reducers/eventsSlice";

const StageInfoPage = () => {
    const event = useSelector(getSelectedEventData());
    const stages = useSelector(getStagesData());
    const isLoading = useSelector(getEventsLoadingStatus());
    const navigate = useNavigate();

    const handleNavigateToGroupPage = () => {
        navigate("/адрес-на-страницу-групп");
    };
    const participantId = "какой-то айди участника юзер/команда";
    const isParticipantApproved =
        event.participants.find(
            (participant) => participant.id === participantId
        ).isApproved === "true";

    return (
        <section>
            <h1>Список этапов</h1>
            <ul>
                {!isLoading &&
                    stages &&
                    stages.map((stage) => (
                        <li key={stage.id}>
                            <button
                                disabled={
                                    !isParticipantApproved ||
                                    (stages.length > 1 &&
                                        !stages[
                                            stages.indexOf(stage) - 1
                                        ].winners.includes(participantId))
                                }
                                onClick={handleNavigateToGroupPage}
                            >
                                {stage.name}
                            </button>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default StageInfoPage;
