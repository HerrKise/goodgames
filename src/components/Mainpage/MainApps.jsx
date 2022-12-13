import googlebadge from "../../assets/Main/google-play-badge.png"
import appstorebadge from "../../assets/Main/App_Store_Badge.svg"
import { NavLink } from "react-router-dom"

export const MainApps = () => {
    return (
        <section className="my-10 bg-appsbg bg-cover bg-center h-[555px] rounded-3xl relative">
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#191919] via-[#00000070] to-[#191919] z-10"></div>
            <div className="wrap relative z-20 w-full h-full flex flex-col justify-end">
                <h1 className="h1 text-center mb-3">
                Приложения для
                <br />
                iOS&nbsp;и&nbsp;Android
                </h1>
                <p className="p text-center">Скачайте приложения GoodGames для удобства пользователя.
                   <br />Получите доступ ко&nbsp;всем мероприятиям от&nbsp;нас и&nbsp;наших партнеров.
                </p>
                <div className="flex items-center justify-between p-10 h-10">
                    <NavLink className="w-[160px]">
                        <img src={appstorebadge} alt="appstorebadge" />
                    </NavLink>
                    <NavLink className="w-[140px]">
                        <img src={googlebadge} alt="googlebadge" />
                    </NavLink>
                </div>
            </div>
        </section>
    )
}