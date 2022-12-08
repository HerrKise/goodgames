import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getStaffLoadingStatus,
    getStaffProfileData
} from "../store/reducers/staffSlice";

const CreateGroupForm = ({ eventType, saveGroup }) => {
    const [groupSettings, setGroupSettings] = useState({
        name: "название группы",
        groupStart: "",
        participants: null,
        map: "",
        staff: [],
        results: null,
        slotsQuantity: 0
    });

    const [datePicker, setDatePicker] = useState({
        startDate: "",
        startTime: ""
    });

    console.log(eventType);

    useEffect(() => {
        if (eventType === "practice") {
            setGroupSettings((prevState) => ({
                ...prevState,
                paidSlots: 0
            }));
        } else if (groupSettings.hasOwnProperty("paidSlots")) {
            let newObj = JSON.parse(JSON.stringify(groupSettings));
            delete newObj["paidSlots"];
            setGroupSettings(newObj);
        }
    }, [eventType]);

    useEffect(() => {
        console.log(groupSettings.slotsQuantity * 2);
        let participantsArray = [];
        for (let i = 1; i <= groupSettings.slotsQuantity; i++) {
            participantsArray.push({
                slotId: i,
                participantId: "",
                participationConfirmed: false
            });
        }
        setGroupSettings((prevState) => ({
            ...prevState,
            participants: participantsArray
        }));
    }, [groupSettings.slotsQuantity]);

    const currentStaffData = useSelector(getStaffProfileData());
    const isLoading = useSelector(getStaffLoadingStatus());

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
                    {eventType !== "practice" && eventType !== "" && (
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
            </form>
        </section>
    );
};

export default CreateGroupForm;
