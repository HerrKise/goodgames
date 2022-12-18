import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateStageForm from "../components/createStageForm";
import localStorageService from "../services/localStorage.service";
import { create } from "../store/reducers/eventsSlice";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import { NavLink } from "react-router-dom";

import logopic from "../assets/Main/logo.png";
import { Collapse } from "react-collapse";
import { useCallback } from "react";

const CreateEventForm = () => {
    const dispatch = useDispatch();
    const [requirements, setRequirements] = useState("");
    const [description, setDescription] = useState("");

    const [eventSettings, setEventSettings] = useState({
        organizerId: localStorageService.getUserId(),
        paricipants: [],
        description: "",
        isApproved: false,
        title: "",
        picture: "",
        eventType: "",
        eventStart: "",
        eventEnd: "",
        registrationStart: "",
        registrationEnd: "",
        regime: "",
        view: "",
        isPaid: "false",
        entryPrice: 0,
        requirements: "",
        isQuantityLimited: "false",
        maxQuantity: 10000000,
        stages: [],
        prize: {
            pool: 0,
            prizePerKill: 0,
            placementPrizes: [
                { number: 1, prize: 0 },
                { number: 2, prize: 0 },
                { number: 3, prize: 0 },
                { number: 4, prize: 0 },
                { number: 5, prize: 0 },
                { number: 6, prize: 0 },
                { number: 7, prize: 0 },
                { number: 8, prize: 0 },
                { number: 9, prize: 0 },
                { number: 10, prize: 0 },
                { number: 11, prize: 0 },
                { number: 12, prize: 0 },
                { number: 13, prize: 0 },
                { number: 14, prize: 0 },
                { number: 15, prize: 0 },
                { number: 16, prize: 0 },
                { number: 17, prize: 0 },
                { number: 18, prize: 0 },
                { number: 19, prize: 0 },
                { number: 20, prize: 0 }
            ]
        }
    });

    useEffect(() => {
        console.log(eventSettings);
    }, [eventSettings]);

    useEffect(() => {
        if (eventSettings.isPaid === "false") {
            setEventSettings((prevState) => ({
                ...prevState,
                entryPrice: 0,
            }));
        }
    }, [eventSettings.isPaid]);

    useEffect(() => {
        if (eventSettings.isQuantityLimited === "false") {
            setEventSettings((prevState) => ({
                ...prevState,
                maxQuantity: 10000000,
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
                    groups: [],
                },
            ],
        }));
    };

    const handleDeleteStage = (stageIndex) => {
        setEventSettings((prevState) => ({
            ...prevState,
            stages: [
                ...prevState.stages.filter(
                    (stage) => prevState.stages.indexOf(stage) !== stageIndex
                ),
            ],
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
                                    lobbyPassword: "",
                                },
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                ),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                }),
            ],
        }));
    };

    const handleEventSettingsChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleDateChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            [e.target.name]: moment(e.target.value).toISOString(),
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
                            ).toISOString(),
                        };
                    }
                    return stage;
                }),
            ],
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
                                            ).toISOString(),
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                                moderator,
                                            ],
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                                        moder.employeeId !==
                                                        moderator.employeeId
                                                ),
                                            ],
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                            participants: participantsArray,
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                                reserveParticipantsArray,
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                                paidParticipantsArray,
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
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
                                            [e.target.name]: e.target.value,
                                        };
                                    }
                                    return group;
                                }),
                            ],
                        };
                    }
                    return stage;
                }),
            ],
        }));
    };

    const handlePrizeSettingsChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            prize: { ...prevState.prize, [e.target.name]: e.target.value },
        }));
    };

    /* const handlePlacementPrizeChange = (e) => {
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
    }; */

    const handlePlacementPrizeChange = (e) => {
        console.log(e.target.name);
        setEventSettings((prevState) => ({
            ...prevState,
            prize: {
                ...prevState.prize,
                placementPrizes: [
                    ...prevState.prize.placementPrizes.map((place) => {
                        if (e.target.name == place.number) {
                            return { ...place, prize: Number(e.target.value) };
                        }
                        return place;
                    }),
                ],
            },
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

    const [isPrizesOpen, setIsPrizesOpen] = useState(false)
    
    const openPrizes = useCallback(
        () => setIsPrizesOpen(!isPrizesOpen),
        [isPrizesOpen]
    )

    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-50" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </NavLink>
            <main  className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Создание ивента</h1>
                
                <form className="space-y-3 p-4 bg-grey rounded-lg my-5">
                    <div>
                        <select
                            value={eventSettings.eventType}
                            name="eventType"
                            id="eventType"
                            onChange={handleEventSettingsChange}
                            className="bg-darkgrey w-full p-3 rounded-lg p"
                        >
                            <option value="" disabled>
                                Тип события
                            </option>
                            <option value="tournament">Турнир</option>
                            <option value="miniTournament">Мини-турнир</option>
                            <option value="practice">Практическая игра</option>
                        </select>
                    </div>
                    <div>
                        <input
                            name="title"
                            id="title"
                            placeholder="Название события"
                            value={eventSettings.title}
                            onChange={handleEventSettingsChange}
                            className="bg-darkgrey w-full p-3 rounded-lg p"
                        />
                    </div>
                    <div className="bg-[#26262633]">
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 py-2 space-x-4">
                            <label htmlFor="eventStart" className="p w-28">Начало турнира</label>
                            <input
                                type="datetime-local"
                                name="eventStart"
                                onChange={handleDateChange}
                                value={moment(
                                    eventSettings.eventStart
                                ).format("YYYY-MM-DDTHH:mm")}
                                className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                            ></input>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 py-2 space-x-4">
                            <label htmlFor="eventEnd" className="p w-28">Окончание турнира</label>
                            <input
                                type="datetime-local"
                                name="eventEnd"
                                onChange={handleDateChange}
                                value={moment(
                                    eventSettings.eventEnd
                                ).format("YYYY-MM-DDTHH:mm")}
                                className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                            ></input>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 py-2 space-x-4">
                            <label htmlFor="registrationStart" className="p w-28">Начало регистрации</label>
                            <input
                                type="datetime-local"
                                name="registrationStart"
                                onChange={handleDateChange}
                                value={moment(
                                    eventSettings.registrationStart
                                ).format("YYYY-MM-DDTHH:mm")}
                                className="bg-darkgrey p-2 p rounded-lg w-[160px]"
                            />
                        </div>
                        <div className="flex items-center justify-between py-2 space-x-4">
                            <label htmlFor="registrationStart" className="p w-28">Окончание регистрации</label>
                            <input
                                type="datetime-local"
                                name="registrationEnd"
                                onChange={handleDateChange}
                                value={moment(
                                    eventSettings.registrationEnd
                                ).format("YYYY-MM-DDTHH:mm")}
                                className="bg-darkgrey p-2 p rounded-lg w-[160px]"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                            <div>
                                <label htmlFor="isPaid" className="p">Есть ли плата за вход</label>
                                <select
                                    value={eventSettings.isPaid}
                                    name="isPaid"
                                    onChange={handleEventSettingsChange}
                                    className="bg-darkgrey w-full p-3 rounded-lg p"
                                >
                                    <option value="true">Да</option>
                                    <option value="false">Нет</option>
                                </select>
                            </div>
                                {eventSettings.isPaid === "true" && (
                                    <div  className="flex items-center justify-between py-2 space-x-4">
                                        <label htmlFor="registrationStart" className="p w-32">Стоимость входа</label>
                                        <input
                                            name="entryPrice"
                                            type="number"
                                            value={eventSettings.entryPrice}
                                            onChange={handleEventSettingsChange}
                                            className="bg-darkgrey p-2 p rounded-lg w-[160px]"
                                        />
                                    </div>
                                )}
                                <select
                                    value={eventSettings.regime}
                                    name="regime"
                                    onChange={handleEventSettingsChange}
                                    className="bg-darkgrey w-full p-3 rounded-lg p"
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
                                <select
                                    value={eventSettings.view}
                                    name="view"
                                    onChange={handleEventSettingsChange}
                                    className="bg-darkgrey w-full p-3 rounded-lg p"
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
                                <p className="p">Дополнительные условия участия:</p>
                                <MDEditor
                                    value={requirements}
                                    onChange={setRequirements}
                                />
                                <MDEditor.Markdown
                                    source={requirements}
                                    style={{ whiteSpace: "pre-wrap" }}
                                />

                                <p  className="p">Описание:</p>
                                <MDEditor
                                    value={description}
                                    onChange={setDescription}
                                />
                                <MDEditor.Markdown
                                    source={description}
                                    style={{ whiteSpace: "pre-wrap" }}
                                />
                        <div>
                            <label htmlFor="isQuantityLimited" className="p">Есть ли ограничение по кол-ву участников</label>
                            <select
                                value={eventSettings.isQuantityLimited}
                                name="isQuantityLimited"
                                onChange={handleEventSettingsChange}
                                className="bg-darkgrey w-full p-3 rounded-lg p"
                            >
                                <option value="true">Да</option>
                                <option value="false">Нет</option>
                            </select>
                        </div>
                        {eventSettings.isQuantityLimited === "true" && (
                            <div className="flex items-center justify-between space-x-4">
                                <label htmlFor="maxQuantity" className="p w-28 ">
                                    Макс. кол-во участников
                                </label>
                                <input
                                    type="number"
                                    value={eventSettings.maxQuantity}
                                    onChange={handleEventSettingsChange}
                                    name="maxQuantity"
                                    className="bg-darkgrey w-[160px] p-3 rounded-lg p"
                                />
                            </div>
                        )}
                            </div>
                            <div>
                                <div className="flex items-center border-b-[1px] border-white/20 py-2 justify-between space-x-4">
                                    <label htmlFor="pool" className="p w-28">Призовой фонд</label>
                                    <input
                                        type="number"
                                        value={eventSettings.prize.pool}
                                        onChange={handlePrizeSettingsChange}
                                        name="pool"
                                        className="bg-darkgrey w-[160px] p-3 rounded-lg p"
                                    />
                                </div>
                                <div className="flex items-center border-b-[1px] border-white/20 py-2 justify-between space-x-4">
                                    <label htmlFor="prizePerKill" className="p w-28">Приз за килл</label>
                                    <input
                                        type="number"
                                        value={eventSettings.prize.prizePerKill}
                                        onChange={handlePrizeSettingsChange}
                                        name="prizePerKill"
                                        className="bg-darkgrey w-[160px] p-3 rounded-lg p"
                                    />
                                </div>
                                {/* {Object.keys(
                                    eventSettings.prize.placementPrize
                                ).map((place) => (
                                    <div key={place}>
                                        <input
                                            name={place}
                                            placeholder={`Приз за ${place} место`}
                                            value={
                                                eventSettings.prize
                                                    .placementPrize[`${place}`]
                                            }
                                            onChange={
                                                handlePlacementPrizeChange
                                            }
                                        />
                                    </div>
                                ))} */}
                                <div className="bg-[#26262633]">
                                    <button
                                        id="dropdownUsersButton"
                                        data-dropdown-toggle="dropdownUsers"
                                        data-dropdown-placement="bottom"
                                        className='w-full rounded-lg bg-[#26262633] py-3 flex justify-between'
                                        type="button"
                                        name="created"
                                        //onClick={toggleCreated}
                                        onClick={openPrizes}
                                    >
                                        <p className="p">Призы за места</p>
                                        <div
                                            className={isPrizesOpen ? "duration-300 rotate-90" : "rotate-0 duration-300"}
                                            aria-expanded={isPrizesOpen}
                                            type="button">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <Collapse isOpened={isPrizesOpen}>
                                    {/* {eventSettings.prize.placementPrize.map(
                                        (place) => (
                                            <div key={place.number} className="flex items-center border-b-[1px] border-white/20 py-2 justify-between space-x-4">
                                                <label htmlFor={place.number} className="p w-28">Приз за {place.number} место</label>
                                                <input
                                                    name={place.number}
                                                    placeholder="Укажите приз"
                                                    value={place.prize === 0
                                                        ? ""
                                                        : place.prize}
                                                    onChange={
                                                        handlePlacementPrizeChange
                                                    }
                                                    className="bg-darkgrey w-[160px] p-3 rounded-lg p"
                                                />
                                            </div>
                                        )
                                    )} */}
                                </Collapse>
                            </div>
                </form>
                <div className="bg-grey rounded-lg">
                    <button
                        onClick={handleAddStage}
                        className='w-full rounded-lg bg-grey py-4 text-sm font-bold'
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
                            onChangePaidParticipants={handlePaidParticipantsGroupChange}
                            deleteGroup={handleDeleteGroup}
                            deleteStage={handleDeleteStage}
                        />
                    ))}
                </div>
                <button
                    onClick={handleCreateEvent}
                    className='w-full rounded-lg bg-yellow py-4 my-5 text-darkgrey text-sm font-bold'
                >
                    Создать ивент
                </button>
            </main>
            
            
            
        </section>
    );
};

export default CreateEventForm;
