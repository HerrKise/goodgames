import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateStageForm from "../components/createStageForm";
import localStorageService from "../services/localStorage.service";
import {
    create,
    getEventsLoadingStatus,
    getSelectedEventData
} from "../store/reducers/eventsSlice";
import moment from "moment";

const EditEventForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getEventsLoadingStatus());
    const selectedEvent = useSelector(getSelectedEventData());
    console.log(selectedEvent);
    const [eventSettings, setEventSettings] = useState(selectedEvent);

    useEffect(() => {
        if (!isLoading && selectedEvent) {
            console.log(selectedEvent);
            setEventSettings(selectedEvent);
        }
    }, []);

    useEffect(() => {
        console.log(eventSettings);
    }, [eventSettings]);

    useEffect(() => {
        if (eventSettings.isPaid === "false") {
            setEventSettings((prevState) => ({
                ...prevState,
                entryPrice: 0
            }));
        }
    }, [eventSettings.isPaid]);

    useEffect(() => {
        if (eventSettings.isQuantityLimited === "false") {
            setEventSettings((prevState) => ({
                ...prevState,
                maxQuantity: 10000000
            }));
        }
    }, [eventSettings.isQuantityLimited]);

    const handleAddStage = (e) => {
        e.preventDefault();
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages,
                {
                    name: "Название этапа",
                    stageStart: "",
                    winners: [],
                    participants: [],
                    groups: []
                }
            ]
        }));
    };

    const handleDeleteStage = (stageIndex) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.filter(
                    (stage) => prevState.stages.indexOf(stage) !== stageIndex
                )
            ]
        }));
    };

    const handleAddGroup = (index) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === index) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups,
                                {
                                    name: "название группы",
                                    groupStart: "",
                                    participants: null,
                                    confirmationTimeStart: "",
                                    confirmationTimeEnd: "",
                                    reserveConfirmationTimeEnd: "",
                                    reserveParticipants: null,
                                    paidParticipants: null,
                                    map: "",
                                    groupModerators: [],
                                    results: null,
                                    paidSlots: 0,
                                    slotsQuantity: 0,
                                    reserveSlotsQuantity: 0,
                                    slotPrice: 0,
                                    lobbyId: "",
                                    lobbyPassword: ""
                                }
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleDeleteGroup = (stageIndex, groupIndex) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.filter(
                                    (group) =>
                                        stage.groups.indexOf(group) !==
                                        groupIndex
                                )
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleStageChange = (e, index) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === index) {
                        return { ...stage, [e.target.name]: e.target.value };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleEventSettingsChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleDateChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            [e.target.name]: moment(e.target.value).toISOString()
        }));
    };

    const handleDateStageChange = (e, index) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === index) {
                        return {
                            ...stage,
                            [e.target.name]: moment(
                                e.target.value
                            ).toISOString()
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleDateGroupChange = (e, stageIndex, groupIndex) => {
        console.log(e.target.value, stageIndex, groupIndex);
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            [e.target.name]: moment(
                                                e.target.value
                                            ).toISOString()
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleModeratorGroupPick = (moderator, stageIndex, groupIndex) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            groupModerators: [
                                                ...group.groupModerators,
                                                moderator
                                            ]
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleModeratorGroupRemove = (moderator, stageIndex, groupIndex) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            groupModerators: [
                                                ...group.groupModerators.filter(
                                                    (moder) =>
                                                        moder.id !==
                                                        moderator.id
                                                )
                                            ]
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleParticipantsGroupChange = (
        participantsArray,
        stageIndex,
        groupIndex
    ) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            participants: participantsArray
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleReserveParticipantsGroupChange = (
        reserveParticipantsArray,
        stageIndex,
        groupIndex
    ) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            reserveParticipants:
                                                reserveParticipantsArray
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handlePaidParticipantsGroupChange = (
        paidParticipantsArray,
        stageIndex,
        groupIndex
    ) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            paidParticipants:
                                                paidParticipantsArray
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handleGroupChange = (e, stageIndex, groupIndex) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.map((stage) => {
                    if (prevState.stages.indexOf(stage) === stageIndex) {
                        return {
                            ...stage,
                            groups: [
                                ...stage.groups.map((group) => {
                                    if (
                                        prevState.stages
                                            .at(stageIndex)
                                            .groups.indexOf(group) ===
                                        groupIndex
                                    ) {
                                        return {
                                            ...group,
                                            [e.target.name]: e.target.value
                                        };
                                    }
                                    return group;
                                })
                            ]
                        };
                    }
                    return stage;
                })
            ]
        }));
    };

    const handlePrizeSettingsChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            prize: { ...prevState.prize, [e.target.name]: e.target.value }
        }));
    };

    const handlePlacementPrizeChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            prize: {
                ...prevState.prize,
                placementPrize: {
                    ...prevState.prize.placementPrize,
                    [e.target.name]: e.target.value
                }
            }
        }));
    };

    /* const handleDeleteStage = (quantityId, stageId) => {
        setStagesQuantity((prevState) =>
            prevState.filter((stage) => stage !== quantityId)
        );
        setStages((prevState) =>
            prevState.filter((stage) => stage.id !== stageId)
        );
    }; */

    const handleCreateEvent = (e) => {
        e.preventDefault();
        console.log(eventSettings);
        dispatch(create(eventSettings));
    };

    if (!isLoading && selectedEvent) {
        return (
            <section className="bg-gray-300 w-[100%] min-h-[100vh]">
                <div className="w-[1024px] mx-auto flex flex-col items-center">
                    <h2>Создание ивента</h2>
                    <button
                        onClick={handleCreateEvent}
                        className="rounded bg-red-600 p-2"
                    >
                        Создать ивент
                    </button>
                    <form>
                        <div className="flex flex-col items-center">
                            <p>Тип события</p>
                            <select
                                value={eventSettings.eventType}
                                name="eventType"
                                onChange={handleEventSettingsChange}
                            >
                                <option value="" disabled>
                                    Выберите тип события
                                </option>
                                <option value="tournament">Турнир</option>
                                <option value="miniTournament">
                                    Мини-турнир
                                </option>
                                <option value="practice">Практис</option>
                            </select>
                            <p>Название события</p>
                            <input
                                name="title"
                                value={eventSettings.title}
                                onChange={handleEventSettingsChange}
                            />
                            <div className="flex mt-2 gap-10">
                                <div className="flex flex-col">
                                    <p>Время начала турнира</p>
                                    <input
                                        type="datetime-local"
                                        name="eventStart"
                                        onChange={handleDateChange}
                                        value={moment(
                                            eventSettings.eventStart
                                        ).format("YYYY-MM-DDTHH:mm")}
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <p>Время начала регистрации</p>
                                    <input
                                        type="datetime-local"
                                        name="registrationStart"
                                        onChange={handleDateChange}
                                        value={moment(
                                            eventSettings.registrationStart
                                        ).format("YYYY-MM-DDTHH:mm")}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p>Время окончания регистрации</p>
                                    <input
                                        type="datetime-local"
                                        name="registrationEnd"
                                        onChange={handleDateChange}
                                        value={moment(
                                            eventSettings.registrationEnd
                                        ).format("YYYY-MM-DDTHH:mm")}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center mt-[50px] gap-10">
                                <div>
                                    <p>Есть плата за вход</p>
                                    <select
                                        value={eventSettings.isPaid}
                                        name="isPaid"
                                        onChange={handleEventSettingsChange}
                                    >
                                        <option value="true">Да</option>
                                        <option value="false">Нет</option>
                                    </select>
                                    {eventSettings.isPaid === "true" && (
                                        <>
                                            <p>Стоимость входа</p>
                                            <input
                                                name="entryPrice"
                                                type="number"
                                                value={eventSettings.entryPrice}
                                                onChange={
                                                    handleEventSettingsChange
                                                }
                                            />
                                        </>
                                    )}
                                    <p>Режим</p>
                                    <select
                                        value={eventSettings.regime}
                                        name="regime"
                                        onChange={handleEventSettingsChange}
                                    >
                                        <option value="" disabled>
                                            Выберите режим события
                                        </option>
                                        <option
                                            disabled={
                                                eventSettings.eventType ===
                                                    "tournament" ||
                                                eventSettings.eventType ===
                                                    "practice"
                                            }
                                            value="solo"
                                        >
                                            Solo
                                        </option>
                                        <option
                                            disabled={
                                                eventSettings.eventType ===
                                                "practice"
                                            }
                                            value="duo"
                                        >
                                            Duo
                                        </option>
                                        <option
                                            disabled={
                                                eventSettings.eventType ===
                                                "miniTournament"
                                            }
                                            value="squad"
                                        >
                                            Squad
                                        </option>
                                    </select>
                                    <p>Вид</p>
                                    <select
                                        value={eventSettings.view}
                                        name="view"
                                        onChange={handleEventSettingsChange}
                                    >
                                        <option value="" disabled>
                                            Выберите режим камеры
                                        </option>
                                        <option value="FirstPerson">
                                            От 1-го лица
                                        </option>
                                        <option value="ThirdPerson">
                                            От 3-го лица
                                        </option>
                                    </select>
                                    <p>Дополнительные условия участия:</p>
                                    <input
                                        name="requirements"
                                        value={eventSettings.requirements}
                                        onChange={handleEventSettingsChange}
                                    />
                                    <p>
                                        Есть ограничение по количеству
                                        участников
                                    </p>
                                    <select
                                        value={eventSettings.isQuantityLimited}
                                        name="isQuantityLimited"
                                        onChange={handleEventSettingsChange}
                                    >
                                        <option value="true">Да</option>
                                        <option value="false">Нет</option>
                                    </select>
                                    {eventSettings.isQuantityLimited ===
                                        "true" && (
                                        <>
                                            <p>
                                                Укажите максимальное количество
                                                участников
                                            </p>
                                            <input
                                                type="number"
                                                value={
                                                    eventSettings.maxQuantity
                                                }
                                                onChange={
                                                    handleEventSettingsChange
                                                }
                                                name="maxQuantity"
                                            />
                                        </>
                                    )}
                                </div>
                                <div>
                                    <p>Укажите общий призовой фонд</p>
                                    <input
                                        type="number"
                                        value={eventSettings.prize.pool}
                                        onChange={handlePrizeSettingsChange}
                                        name="pool"
                                    />
                                    <p>Укажите приз за килл</p>
                                    <input
                                        type="number"
                                        value={eventSettings.prize.prizePerKill}
                                        onChange={handlePrizeSettingsChange}
                                        name="prizePerKill"
                                    />
                                    {console.log(eventSettings.prize)}
                                    {Object.keys(
                                        eventSettings.prize.placementPrizes
                                    ).map((place) => (
                                        <div key={place}>
                                            <input
                                                name={place}
                                                placeholder={`Приз за ${place} место`}
                                                value={
                                                    eventSettings.prize
                                                        .placementPrize[
                                                        `${place}`
                                                    ]
                                                }
                                                onChange={
                                                    handlePlacementPrizeChange
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button
                    onClick={handleAddStage}
                    className="rounded bg-blue-400 p-3"
                    disabled={eventSettings.eventType === ""}
                >
                    Добавить этап
                </button>
                {eventSettings.stages.map((stage) => (
                    <CreateStageForm
                        eventType={eventSettings.eventType}
                        regime={eventSettings.regime}
                        state={stage}
                        key={eventSettings.stages.indexOf(stage)}
                        index={eventSettings.stages.indexOf(stage)}
                        onChangeStage={handleStageChange}
                        onChangeTime={handleDateStageChange}
                        addGroup={handleAddGroup}
                        onChangeGroupTime={handleDateGroupChange}
                        onChangeGroup={handleGroupChange}
                        removeModerator={handleModeratorGroupRemove}
                        pickModerator={handleModeratorGroupPick}
                        onChangeParticipants={handleParticipantsGroupChange}
                        onChangeReserveParticipants={
                            handleReserveParticipantsGroupChange
                        }
                        onChangePaidParticipants={
                            handlePaidParticipantsGroupChange
                        }
                        deleteGroup={handleDeleteGroup}
                        deleteStage={handleDeleteStage}
                    />
                ))}
            </section>
        );
    }
};

export default EditEventForm;
