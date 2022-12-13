import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getStaffLoadingStatus,
    getStaffProfileData
} from "../store/reducers/staffSlice";
import moment from "moment";

const CreateGroupForm = ({
    eventType,
    saveGroup,
    deleteGroup,
    regime,
    index,
    stageIndex,
    state,
    onChangeTime,
    onChangeGroup,
    pickModerator,
    removeModerator,
    onChangeParticipants,
    onChangeReserveParticipants,
    onChangePaidParticipants
}) => {
    const currentStaffData = useSelector(getStaffProfileData());
    const isLoading = useSelector(getStaffLoadingStatus());

    useEffect(() => {
        /* if (eventType === "practice") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 16,
                paidSlots: 4,
                slotPrice: 50
            }));
        }
        if (eventType === "tournament") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 16
            }));
        } else if (eventType === "miniTournament" && regime === "solo") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 100
            }));
        } else if (eventType === "miniTournament" && regime === "duo") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 50
            }));
        } */
        refreshSlotsQuantity();
        refreshReserveSlotsQuantity();
        refreshPaidSlotsQuantity();
    }, []);

    useEffect(() => {
        refreshSlotsQuantity();
    }, [state.slotsQuantity]);

    useEffect(() => {
        refreshPaidSlotsQuantity();
    }, [state.paidSlots]);

    useEffect(() => {
        refreshReserveSlotsQuantity();
    }, [state.slotsQuantity, state.reserveSlotsQuantity]);

    function refreshSlotsQuantity() {
        let participantsArray = [];
        for (let i = 1; i <= Number(state.slotsQuantity); i++) {
            participantsArray.push({
                slotId: i,
                participantId: "",
                participantName: "",
                participantPicture: "",
                participationConfirmed: false
            });
        }
        onChangeParticipants(participantsArray, stageIndex, index);
    }

    function refreshPaidSlotsQuantity() {
        if (state.paidSlots) {
            let participantsArray = [];
            for (let i = 1; i <= Number(state.paidSlots); i++) {
                participantsArray.push({
                    slotId: i,
                    participantId: "",
                    participantName: "",
                    participantPicture: "",
                    participationConfirmed: false
                });
            }
            onChangePaidParticipants(participantsArray, stageIndex, index);
        }
    }

    function refreshReserveSlotsQuantity() {
        let participantsArray = [];
        for (let i = 1; i <= Number(state.reserveSlotsQuantity); i++) {
            participantsArray.push({
                slotId: Number(state.slotsQuantity) + i,
                participantId: "",
                participantName: "",
                participantPicture: "",
                participationConfirmed: false
            });
        }
        onChangeReserveParticipants(participantsArray, stageIndex, index);
    }

    const availableStaff = [];

    if (!isLoading) {
        console.log(currentStaffData);
        availableStaff.push(
            currentStaffData,
            ...currentStaffData.profile.created
        );
        console.log(availableStaff);
    }

    const handleModeratorsPick = (e, moderator) => {
        e.preventDefault();
        pickModerator(moderator, stageIndex, index);
    };

    const handleModeratorsRemove = (e, moderator) => {
        e.preventDefault();
        removeModerator(moderator, stageIndex, index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveGroup(groupSettings);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteGroup(stageIndex, index);
    };

    const handleTimeGroupChange = (e) => {
        onChangeTime(e, stageIndex, index);
    };

    const handleGroupChange = (e) => {
        onChangeGroup(e, stageIndex, index);
    };

    return (
        <section className="bg-yellow-500 w-[100%] min-h-[300px]">
            <form
                className="flex mx-auto items-center justify-around"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <p>Время начала группы</p>
                    <input
                        type="datetime-local"
                        name="groupStart"
                        onChange={handleTimeGroupChange}
                        value={moment(state.groupStart).format(
                            "YYYY-MM-DDTHH:mm"
                        )}
                    ></input>
                    <p>Название группы</p>
                    <input
                        name="name"
                        type="text"
                        value={state.name}
                        onChange={handleGroupChange}
                    />
                    <p>Данные лобби</p>
                    <input
                        name="lobbyId"
                        placeholder="Lobby ID"
                        value={state.lobbyId}
                        onChange={handleGroupChange}
                    />
                    <input
                        name="lobbyPassword"
                        placeholder="Lobby password"
                        value={state.lobbyPassword}
                        onChange={handleGroupChange}
                    />
                    {eventType !== "" && (
                        <>
                            <p>Количество слотов в группе</p>
                            <input
                                name="slotsQuantity"
                                type="number"
                                value={state.slotsQuantity}
                                onChange={handleGroupChange}
                            />
                        </>
                    )}
                    {eventType !== "miniTournament" && eventType !== "" && (
                        <>
                            <p>Количество резервных слотов в группе</p>
                            <input
                                name="reserveSlotsQuantity"
                                type="number"
                                value={state.reserveSlotsQuantity}
                                onChange={handleGroupChange}
                            />
                        </>
                    )}
                    {eventType === "practice" && eventType !== "" && (
                        <>
                            <p>Количество платных слотов</p>
                            <input
                                name="paidSlots"
                                type="number"
                                value={state.paidSlots}
                                onChange={handleGroupChange}
                            />
                            <p>Стоимость платного слота</p>
                            <input
                                name="slotPrice"
                                type="number"
                                value={state.slotPrice}
                                onChange={handleGroupChange}
                            />
                        </>
                    )}
                    <p>Карта группы</p>
                    <select
                        name="map"
                        value={state.map}
                        onChange={handleGroupChange}
                    >
                        <option value="" disabled>
                            Выберите карту
                        </option>
                        <option value="Erangel">Эрангель</option>
                        <option value="Sanhok">Санук</option>
                        <option value="Miramar">Мирамар</option>
                    </select>
                    {state.groupStart !== "" && (
                        <>
                            <p>Время открытия подтверждения участия</p>
                            <input
                                name="confirmationTimeStart"
                                type="datetime-local"
                                value={moment(
                                    state.confirmationTimeStart
                                ).format("YYYY-MM-DDTHH:mm")}
                                onChange={handleTimeGroupChange}
                            />
                            <p>Время дедлайна для подтверждения участия</p>
                            <input
                                name="confirmationTimeEnd"
                                type="datetime-local"
                                value={moment(state.confirmationTimeEnd).format(
                                    "YYYY-MM-DDTHH:mm"
                                )}
                                onChange={handleTimeGroupChange}
                            />
                            <p>
                                Время дедлайна для подтверждения участия резерва
                            </p>
                            <input
                                name="reserveConfirmationTimeEnd"
                                type="datetime-local"
                                value={moment(
                                    state.reserveConfirmationTimeEnd
                                ).format("YYYY-MM-DDTHH:mm")}
                                onChange={handleTimeGroupChange}
                            />
                        </>
                    )}
                </div>
                <div>
                    <div>
                        <p>Список назначенных модераторов на матч</p>
                        <ul className="bg-green-500">
                            {state.staff.map((person) => (
                                <li key={person.id}>
                                    <p>
                                        {person.nickname}, {person.role}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!isLoading && (
                        <>
                            <p>Назначить модераторов</p>
                            <ul>
                                {availableStaff.map((moder) => (
                                    <li
                                        key={moder.id}
                                        className="flex items-center"
                                    >
                                        <p>
                                            Никнейм: {moder.nickname} Роль:{" "}
                                            {moder.role}
                                        </p>
                                        <button
                                            className="border-2 border-black rounded m-3 p-2"
                                            onClick={(e) =>
                                                handleModeratorsPick(e, moder)
                                            }
                                        >
                                            Назначить в группу
                                        </button>
                                        <button
                                            className="border-2 border-black rounded m-3 p-2"
                                            onClick={(e) =>
                                                handleModeratorsRemove(e, moder)
                                            }
                                        >
                                            Убрать из группы
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
                <button type="button" onClick={handleDelete}>
                    Удалить группу
                </button>
            </form>
        </section>
    );
};

export default CreateGroupForm;
