import { TabNavComponent } from "./TabNavComponent"
import { MiniTournaments } from "./Tabs/MiniTournaments"
import { PracticeGames } from "./Tabs/PracticeGames"
import { TabContent } from "./Tabs/TabContent"
import { Tournaments } from "./Tabs/Tournaments"

import { useState } from "react"

export const GamesTabs = ({setPopupVisible, events}) => {

    const [activeTab, setActiveTab] = useState("tournaments")
    // const tournaments = [
    //     {
    //         title: "PUBG Mobile Club Open Fall Splint 2022 CIS",
    //         partner: "Tencent & Krafton",
    //         time: "18:00",
    //         date: "10 августа 2022",
    //         prizeFund: "1 830 000 ₽",
    //         currentPlayers: "678",
    //         totalPlayers: "2048",
    //         free: false
    //     },
    //     {
    //         title: "PUBG Mobile Club Open Fall Splint 2022 CIS",
    //         partner: "Tencent & Krafton",
    //         time: "18:00",
    //         date: "10 августа 2022",
    //         prizeFund: "1 830 000 ₽",
    //         currentPlayers: "678",
    //         totalPlayers: "2048",
    //         free: true
    //     }
    // ]
    return (
            <div className="">
                <ul className="flex w-full items-center text-center text-xs font-bold rounded-xl overflow-clip">
                    <TabNavComponent 
                        title="Турниры" 
                        id="tournaments" 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                    />
                    <TabNavComponent 
                        title="Мини-турниры" 
                        id="mini-tournaments" 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                    />
                    <TabNavComponent 
                        title="Практические" 
                        id="practice-games" 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                    />
                </ul>
                <ul className="py-4 flex items-start flex-wrap space-x-[10px]">
                    <button 
                        className="flex items-center space-x-2 text-xs text-darkgrey bg-yellow rounded-lg py-2 px-3 font-semibold"
                        onClick={() => setPopupVisible(true)}
                    >
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.87095 2.45086C4.66059 2.14797 6.47253 1.99609 8.28763 1.99683C10.1334 1.99683 11.9436 2.15257 13.705 2.45086C13.9903 2.50013 14.249 2.64884 14.4351 2.87062C14.6213 3.0924 14.7229 3.37294 14.7219 3.66248V4.35145C14.7218 4.87647 14.5131 5.37996 14.1418 5.75115L10.0622 9.83082C9.97026 9.92278 9.89738 10.0319 9.84767 10.1521C9.79796 10.2722 9.7724 10.401 9.77246 10.531V12.4626C9.77257 12.8303 9.67027 13.1908 9.47701 13.5037C9.28375 13.8165 9.00718 14.0693 8.6783 14.2338L7.51881 14.8133C7.44335 14.8509 7.35952 14.8687 7.27527 14.8649C7.19102 14.861 7.10914 14.8357 7.03741 14.7914C6.96568 14.747 6.90647 14.6851 6.86541 14.6114C6.82435 14.5377 6.8028 14.4548 6.80279 14.3705V10.531C6.80256 10.2686 6.69812 10.0169 6.51243 9.83148L2.43408 5.75049C2.06277 5.3793 1.85412 4.87581 1.854 4.35079V3.66248C1.854 3.07053 2.27636 2.55183 2.87161 2.45086H2.87095Z" fill="#191919"/>
                        </svg>
                        <span>Фильтр</span>
                    </button>
                    <button className="flex items-center space-x-2 text-xs text-darkgrey bg-white rounded-lg py-2 px-3 font-semibold">
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.31918 2.2412V2.39102C10.1765 2.46942 11.0304 2.58215 11.8787 2.72894C11.9427 2.74004 12.004 2.76364 12.0589 2.7984C12.1138 2.83316 12.1614 2.8784 12.1988 2.93153C12.2362 2.98467 12.2629 3.04466 12.2771 3.10808C12.2914 3.1715 12.293 3.23711 12.2819 3.30116C12.2708 3.36521 12.2472 3.42645 12.2125 3.48138C12.1777 3.53631 12.1325 3.58386 12.0793 3.6213C12.0262 3.65875 11.9662 3.68536 11.9028 3.69962C11.8394 3.71389 11.7738 3.71552 11.7097 3.70442L11.5718 3.68132L10.9085 12.3075C10.8702 12.8049 10.6457 13.2695 10.2797 13.6084C9.91368 13.9474 9.43324 14.1357 8.9344 14.1357H3.76462C3.26579 14.1357 2.78535 13.9474 2.41936 13.6084C2.05337 13.2695 1.82881 12.8049 1.79056 12.3075L1.1266 3.68132L0.988664 3.70442C0.924613 3.71552 0.859004 3.71389 0.795583 3.69962C0.732163 3.68536 0.672172 3.65875 0.619036 3.6213C0.511724 3.54568 0.438849 3.43052 0.416444 3.30116C0.394038 3.17181 0.423937 3.03885 0.499563 2.93153C0.575189 2.82422 0.690347 2.75135 0.819704 2.72894C1.66798 2.58198 2.52183 2.46925 3.37918 2.39102V2.2412C3.37918 1.20896 4.17976 0.327202 5.23774 0.293542C5.97873 0.269828 6.72029 0.269828 7.46128 0.293542C8.51926 0.327202 9.31918 1.20896 9.31918 2.2412ZM5.26942 1.28288C5.9893 1.25986 6.70973 1.25986 7.4296 1.28288C7.92658 1.29872 8.32918 1.71716 8.32918 2.2412V2.31578C7.0104 2.23569 5.68797 2.23569 4.36918 2.31578V2.2412C4.36918 1.71716 4.77112 1.29872 5.26942 1.28288ZM5.03512 5.20658C5.03261 5.14158 5.01732 5.07771 4.99012 5.01861C4.96292 4.95952 4.92435 4.90636 4.87661 4.86217C4.82887 4.81798 4.77289 4.78363 4.71187 4.76108C4.65085 4.73852 4.58599 4.72821 4.52098 4.73072C4.45598 4.73324 4.39211 4.74853 4.33301 4.77573C4.27392 4.80292 4.22076 4.8415 4.17657 4.88924C4.13238 4.93698 4.09803 4.99296 4.07548 5.05398C4.05293 5.115 4.04261 5.17986 4.04512 5.24486L4.27414 11.1849C4.27922 11.3161 4.33621 11.4399 4.43256 11.529C4.48027 11.5732 4.53622 11.6075 4.5972 11.6301C4.65817 11.6526 4.72299 11.6629 4.78795 11.6604C4.85291 11.6579 4.91674 11.6426 4.9758 11.6154C5.03485 11.5882 5.08798 11.5497 5.13213 11.502C5.17629 11.4543 5.21062 11.3983 5.23315 11.3373C5.25569 11.2764 5.266 11.2115 5.26348 11.1466L5.03512 5.20658ZM8.65192 5.24486C8.65676 5.17861 8.64822 5.11206 8.62679 5.04918C8.60537 4.9863 8.57151 4.92837 8.52723 4.87885C8.48295 4.82933 8.42916 4.78923 8.36906 4.76094C8.30895 4.73265 8.24377 4.71675 8.17739 4.71418C8.11101 4.71161 8.04479 4.72242 7.98268 4.74598C7.92057 4.76954 7.86384 4.80536 7.81586 4.85131C7.76788 4.89726 7.72965 4.95239 7.70343 5.01343C7.67721 5.07446 7.66354 5.14015 7.66324 5.20658L7.43422 11.1466C7.42915 11.2779 7.47643 11.4058 7.56567 11.5022C7.65491 11.5986 7.7788 11.6556 7.91008 11.6607C8.04137 11.6658 8.16929 11.6185 8.26571 11.5293C8.36213 11.44 8.41915 11.3161 8.42422 11.1849L8.65192 5.24486Z" fill="#191919"/>
                        </svg>
                        <span>Сбросить</span>
                    </button>
    
                </ul>
                <div className="">
                    <TabContent id="tournaments" activeTab={activeTab}>
                        <Tournaments tournaments={events.filter((event) =>
                            event.eventType==="Tournament"
                        )}/>
                    </TabContent>
                    <TabContent id="mini-tournaments" activeTab={activeTab}>
                        <MiniTournaments/>
                    </TabContent>
                    <TabContent id="practice-games" activeTab={activeTab}>
                        <PracticeGames/>
                    </TabContent>
                </div>
            </div>
        )
}