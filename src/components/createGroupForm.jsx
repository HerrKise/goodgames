import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getStaffLoadingStatus,
    getStaffProfileData
} from "../store/reducers/staffSlice";

const CreateGroupForm = ({
    eventType,
    saveGroup,
    groupId,
    deleteGroup,
    regime
}) => {
    const [groupSettings, setGroupSettings] = useState({
        id: groupId,
        name: "название группы",
        groupStart: "",
        participants: null,
        confirmationTimeStart: "",
        confirmationTimeEnd: "",
        reserveConfirmationTimeEnd: "",
        reserveParticipants: null,
        paidParticipants: null,
        map: "",
        staff: [],
        results: null,
        paidSlots: 0,
        slotsQuantity: 0,
        reserveSlotsQuantity: 0,
        slotPrice: 0
    });

    const [datePicker, setDatePicker] = useState({
        startDate: "",
        startTime: ""
    });

    const [deadlinePicker, setDeadlinePicker] = useState({
        startConfirm: 0,
        endConfirm: 0,
        reserveEndConfirm: 0
    });

    const currentStaffData = useSelector(getStaffProfileData());
    const isLoading = useSelector(getStaffLoadingStatus());

    useEffect(() => {
        if (eventType === "practice") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 16,
                paidSlots: 4,
                slotPrice: 50
            }));
            setDeadlinePicker((prevState) => ({
                ...prevState,
                startConfirm: 0.5,
                endConfirm: 0.25,
                reserveEndConfirm: 0.1
            }));
        }
        if (eventType === "tournament") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 16
            }));
            setDeadlinePicker((prevState) => ({
                ...prevState,
                startConfirm: 2,
                endConfirm: 1,
                reserveEndConfirm: 0.5
            }));
        } else if (eventType === "miniTournament" && regime === "solo") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 100
            }));
            setDeadlinePicker((prevState) => ({
                ...prevState,
                startConfirm: 0.5,
                endConfirm: 0.25
            }));
        } else if (eventType === "miniTournament" && regime === "duo") {
            setGroupSettings((prevState) => ({
                ...prevState,
                slotsQuantity: 50
            }));
            setDeadlinePicker((prevState) => ({
                ...prevState,
                startConfirm: 0.5,
                endConfirm: 0.25
            }));
        }
        refreshSlotsQuantity();
        refreshReserveSlotsQuantity();
        refreshPaidSlotsQuantity();
    }, []);

    useEffect(() => {
        if (eventType === "tournament" && groupSettings.groupStart !== null) {
            console.log(groupSettings.groupStart);
            setGroupSettings((prevState) => ({
                ...prevState,
                confirmationTimeStart:
                    groupSettings.groupStart -
                    Number(deadlinePicker.startConfirm) * 60 * 60 * 1000,
                confirmationTimeEnd:
                    groupSettings.groupStart -
                    Number(deadlinePicker.endConfirm) * 60 * 60 * 1000,
                reserveConfirmationTimeEnd:
                    groupSettings.groupStart -
                    Number(deadlinePicker.reserveEndConfirm) * 60 * 60 * 1000
            }));
        }
    }, [groupSettings.groupStart, deadlinePicker]);

    useEffect(() => {
        refreshSlotsQuantity();
    }, [groupSettings.slotsQuantity]);

    useEffect(() => {
        refreshPaidSlotsQuantity();
    }, [groupSettings.paidSlots]);

    useEffect(() => {
        refreshReserveSlotsQuantity();
    }, [groupSettings.slotsQuantity, groupSettings.reserveSlotsQuantity]);

    function refreshSlotsQuantity() {
        let participantsArray = [];
        for (let i = 1; i <= Number(groupSettings.slotsQuantity); i++) {
            participantsArray.push({
                slotId: i,
                participantId: "",
                participantName: "",
                participantPicture: "",
                participationConfirmed: false
            });
        }
        setGroupSettings((prevState) => ({
            ...prevState,
            participants: participantsArray
        }));
    }

    function refreshPaidSlotsQuantity() {
        if (groupSettings.paidSlots) {
            let participantsArray = [];
            for (let i = 1; i <= Number(groupSettings.paidSlots); i++) {
                participantsArray.push({
                    slotId: i,
                    participantId: "",
                    participantName: "",
                    participantPicture: "",
                    participationConfirmed: false
                });
            }
            setGroupSettings((prevState) => ({
                ...prevState,
                paidParticipants: participantsArray
            }));
        }
    }

    function refreshReserveSlotsQuantity() {
        let participantsArray = [];
        for (let i = 1; i <= groupSettings.reserveSlotsQuantity; i++) {
            participantsArray.push({
                slotId: groupSettings.slotsQuantity + i,
                participantId: "",
                participantName: "",
                participantPicture: "",
                participationConfirmed: false
            });
        }
        setGroupSettings((prevState) => ({
            ...prevState,
            reserveParticipants: participantsArray
        }));
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

    useEffect(() => {
        console.log(groupSettings);
    }, [groupSettings]);

    useEffect(() => {
        const startTimeArr = datePicker.startTime.split(":");
        const startHour = Number(startTimeArr[0]) * 1000 * 3600;
        const startMinute = Number(startTimeArr[1]) * 1000 * 60;
        const newStartDate =
            new Date(datePicker.startDate).getTime() + startHour + startMinute;
        console.log(startHour, startMinute, newStartDate);
        setGroupSettings((prevState) => ({
            ...prevState,
            groupStart: newStartDate
        }));
    }, [datePicker.startDate, datePicker.startTime]);

    const handleDatePickerChange = (e) => {
        e.preventDefault();
        setDatePicker((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleGroupSettingsChange = (e) => {
        e.preventDefault();
        setGroupSettings((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleModeratorsPick = (e, moderator) => {
        e.preventDefault();
        const newArr = [...groupSettings.staff, moderator];
        console.log(newArr);
        setGroupSettings((prevState) => ({
            ...prevState,
            staff: newArr
        }));
    };

    const handleModeratorsRemove = (e, moderator) => {
        e.preventDefault();
        const newArr = [...groupSettings.staff].filter(
            (person) => person.id !== moderator.id
        );
        console.log(newArr);
        setGroupSettings((prevState) => ({
            ...prevState,
            staff: newArr
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveGroup(groupSettings);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteGroup();
    };

    const handleDeadlineChange = (e) => {
        e.preventDefault();
        setDeadlinePicker((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="bg-yellow-500 w-[100%] min-h-[300px]">
            <form
                className="flex mx-auto items-center justify-around"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <p>Дата начала группы</p>
                    <input
                        type="date"
                        name="startDate"
                        onChange={handleDatePickerChange}
                        value={datePicker.startDate}
                    ></input>
                    <p>Время начала группы</p>
                    <input
                        name="startTime"
                        type="time"
                        value={datePicker.startTime}
                        onChange={handleDatePickerChange}
                    />
                    <p>Название группы</p>
                    <input
                        name="name"
                        type="text"
                        value={groupSettings.name}
                        onChange={handleGroupSettingsChange}
                    />
                    {eventType !== "" && (
                        <>
                            <p>Количество слотов в группе</p>
                            <input
                                name="slotsQuantity"
                                type="number"
                                value={groupSettings.slotsQuantity}
                                onChange={handleGroupSettingsChange}
                            />
                        </>
                    )}
                    {eventType !== "miniTournament" && eventType !== "" && (
                        <>
                            <p>Количество резервных слотов в группе</p>
                            <input
                                name="reserveSlotsQuantity"
                                type="number"
                                value={groupSettings.reserveSlotsQuantity}
                                onChange={handleGroupSettingsChange}
                            />
                        </>
                    )}
                    {eventType === "practice" && eventType !== "" && (
                        <>
                            <p>Стоимость платного слота</p>
                            <input
                                name="slotPrice"
                                type="number"
                                value={groupSettings.slotPrice}
                                onChange={handleGroupSettingsChange}
                            />
                        </>
                    )}
                    <p>Карта группы</p>
                    <select
                        name="map"
                        value={groupSettings.map}
                        onChange={handleGroupSettingsChange}
                    >
                        <option value="" disabled>
                            Выберите карту
                        </option>
                        <option value="Erangel">Эрангель</option>
                        <option value="Sanhok">Санук</option>
                        <option value="Miramar">Мирамар</option>
                    </select>
                    {datePicker.startDate !== "" &&
                        datePicker.startTime !== "" && (
                            <>
                                <p>
                                    За сколько часов до начала группы
                                    открывается доступ для подтверждения участия
                                    в часах?
                                </p>
                                <input
                                    name="startConfirm"
                                    type="number"
                                    value={deadlinePicker.startConfirm}
                                    onChange={handleDeadlineChange}
                                />
                                <p>
                                    За сколько часов до начала группы
                                    закрывается доступ для подтверждения участия
                                    в часах?
                                </p>
                                <input
                                    name="endConfirm"
                                    type="number"
                                    value={deadlinePicker.endConfirm}
                                    onChange={handleDeadlineChange}
                                />
                                <p>
                                    За сколько часов до начала группы
                                    закрывается доступ для подтверждения участия
                                    в часах для резервных участников?
                                </p>
                                <input
                                    name="reserveEndConfirm"
                                    type="number"
                                    value={deadlinePicker.reserveEndConfirm}
                                    onChange={handleDeadlineChange}
                                />
                            </>
                        )}
                </div>
                <div>
                    <div>
                        <p>Список назначенных модераторов на матч</p>
                        <ul className="bg-green-500">
                            {groupSettings.staff.map((person) => (
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
                <button type="submit">
                    Закончить настройку группы и сохранить данные
                </button>
                <button type="button" onClick={handleDelete}>
                    Удалить группу и сохранённые её данные
                </button>
            </form>
        </section>
    );
};

export default CreateGroupForm;
