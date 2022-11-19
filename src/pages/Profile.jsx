import {NavLink} from "react-router-dom";

export const Profile = () => {
    return(
        <section className="w-[100%] bg-blue-300 h-[100vh]">
            <div className="w-[1240px mx-auto] ">
                <div className="flex flex-col items-center h-[900px] justify-evenly">
                    <h2 className="mt-[30px] text-[30px]">Профиль</h2>
                    <div className="flex w-[400px] justify-evenly items-center">
                        <div>
                            <img alt="avatar"  className="w-[100px] h-[100px] rounded-[75px] border-black border-[2px]"/>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <p>{"Имя"}</p>
                                <NavLink to="/profile/change-name">Изменить имя</NavLink>
                            </div>
                            <div>
                                <p>{"Никнейм"}</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-[300px] bg-orange-400 rounded-[20px] h-[130px] flex justify-between items-center p-[10px]">
                        <div className="flex flex-col justify-between w-[50%] ">
                            <p>Подписка активна/неактивна</p>
                            <p>Тип подписки</p>
                        </div>
                        <div>
                            {"nn"}
                            <p>дней</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p>Баланс {"roubles"}</p>
                        <NavLink to="/payment">Управлять</NavLink>
                    </div>

                </div>

            </div>
        </section>
    )
}
