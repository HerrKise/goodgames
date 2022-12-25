import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
import { TournamentPromo } from "../components/TournamentPage/TournamentPromo";
import { TournamentInfo } from "../components/TournamentPage/TournamentInfo";
import { useSelector } from "react-redux";
import { getSelectedEventData } from "../store/reducers/eventsSlice";

export const TournamentPage = () => {
    // const tournament1 = {
    //     type: "Мини-турнир",
    //     title: "PUBG Mobile Club Open Fall Splint 2022 CIS",
    //     partner: "Tencent & Krafton",
    //     time: "18:00",
    //     date: "10 августа 2022",
    //     prizeFund: "1 830 000 ₽",
    //     currentPlayers: "678",
    //     totalPlayers: "2048",
    //     free: false,
    //     team: "Duo",
    //     maps: ["Эрангель", "Мирамар", "Санук"],
    //     league: 5,
    //     view: 3
    // }

    // const tournament2 = {
    //     type: "Практическая игра",
    //     title: "PUBG Mobile Club Open Fall Splint 2022 CIS",
    //     partner: "Tencent & Krafton",
    //     time: "18:00",
    //     date: "10 августа 2022",
    //     prizeFund: "1 000 ₽",
    //     currentPlayers: "678",
    //     totalPlayers: "2048",
    //     free: true,
    //     team: "Squad",
    //     maps: ["Эрангель", "Санук"],
    //     league: 3,
    //     view: 1
    // }

    const tournament = useSelector(getSelectedEventData());

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header />
            <main className="text-white pb-40">
                <TournamentPromo tournament={tournament} />
                <TournamentInfo tournament={tournament} />
            </main>
            <NavBar />
            <footer className="p-4 bg-darkgrey rounded-lg shadow  md:p-6 dark:bg-gray-800 pb-24">
                <div className=" md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white/50 sm:text-center dark:text-gray-400">© 2022 GoodGames™ </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-white/50 dark:text-white/40 sm:mt-0">
                        <li>
                            <a href="/policy" className="mr-4 hover:underline md:mr-6 ">Политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="/personal-data" className="mr-4 hover:underline md:mr-6">Политика обработки персональных данных</a>
                        </li>
                        <li>
                            <a href="/terms-of-use" className="mr-4 hover:underline md:mr-6">Пользовательское соглашение</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};
