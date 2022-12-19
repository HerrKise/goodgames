import { NavLink } from "react-router-dom";
import logopic from "../assets/Main/logo.png";

import { ChooseGroupSlotsParticipation } from "./ChooseGroupSlotsParticipation";

export const ChooseStageGroupParticipation = () => {

    const event = {
        title: "titleevent",
        date: "10.10.10",
        type: "Мини-турнир",
        stage: {
            title: "2 этап",
            groups: [
                {
                    name: "A1",
                    slots: [
                        {
                            num: "1",
                            type: "Reserved"
                        },
                        {
                            num: "2",
                            type: "Paid"
                        },
                        {
                            num: "3",
                            type: "Free"
                        },
                        {
                            num: "4",
                            type: "Occupied"
                        }
                    ]
                },
                {
                    name: "B1",
                    slots: [
                        {
                            num: "1",
                            type: "Reserved"
                        },
                        {
                            num: "2",
                            type: "Paid"
                        },
                        {
                            num: "3",
                            type: "Free"
                        },
                        {
                            num: "4",
                            type: "Occupied"
                        }
                    ]
                }
            ]
        }

    }

    const team = {
        id: "1",
        title: "Team1",
        tag: "123"
    }

    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-50" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </NavLink>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Запись на событие</h1>
                <div className="space-y-3 my-4">
                    <div className="flex justify-between bg-grey p-3 rounded-lg items-center">
                        <div>
                            <h3 className="h3">{event.title}</h3>
                            <p className="p">{event.type}</p>
                        </div>
                        <div>
                            <h3 className="h3">{event.stage.title}</h3>
                            <p className="p">{event.date}</p>
                        </div>
                        
                    </div>
                    <div key={team.id}  className="bg-grey rounded-lg p-3 relative w-full">
                        <div className='flex items-center justify-between space-x-3'>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-white/40">
                                    {team.logo ? 
                                        (
                                            <img
                                            src={team.logo}
                                            alt="tl"
                                            className="w-full h-full"
                                        />
                                        )
                                        :   (
                                            <svg className="w-full h-full" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.6875 9.5625C11.6875 8.15354 12.2472 6.80228 13.2435 5.806C14.2398 4.80971 15.591 4.25 17 4.25C18.409 4.25 19.7602 4.80971 20.7565 5.806C21.7528 6.80228 22.3125 8.15354 22.3125 9.5625C22.3125 10.9715 21.7528 12.3227 20.7565 13.319C19.7602 14.3153 18.409 14.875 17 14.875C15.591 14.875 14.2398 14.3153 13.2435 13.319C12.2472 12.3227 11.6875 10.9715 11.6875 9.5625ZM22.3125 13.8125C22.3125 12.6853 22.7603 11.6043 23.5573 10.8073C24.3543 10.0103 25.4353 9.5625 26.5625 9.5625C27.6897 9.5625 28.7707 10.0103 29.5677 10.8073C30.3647 11.6043 30.8125 12.6853 30.8125 13.8125C30.8125 14.9397 30.3647 16.0207 29.5677 16.8177C28.7707 17.6147 27.6897 18.0625 26.5625 18.0625C25.4353 18.0625 24.3543 17.6147 23.5573 16.8177C22.7603 16.0207 22.3125 14.9397 22.3125 13.8125ZM3.1875 13.8125C3.1875 12.6853 3.63527 11.6043 4.4323 10.8073C5.22933 10.0103 6.31033 9.5625 7.4375 9.5625C8.56467 9.5625 9.64567 10.0103 10.4427 10.8073C11.2397 11.6043 11.6875 12.6853 11.6875 13.8125C11.6875 14.9397 11.2397 16.0207 10.4427 16.8177C9.64567 17.6147 8.56467 18.0625 7.4375 18.0625C6.31033 18.0625 5.22933 17.6147 4.4323 16.8177C3.63527 16.0207 3.1875 14.9397 3.1875 13.8125ZM8.93917 21.4157C9.80326 20.0614 10.9949 18.9469 12.4038 18.175C13.8127 17.4032 15.3935 16.9991 17 17C18.3456 16.9988 19.6762 17.2817 20.9049 17.8304C22.1335 18.379 23.2325 19.181 24.1297 20.1838C25.0269 21.1865 25.7023 22.3675 26.1115 23.6493C26.5207 24.9312 26.6546 26.285 26.5044 27.6222C26.4861 27.7883 26.4288 27.9477 26.3372 28.0876C26.2456 28.2274 26.1224 28.3436 25.9774 28.4268C23.2455 29.9944 20.1497 30.8171 17 30.8125C13.7346 30.8125 10.6675 29.9455 8.02258 28.4268C7.87764 28.3436 7.75438 28.2274 7.66281 28.0876C7.57124 27.9477 7.51395 27.7883 7.49558 27.6222C7.25766 25.4499 7.76682 23.2614 8.93917 21.4172V21.4157Z" fill="#262626"/>
                                                <path d="M7.19961 20.1932C5.80243 22.3499 5.15147 24.9055 5.34661 27.4678C4.49592 27.3388 3.65923 27.1301 2.84761 26.8444L2.6847 26.7878C2.53934 26.7362 2.41206 26.6435 2.31827 26.5211C2.22449 26.3986 2.16822 26.2516 2.15628 26.0978L2.14211 25.9264C2.08489 25.2152 2.17152 24.4997 2.39684 23.8227C2.62215 23.1457 2.98154 22.5211 3.45356 21.986C3.92557 21.4509 4.50053 21.0164 5.14414 20.7084C5.78775 20.4003 6.48681 20.2251 7.19961 20.1932ZM28.6536 27.4678C28.8488 24.9055 28.1978 22.3499 26.8006 20.1932C27.5134 20.2251 28.2125 20.4003 28.8561 20.7084C29.4997 21.0164 30.0747 21.4509 30.5467 21.986C31.0187 22.5211 31.3781 23.1457 31.6034 23.8227C31.8287 24.4997 31.9153 25.2152 31.8581 25.9264L31.8439 26.0978C31.8317 26.2514 31.7754 26.3981 31.6816 26.5203C31.5878 26.6424 31.4607 26.7349 31.3155 26.7863L31.1526 26.843C30.3494 27.1263 29.5149 27.3374 28.6536 27.4678Z" fill="#262626"/>
                                            </svg>
                                        )
                                    }
                                </div>
                                <h3 className="h3">{team.title}</h3>
                                <p className="p">#{team.tag}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-[1px] border-white/30">
                        <h3 className="h3">Доступные группы</h3>
                        <p className="p">{event.date}</p>
                    </div>
                    <ul className="space-y-3">
                        {event.stage.groups.map((group, i) => {
                            return (
                                <ChooseGroupSlotsParticipation group={group} i={i} key={i}/>
                            )
                        })}
                    </ul>
                    <button
                        className="rounded-lg w-full bg-yellow p-3 text-darkgrey text-sm font-bold "
                    >
                        Подтвердить
                    </button>
                </div>
            </main>
        </section>
    )
}