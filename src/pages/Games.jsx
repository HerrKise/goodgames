import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getEventsListData,
    getEventsLoadingStatus,
    getEventsList,
    getSelectedEvent
} from "../store/reducers/eventsSlice";

const Games = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getEventsLoadingStatus());
    const events = useSelector(getEventsListData());
    useEffect(() => {
        dispatch(getEventsList());
    }, []);

    useEffect(() => {
        if (!isLoading) {
            console.log(events);
        }
    }, [isLoading]);

    //Отдельно взятая игра, которая вставляется в Ивент
    const game = {
        gameNumber: "game1", //Прописываем номер игры по порядку, чтобы было удобнее потом рисовать их внутри турнира без фильтрации по времени
        // Также для больших турниров оно будет выглядеть типа upperBracketGame1, или вроде того в зависимости от формата турнира
        eventId: "айди ивента", //  Айдишник ивента, в который будет добавлена создаваемая игра
        matchTime: "Время начала игры по расписанию", //Время начала матча по расписанию, выбирается создателем турнира
        startTime: "Время фактического начала игры", //Это заполняется обсервером/судьей, который контролирует матч
        endTime: "Время окончания игры", // Это тоже обсервером
        players: {
            // Сюда игроки могут сами добавляться или их добавляет создатель из пула зарегистрировавшихся на ивент игроков??
            "айди игрока1": {
                place: "место игрока в матче",
                kills: "убийства"
            },
            "айди игрока2": { place: "место игрока в матче", kills: "убийства" }
        },
        owner: "id организатора",
        admin: "id администратора матча" // Айди обсервера/судьи, который будет контролировать этот матч
    };

    // Ивент - может быть Практис/Мини-турнир/Турнир
    const event = {
        id: "айди матча", // Айдишник ивента, по этому айдишнику в него приходят игры
        matchTime: "Время начала игры по расписанию", //Время начала матча по расписанию, выбирается создателем турнира
        prize: {
            // Выбирается создателем
            rubles: "рубли",
            coins: "монеты"
        },
        admin: "id администратора матча", // Айди обсервера/судьи, который будет контролировать турнир
        owner: "id организатора", // Айдишник орга, по нему орг на своей странице сможет смотреть созданные им турниры
        type: "free / paid", // Тип матча, выбирается создателем
        map: "Эрангель / Мирамар / Санук / Викенди / Ливик / Arcade Эрангель / TDM Склад", // Тут понятно
        regime: "SOLO / DUO / SQUAD", // Тут понятно
        view: "1st person / 3rd person", // Тут понятно
        games: { game1: game } // По gameNumber, указанному при создании отдельно взятой игры мы можем упорядочить игры, лишних фильтраций по дате и времени
    };

    const games = {
        miniTour: [],
        tour: [],
        practice: []
    };

    const [tournaments, setTournaments] = useState(true);
    const [miniTournaments, setMiniTournaments] = useState(false);
    const [practice, setPractice] = useState(false);

    const handleTourClick = () => {
        setTournaments(true);
        setMiniTournaments(false);
        setPractice(false);
    };

    const handleMinTourClick = () => {
        setTournaments(false);
        setMiniTournaments(true);
        setPractice(false);
    };

    const handlePracticeClick = () => {
        setTournaments(false);
        setMiniTournaments(false);
        setPractice(true);
    };

    const handleEventSelect = (id) => {
        dispatch(getSelectedEvent(id));
    };

    return (
        <section className="w-[100%] min-h-[100vh] bg-gray-800">
            <div className="w-[1240px mx-auto] flex flex-col items-center p-[75px] gap-10">
                <h2 className="text-white">Игры</h2>
                <div className="bg-yellow-400 w-[100%] h-[400px]">
                    BANNER
                    {!isLoading &&
                        events &&
                        events.map((event) => (
                            <button
                                key={event.id}
                                className="rounded bg-green-500 border-2 border-black"
                                onClick={() => handleEventSelect(event.id)}
                            >
                                Получить инфу по ивенту
                            </button>
                        ))}
                </div>

                <div className="flex bg-gray-600 w-[100%] justify-between rounded-[10px]">
                    <button
                        className={
                            !tournaments
                                ? "text-white text-center w-[33%]"
                                : "text-black text-center w-[33%] bg-yellow-400 rounded-[10px]"
                        }
                        onClick={handleTourClick}
                    >
                        Турниры
                    </button>
                    <button
                        className={
                            !miniTournaments
                                ? "text-white text-center w-[33%]"
                                : "text-black text-center w-[33%] bg-yellow-400 rounded-[10px]"
                        }
                        onClick={handleMinTourClick}
                    >
                        Мини-турниры
                    </button>
                    <button
                        className={
                            !practice
                                ? "text-white text-center w-[33%]"
                                : "text-black text-center w-[33%] bg-yellow-400 rounded-[10px]"
                        }
                        onClick={handlePracticeClick}
                    >
                        Практические
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Games;
