import { MainPromo } from "../components/Mainpage/MainPromo"
import { MainOffers } from "../components/Mainpage/MainOffers"
import { MainServices } from "../components/Mainpage/MainServices"
import { MainApps } from "../components/Mainpage/MainApps"
import { MainContests } from "../components/Mainpage/MainContests"
import { MainNews } from "../components/Mainpage/MainNews"
import { Header } from "../components/UI/Header"
import { NavBar } from "../components/UI/NavBar"
import { MainLearnMore } from "../components/Mainpage/MainLearnMore"



export const MainPage = () => {

    const offers = [
        {
            title: "Бесплатные мини-турниры",
            description: "Комп не тянет игры? Играй через облачный игровой сервис с крутой графикой даже на калькуляторе!",
            date: "30.07.2022"
        },
        {
            title: "Реферальная программа",
            description: "А ниже вы можете посмотреть примеры баннеров для сайта игр. Баннеры для Warface",
            date: "30.07.2022"
        },
        {
            title: "Бесплатные мини-турниры",
            description: "Комп не тянет игры? Играй через облачный игровой сервис с крутой графикой даже на калькуляторе!",
            date: "30.07.2022"
        },
    ]
    

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <main className="text-white pb-20">
                <MainPromo/>
                <MainOffers offers={offers}/>
                {/* <MainLearnMore/> */}
                {/* <MainServices offers={offers}/> */}
                <MainApps/>
                <MainContests offers={offers}/>
                <MainNews/>
            </main>
            <NavBar/>
        </div>
    )
}