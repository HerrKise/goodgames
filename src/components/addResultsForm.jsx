import { useDispatch, useSelector } from "react-redux";
import {
    getEventsLoadingStatus,
    getEventStages,
    getStagesList,
    updateGroup,
    updateStage,
    getSelectedEvent,
    getSelectedEventData
} from "../store/reducers/eventsSlice";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import logopic from "../assets/Main/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const AddResultsForm = () => {
    const { eventId } = useParams();
    const [currentStage, setCurrentStage] = useState(null);
    const [currentGroup, setCurrentGroup] = useState(null);
    const [participantsList, setParticipantsList] = useState(null);
    const [isEditingResultAvailable, setIsEditingResultAvailable] =
        useState(true);
    const dispatch = useDispatch();
    const isLoading = useSelector(getEventsLoadingStatus());
    const event = useSelector(getSelectedEventData());
    const stages = event && event.stages;

    useEffect(() => {
        dispatch(getSelectedEvent({ id: eventId }));
    }, []);

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
                                id: slot.participantId,
                                place: 0,
                                kills: 0,
                                points: 0
                            };
                        }),
                    ...group.paidParticipants
                        .filter((slot) => slot.participantId !== null)
                        .map((slot) => {
                            return {
                                id: slot.participantId,
                                place: 0,
                                kills: 0,
                                points: 0
                            };
                        }),
                    ...group.participants
                        .filter((slot) => slot.participantId !== null)
                        .map((slot) => {
                            return {
                                id: slot.participantId,
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
            ...group.allParticipants.filter(
                (slot) => slot.participantId !== null
            )
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
                        winners: [...prevState.winners, { id: result.id }]
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
            console.log({ groupId: currentGroup.id, group: cuttedGroup });
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
                    if (result.id === id) {
                        return {
                            ...result,
                            [e.target.name]: Number(e.target.value)
                        };
                    }
                    return result;
                })
            ]
        }));
    };
    return (
        <>
            {!isLoading && stages && (
                <div className="bg-darkgrey min-h-[100vh]">
                    <NavLink
                        className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-10"
                        to="/"
                    >
                        <img
                            src={logopic}
                            alt="logopic"
                            className="w-[132px]"
                        />
                    </NavLink>
                    <main className="wrap pt-28 text-white pb-20 max-w-[400px]">
                        <h1 className="h1">Выберите этап</h1>
                        <ul className="grid grid-cols-3 my-5 gap-4">
                            {stages.map((stage) => (
                                <li key={stage.id} className="bg-yellow p-3 rounded-lg text-darkgrey font-semibold text-center">
                                    <button onClick={() => handlePickStage(stage)}>
                                        {stage.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {currentStage !== null && (
                            <ul className="space-y-3">
                                {currentStage.groups.map((group) => (
                                    <li key={group.id}  className="bg-grey p-3 rounded-lg text-white text-start space-y-2">
                                        <button
                                            className="bg-yellow p-3 rounded-lg text-darkgrey font-semibold text-center"
                                            onClick={() => handlePickGroup(group)}
                                        >
                                            {group.name}
                                        </button>
                                        <p className="p ">
                                            Если этот этап последний, после внесения
                                            результатов групп нажмите кнопку ниже, эта кнопка сохраняет победителей
                                            последнего этапа в победителей события
                                        </p>
                                        <button className="bg-darkgrey p-3 rounded-lg text-white font-semibold text-center w-full">
                                            Добавить победителей
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {currentGroup !== null && participantsList !== null && (
                            <ul>
                                {console.log(currentGroup, participantsList)}
                                {currentGroup.results.map((participant) => (
                                    <li key={participant.id}>
                                        {console.log(participant)}
                                        <p>
                                            {
                                                participantsList.find(
                                                    (p) =>
                                                        p.participantId ===
                                                        participant.id
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
                                                            participant.id
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
                                                            participant.id
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
                                                            participant.id
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
                    </main>
                </div>
            )}
        </>
    );
};

export default AddResultsForm;
