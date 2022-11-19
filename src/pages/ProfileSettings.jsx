import localStorageService from "../services/localStorage.service.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadUserProfile} from "../store/reducers/userSlice.js";

export const ProfileSettings = () => {
    const userId = localStorageService.getUserId();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({})
    const selector = useSelector(state => state.user.entities)

    useEffect(()=> {
        if (userId) {
            dispatch(loadUserProfile({userId:userId}))
            setUserData(selector)
        }
    }, [])
    return(
        <section className="w-[100%] bg-green-300">
            <div className="w-[1240px]  h-[900px] mx-auto">
                <div className="flex flex-col items-center">
                    <h2>Редактирование профиля</h2>
                    <form className="flex flex-col w-[400px] mt-[50px] gap-5">
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваше имя: {userData.name}</label>
                            <input type="text" placeholder="изменить"/>
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваше Почта: {userData.email}</label>
                            <input type="email" placeholder="изменить"/>
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш telegram: {userData.telegram}</label>
                            <input type="text" placeholder="изменить"/>
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш Discord: {userData.discord}</label>
                            <input type="text" placeholder="изменить"/>
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш YouTube: {userData.youtube}</label>
                            <input type="text" placeholder="изменить"/>
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш никнейм: {userData.nickname}</label>
                            <input type="text" placeholder="изменить"/>
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш PUBGID: {userData.pubgid}</label>
                            <input type="text" placeholder="изменить"/>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
