import { useState, useEffect } from "react";
import CreateStageForm from "../components/createStageForm";
import localStorageService from "../services/localStorage.service";

const CreateEventForm = () => {
    const [eventSettings, setEventSettings] = useState({
        id: `${Date.now()}-event`,
        organizerId: localStorageService.getUserId(),
        eventType: "",
        eventStart: "",
        registrationStart: "",
        registrationEnd: "",
        regime: "",
        view: "",
        isPaid: "false",
        entryPrice: 0,
        requirements: "",
        isQuantityLimited: "false",
        maxQuantity: 10000000
    });

    const [datePicker, setDatePicker] = useState({
        startDate: "",
        startTime: "",
        registrationStartDate: "",
        registrationStartTime: "",
        registrationEndDate: "",
        registrationEndTime: ""
    });

    const [prize, setPrize] = useState({
        pool: 0,
        prizePerKill: 0
    });

    const [placementPrize, setPlacementPrize] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0
    });

    const [stages, setStages] = useState([]);
    const [stagesQuantity, setStagesQuantity] = useState([]);

    useEffect(() => {
        console.log(stages);
    }, [stages]);

    const handleAddStage = (e) => {
        e.preventDefault();
        setStagesQuantity((prevState) => [...prevState, prevState.length + 1]);
    };

    const handleSubmitStage = (data) => {
        console.log(data);
        setStages((prevState) => [...prevState, data]);
    };

    const handleEventSettingsChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleDatePickerChange = (e) => {
        setDatePicker((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        console.log(eventSettings);
    }, [eventSettings]);

    useEffect(() => {
        const startTimeArr = datePicker.startTime.split(":");
        const startHour = Number(startTimeArr[0]) * 1000 * 3600;
        const startMinute = Number(startTimeArr[1]) * 1000 * 60;
        const newStartDate =
            new Date(datePicker.startDate).getTime() + startHour + startMinute;
        setEventSettings((prevState) => ({
            ...prevState,
            eventStart: newStartDate
        }));
    }, [datePicker.startDate, datePicker.startTime]);

    useEffect(() => {
        const startRegTimeArr = datePicker.registrationStartTime.split(":");
        const startRegHour = Number(startRegTimeArr[0]) * 1000 * 3600;
        const startRegMinute = Number(startRegTimeArr[1]) * 1000 * 60;
        const newStartRegDate =
            new Date(datePicker.registrationStartDate).getTime() +
            startRegHour +
            startRegMinute;
        setEventSettings((prevState) => ({
            ...prevState,
            registrationStart: newStartRegDate
        }));
    }, [datePicker.registrationStartDate, datePicker.registrationStartTime]);

    useEffect(() => {
        const endRegTimeArr = datePicker.registrationEndTime.split(":");
        const endRegHour = Number(endRegTimeArr[0]) * 1000 * 3600;
        const endRegMinute = Number(endRegTimeArr[1]) * 1000 * 60;
        const newEndRegDate =
            new Date(datePicker.registrationEndDate).getTime() +
            endRegHour +
            endRegMinute;
        setEventSettings((prevState) => ({
            ...prevState,
            registrationEnd: newEndRegDate
        }));
    }, [datePicker.registrationEndDate, datePicker.registrationEndTime]);

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

    const handleDeleteStage = (quantityId, stageId) => {
        setStagesQuantity((prevState) =>
            prevState.filter((stage) => stage !== quantityId)
        );
        setStages((prevState) =>
            prevState.filter((stage) => stage.id !== stageId)
        );
    };

    return (
        <section className="bg-gray-300 w-[100%] min-h-[100vh]">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <h2>Создание ивента</h2>
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
                            <option value="miniTournament">Мини-турнир</option>
                            <option value="practice">Практис</option>
                        </select>
                        <div className="flex mt-2 gap-10">
                            <div className="flex flex-col">
                                <p>Дата начала турнира</p>
                                <input
                                    type="date"
                                    name="startDate"
                                    onChange={handleDatePickerChange}
                                    value={datePicker.startDate}
                                ></input>
                                <p>Время начала турнира</p>
                                <input
                                    name="startTime"
                                    type="time"
                                    value={datePicker.startTime}
                                    onChange={handleDatePickerChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p>Дата начала регистрации</p>
                                <input
                                    type="date"
                                    name="registrationStartDate"
                                    onChange={handleDatePickerChange}
                                    value={datePicker.registrationStartDate}
                                />
                                <p>Время начала регистрации</p>
                                <input
                                    name="registrationStartTime"
                                    type="time"
                                    value={datePicker.registrationStartTime}
                                    onChange={handleDatePickerChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p>Дата окончания регистрации</p>
                                <input
                                    type="date"
                                    name="registrationEndDate"
                                    onChange={handleDatePickerChange}
                                    value={datePicker.registrationEndDate}
                                />
                                <p>Время окончания регистрации</p>
                                <input
                                    name="registrationEndTime"
                                    type="time"
                                    value={datePicker.registrationEndTime}
                                    onChange={handleDatePickerChange}
                                />
                            </div>
                        </div>

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
                                    onChange={handleEventSettingsChange}
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
                                    eventSettings.eventType === "tournament" ||
                                    eventSettings.eventType === "practice"
                                }
                                value="solo"
                            >
                                Solo
                            </option>
                            <option
                                disabled={
                                    eventSettings.eventType === "practice"
                                }
                                value="duo"
                            >
                                Duo
                            </option>
                            <option
                                disabled={
                                    eventSettings.eventType === "miniTournament"
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
                            <option value="1st person">От 1-го лица</option>
                            <option value="3rd person">От 3-го лица</option>
                        </select>
                        <p>Дополнительные условия участия:</p>
                        <input
                            name="requirements"
                            value={eventSettings.requirements}
                            onChange={handleEventSettingsChange}
                        />
                        <p>Есть ограничение по количеству участников</p>
                        <select
                            value={eventSettings.isQuantityLimited}
                            name="isQuantityLimited"
                            onChange={handleEventSettingsChange}
                        >
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                        {eventSettings.isQuantityLimited === "true" && (
                            <>
                                <p>
                                    Укажите максимальное количество участников
                                </p>
                                <input
                                    type="number"
                                    value={eventSettings.maxQuantity}
                                    onChange={handleEventSettingsChange}
                                    name="maxQuantity"
                                />
                            </>
                        )}
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
            {stagesQuantity.map((stage) => (
                <CreateStageForm
                    eventType={eventSettings.eventType}
                    regime={eventSettings.regime}
                    stageId={eventSettings.id + "-" + stage + "-stage"}
                    key={stage}
                    saveStage={handleSubmitStage}
                    deleteStage={() =>
                        handleDeleteStage(
                            stage,
                            eventSettings.id + "-" + stage + "-stage"
                        )
                    }
                />
            ))}
        </section>
    );
};

export default CreateEventForm;
