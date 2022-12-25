import googlebadge from "../../assets/Main/google-play-badge.png";
import appstorebadge from "../../assets/Main/App_Store_Badge.svg";
import { NavLink } from "react-router-dom";

export const MainApps = () => {
    return (
        <section className="my-10 bg-appsbg bg-cover bg-center h-[550px] rounded-3xl relative">
            <img src={'https://app2top.ru/wp-content/uploads/2020/10/pubg-mobile2.jpg'} alt="appsbg"  className="absolute top-0 left-0 h-full w-full object-top object-cover"/>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#191919] via-[#00000070] to-[#191919] z-10"></div>
            <div className="hidden absolute z-10 w-full h-full top-0 md:block" style={{background: "radial-gradient(#00000000, #19191980)"}}></div>
            <div className="wrap relative z-20 w-full h-full flex flex-col justify-end md:justify-center max-w-[400px]">
                <h1 className="h1 text-center mb-3">
                Приложения для
                <br />
                iOS&nbsp;и&nbsp;Android
                </h1>
                <p className="p text-center">Скачайте приложения GoodGames для удобства пользователя.
                   <br />Получите доступ ко&nbsp;всем мероприятиям от&nbsp;нас и&nbsp;наших партнеров.
                </p>
                <div className="flex items-center justify-between p-6 mt-6 h-10 md:flex-col md:justify-center md:h-[160px] md:mt-0">
                    <NavLink className="w-[160px]">
                        <img src={appstorebadge} alt="appstorebadge" className="h-[50px] md:h-[61px]"/>
                    </NavLink>
                    <NavLink className="w-[160px]">
                        <img src={googlebadge} alt="googlebadge"  className="h-[62px] md:h-[73px]"/>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

