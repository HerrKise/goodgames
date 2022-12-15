import { useState } from "react"

import { GamesFilter } from "../components/GamesPage/GamesFilter"
import { GamesPromo } from "../components/GamesPage/GamesPromo"
import { GamesTabs } from "../components/GamesPage/GamesTabs"
import { Header } from "../components/UI/Header"
import { NavBar } from "../components/UI/NavBar"

export const GamesPage = () => {

    const [popupVisible, setPopupVisible] = useState(false)

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <GamesPromo/>
            <main className="wrap text-white pb-20">
                <GamesTabs setPopupVisible={setPopupVisible}/>
                <GamesFilter popupVisible={popupVisible} setPopupVisible={setPopupVisible}/>
            </main>
            <NavBar/>
        </div>
    )
}