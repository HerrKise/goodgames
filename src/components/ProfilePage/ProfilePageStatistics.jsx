import { Link } from "react-router-dom"
import { Header } from "../UI/Header"
import { NavBar } from "../UI/NavBar"
import { ProfileStatisticsFilter } from "./ProfileStatisticsFilter"

export const ProfilePageStatistics = () => {
    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <main className="wrap pt-28 text-white pb-20 space-y-5">
                <h1 className="h1">Моя статистика</h1>
                <ProfileStatisticsFilter/>
                <div>
                    <ul className="border-b-[1px] border-grey w-full h3 font-medium">
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Сыграно турниров</p>
                            <p className="p opacity-100">10</p>
                        </li>
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Сыграно групп</p>
                            <p className="p opacity-100">10</p>
                        </li>
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Сыграно матчей</p>
                            <p className="p opacity-100">10</p>
                        </li>
                    </ul>
                    <ul className="border-b-[1px] border-grey w-full h3 font-medium">
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Побед в турниров</p>
                            <p className="p opacity-100">10</p>
                        </li>
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Побед в групп</p>
                            <p className="p opacity-100">10</p>
                        </li>
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Побед в матчей</p>
                            <p className="p opacity-100">10</p>
                        </li>
                    </ul>
                    <ul className="w-full h3 font-medium">
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Среднее место в турниров</p>
                            <p className="p opacity-100">10</p>
                        </li>
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Среднее место в групп</p>
                            <p className="p opacity-100">10</p>
                        </li>
                        <li className="flex items-center justify-between w-full py-[10px]">
                            <p className="opacity-50">Среднее место в матчей</p>
                            <p className="p opacity-100">10</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-base font-semibold">Сезон 1</h3>
                    <p className="p py-4">Сезон 1 - это большой сезон киберспортивных мероприятий на нашей платформе, в котором вы можете смотреть онлайн трансляции всех матчей. Каждый день, с понедельника по пятницу, на нашем сайте будет проводиться большое количество интересных поединков в различных видах спорта. В каждом поединке будет принимать участие большое количество команд, и в конце каждого поединка победителю будет выплачиваться денежный приз. Каждая трансляция будет проходить в режиме онлайн, поэтому вы сможете следить за всем происходящим на экране. Онлайн трансляции проходят на постоянной основе.</p>
                </div>
                <Link>
                    <button className='w-full rounded-lg bg-yellow text-darkgrey py-4 text-sm font-bold'>
                        <span>Узнать больше</span>
                    </button>
                </Link>
            </main>
            <NavBar/>
        </div>
    )
}