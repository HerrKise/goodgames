import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateStageForm from "../components/createStageForm";
import localStorageService from "../services/localStorage.service";
import { create, getEventsLoadingStatus } from "../store/reducers/eventsSlice";

const EditEventForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getEventsLoadingStatus);
    const [eventSettings, setEventSettings] = useState({
        organizerId: localStorageService.getUserId(),
        title: "",
        picture: "",
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
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: ""
    });

    const [stages, setStages] = useState([]);
    const [stagesQuantity, setStagesQuantity] = useState([]);

    useEffect(() => {
        console.log(stages);
    }, [stages]);

    useEffect(() => {
        console.log(eventSettings);
    }, [eventSettings]);

    useEffect(() => {
        console.log(prize);
    }, [prize]);

    useEffect(() => {
        if (datePicker.startDate !== "" && datePicker.startTime !== "") {
            const startTimeArr = datePicker.startTime.split(":");
            const startHour = Number(startTimeArr[0]) * 1000 * 3600;
            const startMinute = Number(startTimeArr[1]) * 1000 * 60;
            const newStartDate = new Date(
                new Date(datePicker.startDate).getTime() +
                    startHour +
                    startMinute
            );
            setEventSettings((prevState) => ({
                ...prevState,
                eventStart: newStartDate.toISOString()
            }));
        }
    }, [datePicker.startDate, datePicker.startTime]);

    useEffect(() => {
        if (
            datePicker.registrationStartDate !== "" &&
            datePicker.registrationStartTime !== ""
        ) {
            const startRegTimeArr = datePicker.registrationStartTime.split(":");
            const startRegHour = Number(startRegTimeArr[0]) * 1000 * 3600;
            const startRegMinute = Number(startRegTimeArr[1]) * 1000 * 60;
            const newStartRegDate = new Date(
                new Date(datePicker.registrationStartDate).getTime() +
                    startRegHour +
                    startRegMinute
            );
            setEventSettings((prevState) => ({
                ...prevState,
                registrationStart: newStartRegDate.toISOString()
            }));
        }
    }, [datePicker.registrationStartDate, datePicker.registrationStartTime]);

    useEffect(() => {
        if (
            datePicker.registrationEndDate !== "" &&
            datePicker.registrationEndTime !== ""
        ) {
            const endRegTimeArr = datePicker.registrationEndTime.split(":");
            const endRegHour = Number(endRegTimeArr[0]) * 1000 * 3600;
            const endRegMinute = Number(endRegTimeArr[1]) * 1000 * 60;
            const newEndRegDate = new Date(
                new Date(datePicker.registrationEndDate).getTime() +
                    endRegHour +
                    endRegMinute
            );
            setEventSettings((prevState) => ({
                ...prevState,
                registrationEnd: newEndRegDate.toISOString()
            }));
        }
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

    const handlePrizeChange = (e) => {
        setPlacementPrize((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handlePrizeDataChange = (e) => {
        setPrize((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
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
        const data = {
            ...eventSettings,
            stages: stages,
            prize: { ...prize, placementPrize: placementPrize }
        };
        console.log(data);
        dispatch(create(data));
    };

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
                            <option value="miniTournament">Мини-турнир</option>
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
                                            Укажите максимальное количество
                                            участников
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
                            <div>
                                <p>Укажите общий призовой фонд</p>
                                <input
                                    type="number"
                                    value={prize.pool}
                                    onChange={handlePrizeDataChange}
                                    name="pool"
                                />
                                <p>Укажите приз за килл</p>
                                <input
                                    type="number"
                                    value={prize.prizePerKill}
                                    onChange={handlePrizeDataChange}
                                    name="prizePerKill"
                                />
                                {Object.keys(placementPrize).map((place) => (
                                    <div key={place}>
                                        <input
                                            name={place}
                                            placeholder={`Приз за ${place} место`}
                                            value={placementPrize[`${place}`]}
                                            onChange={handlePrizeChange}
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
            {stagesQuantity.map((stage) => (
                <CreateStageForm
                    eventType={eventSettings.eventType}
                    regime={eventSettings.regime}
                    key={stage}
                    saveStage={handleSubmitStage}
                    /* deleteStage={() =>
                        handleDeleteStage(
                            stage,
                            eventSettings.id + "-" + stage + "-stage"
                        )
                    } */
                />
            ))}
        </section>
    );
};

export default EditEventForm;
