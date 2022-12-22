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
    onChangePaidParticipants,
    onGroupChangeToNumber
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
        refreshSlotsQuantity();
    }, [state.paidSlots]);

    useEffect(() => {
        refreshReserveSlotsQuantity();
        refreshPaidSlotsQuantity();
        refreshSlotsQuantity();
    }, [state.reserveSlotsQuantity]);

    function refreshSlotsQuantity() {
        let participantsArray = [];
        for (let i = 1; i <= Number(state.slotsQuantity); i++) {
            participantsArray.push({
                slotId:
                    Number(state.paidSlots) +
                    Number(state.reserveSlotsQuantity) +
                    i,
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
                    slotId: Number(state.reserveSlotsQuantity) + i,
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
                slotId: i,
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

    const handleGroupChangeToNumber = (e) => {
        onGroupChangeToNumber(e, stageIndex, index);
    };

    let moderatorsList = [];
    availableStaff.map((staff) => {
        state.groupModerators.map((moder) => {
            if (staff.id === moder.employeeId) {
                moderatorsList.push(staff);
            }
        });
    });

    console.log(moderatorsList);

    return (
        <section className="bg-darkgrey p-2 rounded-b-lg">
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Название группы"
                    value={state.name}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-3 p rounded-lg"
                />
                <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                    <label className="p w-28">Время начала группы</label>
                    <input
                        type="datetime-local"
                        name="groupStart"
                        onChange={handleTimeGroupChange}
                        value={moment(state.groupStart).format(
                            "YYYY-MM-DDTHH:mm"
                        )}
                        className="bg-grey w-[160px] p-2 p rounded-lg"
                    ></input>
                </div>

                {/* <p className="p">Данные лобби</p>
                <input
                    name="lobbyId"
                    placeholder="ID лобби"
                    value={state.lobbyId}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-3 p rounded-lg"
                />
                <input
                    name="lobbyPassword"
                    placeholder="Пароль лобби"
                    value={state.lobbyPassword}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-3 p rounded-lg"
                />
                {eventType !== "miniTournament" && eventType !== "" && (
                    <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                        <label className="p w-28">Резервные слоты</label>
                        <input
                            name="reserveSlotsQuantity"
                            type="number"
                            value={state.reserveSlotsQuantity}
                            onChange={handleGroupChange}
                            className="bg-grey w-[160px] p-2 p rounded-lg"
                        />
                    </div>
                )}
                {eventType === "practice" && eventType !== "" && (
                    <>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                            <label className="p w-28">
                                Количество платных слотов
                            </label>
                            <input
                                name="paidSlots"
                                type="number"
                                value={state.paidSlots}
                                onChange={handleGroupChange}
                                className="bg-grey w-[160px] p-2 p rounded-lg"
                            />
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                            <label className="p w-28">
                                Стоимость платного слота
                            </label>
                            <input
                                name="slotPrice"
                                type="number"
                                value={state.slotPrice}
                                onChange={handleGroupChange}
                                className="bg-grey w-[160px] p-2 p rounded-lg"
                            />
                        </div>
                    </>
                )}
                {eventType !== "" && (
                    <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                        <label className="p w-28">Слоты в группе</label>
                        <input
                            name="slotsQuantity"
                            type="number"
                            value={state.slotsQuantity}
                            onChange={handleGroupChange}
                            className="bg-grey w-[160px] p-2 p rounded-lg"
                        />
                    </div>
                )}

                <select
                    name="map"
                    value={state.map}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-2 rounded-lg p"
                >
                    <option value="" disabled>
                        Выберите карту
                    </option>
                    <option value="Erangel">Эрангель</option>
                    <option value="Sanhok">Санук</option>
                    <option value="Miramar">Мирамар</option>
                </select> */}
                {state.groupStart !== "" && (
                    <>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 py-2 space-x-4">
                            <p className="p w-28">
                                Начало подтверждения участия
                            </p>
                            <input
                                name="confirmationTimeStart"
                                type="datetime-local"
                                value={moment(
                                    state.confirmationTimeStart
                                ).format("YYYY-MM-DDTHH:mm")}
                                onChange={handleTimeGroupChange}
                                className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                            />
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 py-2 space-x-4">
                            <p className="p w-28">
                                Конец подтверждения участия
                            </p>
                            <input
                                name="confirmationTimeEnd"
                                type="datetime-local"
                                value={moment(state.confirmationTimeEnd).format(
                                    "YYYY-MM-DDTHH:mm"
                                )}
                                onChange={handleTimeGroupChange}
                                className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                            />
                        </div>
                        <div className="flex items-center justify-between py-2 space-x-4">
                            <p className="p w-28">
                                Начало подтверждения резерва
                            </p>
                            <input
                                name="reserveConfirmationTimeEnd"
                                type="datetime-local"
                                value={moment(
                                    state.reserveConfirmationTimeEnd
                                ).format("YYYY-MM-DDTHH:mm")}
                                onChange={handleTimeGroupChange}
                                className="bg-darkgrey p-2 p rounded-lg w-[160px]"
                            />
                        </div>
                    </>
                )}
                <p className="p">Данные лобби</p>
                <input
                    name="lobbyId"
                    placeholder="ID лобби"
                    value={state.lobbyId}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-3 p rounded-lg"
                />
                <input
                    name="lobbyPassword"
                    placeholder="Пароль лобби"
                    value={state.lobbyPassword}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-3 p rounded-lg"
                />
                {eventType !== "" && (
                    <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                        <label className="p w-28">Слоты в группе</label>
                        <input
                            name="slotsQuantity"
                            type="number"
                            value={state.slotsQuantity}
                            onChange={handleGroupChange}
                            className="bg-grey w-[160px] p-2 p rounded-lg"
                        />
                    </div>
                )}
                {eventType !== "miniTournament" && eventType !== "" && (
                    <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                        <label className="p w-28">Резервные слоты</label>
                        <input
                            name="reserveSlotsQuantity"
                            type="number"
                            value={state.reserveSlotsQuantity}
                            onChange={handleGroupChange}
                            className="bg-grey w-[160px] p-2 p rounded-lg"
                        />
                    </div>
                )}
                {eventType === "practice" && eventType !== "" && (
                    <>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                            <label className="p w-28">
                                Количество платных слотов
                            </label>
                            <input
                                name="paidSlots"
                                type="number"
                                value={state.paidSlots}
                                onChange={handleGroupChange}
                                className="bg-grey w-[160px] p-2 p rounded-lg"
                            />
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                            <label className="p w-28">
                                Стоимость платного слота
                            </label>
                            <input
                                name="slotPrice"
                                type="number"
                                value={state.slotPrice}
                                onChange={handleGroupChange}
                                className="bg-grey w-[160px] p-2 p rounded-lg"
                            />
                        </div>
                    </>
                )}
                <div className="flex items-center justify-between border-b-[1px] border-white/20 pb-2 space-x-4">
                    <label className="p w-28">
                        Топ победителей группы, которые пройдут дальше
                    </label>
                    <input
                        name="topWinners"
                        type="number"
                        value={state.topWinners}
                        onChange={handleGroupChangeToNumber}
                        className="bg-grey w-[160px] p-2 p rounded-lg"
                    />
                </div>
                <select
                    name="map"
                    value={state.map}
                    onChange={handleGroupChange}
                    className="bg-grey w-full p-2 rounded-lg p"
                >
                    <option value="" disabled>
                        Выберите карту
                    </option>
                    <option value="Erangel">Эрангель</option>
                    <option value="Sanhok">Санук</option>
                    <option value="Miramar">Мирамар</option>
                </select>

                <div>
                    {!isLoading && (
                        <>
                            <p className="text-[16px]">Назначить модераторов</p>
                            <ul className="py-2 border-b-[1px] border-white/20 space-y-1">
                                {availableStaff.map((moder) => (
                                    <li
                                        key={moder.id}
                                        className="py-2 border-b-[1px] border-white/20"
                                    >
                                        <div className="grid grid-cols-2">
                                            <p className="p">Никнейм:</p>
                                            <p className="p">Роль: </p>
                                            <p className="text-[16px]">
                                                {moder.nickname}
                                            </p>
                                            <p className="text-[16px]">
                                                {moder.role}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between space-x-4 mt-2">
                                            <button
                                                className="w-full rounded-lg bg-yellow text-darkgrey text-xs py-2 font-bold"
                                                onClick={(e) =>
                                                    handleModeratorsPick(e, {
                                                        employeeId: moder.id
                                                    })
                                                }
                                            >
                                                Назначить
                                            </button>
                                            <button
                                                className="w-full rounded-lg bg-grey text-white text-xs py-2 font-bold"
                                                onClick={(e) =>
                                                    handleModeratorsRemove(e, {
                                                        employeeId: moder.id
                                                    })
                                                }
                                            >
                                                Убрать
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <div>
                        <p className="text-[16px] pt-2">
                            Список назначенных модераторов:
                        </p>
                        <ul className="grid grid-cols-2 py-2 border-b-[1px] border-white/20 space-y-1">
                            <p className="p">Никнейм</p>
                            <p className="p text-end">Роль</p>
                            {moderatorsList.map((moder) => (
                                <>
                                    <p className="text-sm">{moder.nickname}</p>
                                    <p className="text-sm text-end">
                                        {moder.role}
                                    </p>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleDelete}
                    className="w-full rounded-lg bg-grey text-sm py-2 font-bold"
                >
                    Удалить группу
                </button>
            </form>
        </section>
    );
};

export default CreateGroupForm;
