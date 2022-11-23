import { NavLink } from "react-router-dom";
import localStorageService from "../services/localStorage.service.js";
import { useDispatch, useSelector } from "react-redux";
import {
    getErrors,
    getUserLoadingStatus,
    getUserProfileData,
    loadUserProfile,
    resendEmailConfirmation
} from "../store/reducers/userSlice.js";
import { useEffect, useState } from "react";
import { API_URL, IMG_URL } from "../http/index.js";

const Profile = () => {
    const userId = localStorageService.getUserId();
    const dispatch = useDispatch();
    const selector = useSelector(getUserProfileData());
    const isLoading = useSelector(getUserLoadingStatus());

    const errors = useSelector(getErrors());

    useEffect(() => {
        if (userId) {
            dispatch(loadUserProfile({ userId: userId }));
        }
    }, []);

    const picture = `${API_URL + selector?.profilePicture?.path}` || "";

    return isLoading ? (
        ""
    ) : (
        <section className="w-[100%] bg-blue-300">
            <button onClick={() => dispatch(resendEmailConfirmation())}>
                Перевыслать письмо подтверждения почты
            </button>
            <div className="w-[1240px mx-auto] flex flex-col items-center">
                <div className="flex flex-col items-center h-[900px] gap-10 w-[500px]">
                    <h2 className="mt-[30px] text-[30px]">Профиль</h2>
                    <div className="flex  justify-evenly items-center w-[100%]">
                        <div>
                            <img
                                alt="avatar"
                                src={picture}
                                className="w-[100px] h-[100px] rounded-[75px] border-black border-[2px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <p>{selector.name}</p>
                            </div>
                            <div>
                                <p>{selector.nickname}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-400 w-[90%] border-black border-[1px] rounded text-center">
                        <NavLink to="/profile/settings">
                            Настройки профиля
                        </NavLink>
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
                    <div className="bg-blue-500 w-[90%] rounded-[30px]">
                        <div className="flex  w-[100%] justify-evenly items-center">
                            <p>Баланс {"Roubles"}</p>
                            <NavLink to="/manage-balance">Управлять</NavLink>
                        </div>
                        <div className="flex  w-[100%] justify-evenly items-center">
                            <p>Монеты {"Coins"}</p>
                            <NavLink to="/manage-balance">Обмен</NavLink>
                        </div>
                        <div className="flex  w-[100%] justify-evenly items-center">
                            <p>Билеты {"Tickets"}</p>
                            <NavLink to="/manage-balance">Купить</NavLink>
                        </div>
                    </div>
                    <ul className="flex flex-col w-[300px] gap-1">
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/my-teams">Мои команды</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/my-games">Мои игры</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/my-notifications">
                                Уведомления
                            </NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/my-transactions">
                                Мои транзакции
                            </NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/my-referals">Рефералы</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/shop">Магазин</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/support">Служба поддержки</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/learning">Обучение</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/about-us">О нас</NavLink>
                        </li>
                        <li className="bg-gray-400 w-[90%] border-black border-[1px] rounded">
                            <NavLink to="/">Выйти</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Profile;
