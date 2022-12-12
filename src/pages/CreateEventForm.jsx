import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateStageForm from "../components/createStageForm";
import localStorageService from "../services/localStorage.service";
import { create } from "../store/reducers/eventsSlice";

const CreateEventForm = () => {
    const dispatch = useDispatch();
    const [eventSettings, setEventSettings] = useState({
        organizerId: localStorageService.getUserId(),
        isApproved: false,
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
        maxQuantity: 10000000,
        prize: {
            pool: 0,
            prizePerKill: 0,
            placementPrize: {
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
            }
        }
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

    const handleDateChange = (e) => {
        setEventSettings((prevState) => ({
            ...prevState,
            [e.target.name]: new Date(e.target.value).toISOString()
        }));
    };
    let startTimeTransform;
    let regStartTimeTransform;
    let regEndTimeTransform;
    if (eventSettings.eventStart) {
        startTimeTransform = new Date(
            Date.parse(eventSettings.eventStart) + 60 * 60 * 3 * 1000
        ).toISOString();
    }
    if (eventSettings.registrationStart) {
        regStartTimeTransform = new Date(
            Date.parse(eventSettings.registrationStart) + 60 * 60 * 3 * 1000
        ).toISOString();
    }
    if (eventSettings.registrationEnd) {
        regEndTimeTransform = new Date(
            Date.parse(eventSettings.registrationEnd) + 60 * 60 * 3 * 1000
        ).toISOString();
    }

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
                                <p>Время начала турнира</p>
                                <input
                                    type="datetime-local"
                                    name="eventStart"
                                    onChange={handleDateChange}
                                    value={
                                        startTimeTransform
                                            ? startTimeTransform.slice(0, 16)
                                            : ""
                                    }
                                ></input>
                            </div>
                            <div className="flex flex-col">
                                <p>Время начала регистрации</p>
                                <input
                                    type="datetime-local"
                                    name="registrationStart"
                                    onChange={handleDateChange}
                                    value={
                                        regStartTimeTransform
                                            ? regStartTimeTransform.slice(0, 16)
                                            : ""
                                    }
                                />
                            </div>
                            <div className="flex flex-col">
                                <p>Время окончания регистрации</p>
                                <input
                                    type="datetime-local"
                                    name="registrationEnd"
                                    onChange={handleDateChange}
                                    value={
                                        regEndTimeTransform
                                            ? regEndTimeTransform.slice(0, 16)
                                            : ""
                                    }
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
                                {Object.keys(
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

export default CreateEventForm;
