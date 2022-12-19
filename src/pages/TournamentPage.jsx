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
                <div className="wrap flex space-x-2 items-center fixed bottom-20">
                    <button className="bg-white rounded-full p-3 flex items-center space-x-2 text-darkgrey text-sm font-bold">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.8294 14.9254L7.82356 14.9229L7.80523 14.9129C7.69797 14.8539 7.59157 14.7934 7.48605 14.7313C6.21753 13.9775 5.03204 13.092 3.94928 12.0895C2.03173 10.3003 0 7.64525 0 4.37517C0 1.93511 2.05339 5.91275e-05 4.5318 5.91275e-05C5.22078 -0.00331548 5.90166 0.14868 6.52379 0.444742C7.14593 0.740803 7.69332 1.17331 8.12524 1.7101C8.55725 1.1732 9.10477 0.740626 9.72706 0.44456C10.3494 0.148494 11.0304 -0.00344097 11.7195 5.91275e-05C14.1971 5.91275e-05 16.2505 1.93511 16.2505 4.37517C16.2505 7.64609 14.2188 10.3012 12.3012 12.0887C11.2185 13.0912 10.033 13.9767 8.76443 14.7304C8.65892 14.7928 8.55252 14.8536 8.44525 14.9129L8.42692 14.9229L8.42108 14.9263L8.41858 14.9271C8.32821 14.975 8.2275 15 8.12524 15C8.02298 15 7.92227 14.975 7.8319 14.9271L7.8294 14.9263V14.9254Z" fill="#191919"/>
                        </svg>
                        <span>100</span>
                    </button>
                    <button className="bg-yellow rounded-full w-full py-3 text-darkgrey text-sm font-bold">Принять участие</button>
                </div>
            </main>
            <NavBar />
        </div>
    );
};
