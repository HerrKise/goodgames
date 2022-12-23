import { useDispatch, useSelector } from "react-redux";
import {
    getEventsLoadingStatus,
    getEventStages,
    getStagesList,
    updateGroup,
    updateStage
} from "../store/reducers/eventsSlice";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const AddResultsForm = () => {
    const { eventId } = useParams();
    const [currentStage, setCurrentStage] = useState(null);
    const [currentGroup, setCurrentGroup] = useState(null);
    const [participantsList, setParticipantsList] = useState(null);
    const [isEditingResultAvailable, setIsEditingResultAvailable] =
        useState(true);
    const dispatch = useDispatch();
    const isLoading = useSelector(getEventsLoadingStatus());
    const stages = useSelector(getEventStages());

    const handlePickStage = (stage) => {
        setCurrentStage(stage);
    };
    const handlePickGroup = (group) => {
        if (group.results.length === 0) {
            setCurrentGroup({
                ...group,
                results: [
                    ...group.reserveParticipants
                        .filter((slot) => slot.participantId !== null)
                        .map((slot) => {
                            return {
                                userId: slot.participantId,
                                place: 0,
                                kills: 0,
                                points: 0
                            };
                        }),
                    ...group.paidParticipants
                        .filter((slot) => slot.participantId !== null)
                        .map((slot) => {
                            return {
                                userId: slot.participantId,
                                place: 0,
                                kills: 0,
                                points: 0
                            };
                        }),
                    ...group.participants
                        .filter((slot) => slot.participantId !== null)
                        .map((slot) => {
                            return {
                                userId: slot.participantId,
                                place: 0,
                                kills: 0,
                                points: 0
                            };
                        })
                ]
            });
            setIsEditingResultAvailable(true);
        } else {
            setCurrentGroup(group);
            setIsEditingResultAvailable(false);
        }
        setParticipantsList([
            ...group.paidParticipants.filter(
                (slot) => slot.participantId !== null
            ),
            ...group.reserveParticipants.filter(
                (slot) => slot.participantId !== null
            ),
            ...group.participants.filter((slot) => slot.participantId !== null)
        ]);
    };

    useEffect(() => {
        console.log(currentGroup);
    }, [currentGroup]);

    useEffect(() => {
        console.log(currentStage);
    }, [currentStage]);

    const handleSaveGroupResults = (params) => {
        if (
            currentGroup &&
            currentGroup.results &&
            currentGroup.results.some((result) => result.place !== 0)
        ) {
            currentGroup.results.map((result) => {
                if (result.place !== 0 && result.place <= 4) {
                    setCurrentStage((prevState) => ({
                        ...prevState,
                        winners: [...prevState.winners, { id: result.userId }]
                    }));
                }
            });
        }
    };

    useEffect(() => {
        if (
            currentStage &&
            currentStage.winners.length !== 0 &&
            currentGroup &&
            currentGroup.results.length !== 0 &&
            isEditingResultAvailable &&
            eventId
        ) {
            console.log("СЧИТАЕМ РЕНДЕРЫ");
            const cuttedGroup = JSON.parse(JSON.stringify(currentGroup));
            delete cuttedGroup.id;
            delete cuttedGroup.participants;
            delete cuttedGroup.paidParticipants;
            delete cuttedGroup.reserveParticipants;
            console.log({ groupId: currentGroup.id, group: cuttedGroup });
            const cuttedStage = {
                id: currentStage.id,
                name: currentStage.name,
                stageStart: currentStage.stageStart,
                winners: currentStage.winners,
                view: currentStage.view
            };
            console.log(cuttedStage);
            dispatch(
                updateGroup({ groupId: currentGroup.id, group: cuttedGroup })
            );
            dispatch(updateStage(cuttedStage));
            dispatch(getStagesList({ payload: eventId }));
            setIsEditingResultAvailable(false);
        }
    }, [currentStage]);

    const handleResultsChange = (e, id) => {
        setCurrentGroup((prevState) => ({
            ...prevState,
            results: [
                ...prevState.results.map((result) => {
                    if (result.userId === id) {
                        return {
                            ...result,
                            [e.target.name]: Number(e.target.value)
                        };
                    }
                })
            ]
        }));
    };
    return (
        <>
            {!isLoading && stages && (
                <div>
                    <h3>Выберите этап</h3>
                    <ul>
                        {stages.map((stage) => (
                            <li key={stage.id}>
                                <button onClick={() => handlePickStage(stage)}>
                                    {stage.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {currentStage !== null && (
                        <ul>
                            {currentStage.groups.map((group) => (
                                <li key={group.id}>
                                    <button
                                        onClick={() => handlePickGroup(group)}
                                    >
                                        {group.name}
                                    </button>
                                    <p>
                                        Если этот этап последний, после внесения
                                        результатов групп нажмите кнопку ниже
                                    </p>
                                    <button>
                                        Эта кнопка сохраняет победителей
                                        последнего этапа в победителей события
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    {currentGroup !== null && participantsList !== null && (
                        <ul>
                            {currentGroup.results.map((participant) => (
                                <li key={participant.userId}>
                                    <p>
                                        {
                                            participantsList.find(
                                                (p) =>
                                                    p.participantId ===
                                                    participant.userId
                                            ).participantName
                                        }
                                    </p>
                                    {isEditingResultAvailable ? (
                                        <>
                                            <label htmlFor="place">
                                                Занятое место
                                            </label>
                                            <input
                                                id="place"
                                                name="place"
                                                value={Number(
                                                    participant.place
                                                )}
                                                type="number"
                                                onChange={(e) =>
                                                    handleResultsChange(
                                                        e,
                                                        participant.userId
                                                    )
                                                }
                                            />
                                            <label htmlFor="kills">
                                                Количество киллов
                                            </label>
                                            <input
                                                id="kills"
                                                name="kills"
                                                value={Number(
                                                    participant.kills
                                                )}
                                                type="number"
                                                onChange={(e) =>
                                                    handleResultsChange(
                                                        e,
                                                        participant.userId
                                                    )
                                                }
                                            />
                                            <label htmlFor="points">
                                                Набранные очки
                                            </label>
                                            <input
                                                id="points"
                                                name="points"
                                                value={Number(
                                                    participant.points
                                                )}
                                                type="number"
                                                onChange={(e) =>
                                                    handleResultsChange(
                                                        e,
                                                        participant.userId
                                                    )
                                                }
                                            />
                                            <button
                                                onClick={handleSaveGroupResults}
                                            >
                                                Сохранить результаты группы{" "}
                                                {currentGroup.name}
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <p>
                                                Занятое место:{" "}
                                                {participant.place}
                                            </p>
                                            <p>
                                                Количество киллов:{" "}
                                                {participant.kills}
                                            </p>
                                            <p>
                                                Набранные очки:{" "}
                                                {participant.points}
                                            </p>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default AddResultsForm;
