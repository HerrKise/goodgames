import { MainPromo } from "../components/Mainpage/MainPromo";
import { MainOffers } from "../components/Mainpage/MainOffers";
import { MainServices } from "../components/Mainpage/MainServices";
import { MainApps } from "../components/Mainpage/MainApps";
import { MainContests } from "../components/Mainpage/MainContests";
import { MainNews } from "../components/Mainpage/MainNews";
import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
import { MainLearnMore } from "../components/Mainpage/MainLearnMore";

export const MainPage = () => {
    const offers = [
        {
            title: "Бесплатные мини-турниры",
            description:
                "Комп не тянет игры? Играй через облачный игровой сервис с крутой графикой даже на калькуляторе!",
            date: "30.07.2022"
        },
        {
            title: "Реферальная программа",
            description:
                "А ниже вы можете посмотреть примеры баннеров для сайта игр. Баннеры для Warface",
            date: "30.07.2022"
        },
        {
            title: "Бесплатные мини-турниры",
            description:
                "Комп не тянет игры? Играй через облачный игровой сервис с крутой графикой даже на калькуляторе!",
            date: "30.07.2022"
        },
        {
            title: "Бесплатные мини-турниры",
            description:
                "Комп не тянет игры? Играй через облачный игровой сервис с крутой графикой даже на калькуляторе!",
            date: "30.07.2022"
        },
        {
            title: "Реферальная программа",
            description:
                "А ниже вы можете посмотреть примеры баннеров для сайта игр. Баннеры для Warface",
            date: "30.07.2022"
        },
        {
            title: "Бесплатные мини-турниры",
            description:
                "Комп не тянет игры? Играй через облачный игровой сервис с крутой графикой даже на калькуляторе!",
            date: "30.07.2022"
        }
    ];

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header />
            <main className="text-white pb-20">
                <MainPromo />
                <MainOffers offers={offers} />
                {/* <MainLearnMore/> */}
                {/* <MainServices offers={offers}/> */}
                <MainApps />
                <MainContests offers={offers} />
                <MainNews />
            </main>
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
            <NavBar />
        </div>
    );
};
