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
            <main className="text-white pb-40 md:pb-60">
                <TournamentPromo tournament={tournament} />
                <TournamentInfo tournament={tournament} />
            </main>
            <NavBar />
        </div>
    );
};
