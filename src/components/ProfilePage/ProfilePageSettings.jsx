import { Link } from "react-router-dom"
import { Header } from "../UI/Header"
import { NavBar } from "../UI/NavBar"

import localStorageService from "../../services/localStorage.service.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    editUserProfile,
    getUserLoadingStatus,
    getUserProfileData,
    loadUserProfile,
    updatePicture
} from "../../store/reducers/userSlice.js";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../http/index.js";

import {updatePassword} from "../../store/reducers/userSlice.js";

export const ProfilePageSettings = () => {

    const userId = localStorageService.getUserId();
    const dispatch = useDispatch();
    const selector = useSelector(getUserProfileData());
    const isLoading = useSelector(getUserLoadingStatus());
    const [name, changeName] = useState("");
    const [pubgId, changePubgId] = useState("");
    const [email, changeEmail] = useState("");
    const [nickname, changeNickname] = useState("");
    const [tg, changeTg] = useState("");
    const [youTube, changeYouTube] = useState("");
    const [discord, setDiscord] = useState("");
    const [profPic, setProfPic] = useState([]);

    useEffect(() => {
        if (isLoading === false) {
            changeName(selector.name);
            changePubgId(selector.pubgId);
            changeEmail(selector.email);
            changeNickname(selector.nickname);
            changeTg(selector.telegram);
            changeYouTube(selector.youtube);
            setDiscord(selector.discord);
        }
        console.log("isloading", isLoading);
        console.log(selector);
    }, [isLoading]);

    useEffect(() => {
        if (userId) {
            dispatch(loadUserProfile({ userId: userId }));
        }
    }, []);

    const picture = `${API_URL + selector?.profilePicture?.path}` || "";

    const handleNameChange = (e) => {
        changeName(e.target.value);
    };

    const handlePubgIdChange = (e) => {
        changePubgId(e.target.value);
    };

    const handleDiscordChange = (e) => {
        setDiscord(e.target.value);
    };

    const handleTgChange = (e) => {
        changeTg(e.target.value);
    };

    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    };

    const handleNicknameChange = (e) => {
        changeNickname(e.target.value);
    };

    const handleYouTubeChange = (e) => {
        changeYouTube(e.target.value);
    };

    const handlePicUpload = (e) => {
        e.preventDefault();
        setProfPic(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            editUserProfile({
                name: name,
                email: email,
                telegram: tg,
                discord: discord,
                youtube: youTube,
                nickname: nickname,
                pubgId: pubgId
            })
        );
        if (profPic.length !== 0) {
            let formData = new FormData();
            console.log(profPic);
            formData.append("Picture", profPic);
            console.log(formData);
            dispatch(updatePicture(formData));
        }
    };

    //change password 
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const changeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };
    const changeConfirmNewPassword = (e) => {
        setConfirmNewPassword(e.target.value);
    };

    const handleChangePassword = (e) => {
        e.preventDefault()
        dispatch(
            updatePassword({
                currentPassword: password,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword
            })
        );
    };

    return isLoading ? (
        ""
    ) : (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Настройки</h1>
                <form className="pt-5 space-y-[10px]"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-base">Основное</h3>
                    <div className="bg-grey w-full py-4 px-7 rounded-lg text-center text-sm font-bold flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full relative overflow-clip mb-3">
                            <img src={picture} className="absolute top-0 h-full w-full object-center object-cover"/>
                        </div>
                        <input type="file" name="avatar" id="avatar" onChange={handlePicUpload} className="hidden" />
                        <label htmlFor="avatar" >Изменить аватар профиля</label>
                    </div>
                    <input type="text" placeholder="Имя пользователя" 
                        value={"" || name}
                        onChange={handleNameChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="email" placeholder="Ваш email" 
                        value={"" || email}
                        onChange={handleEmailChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="text" placeholder="Ваш telegram" 
                        value={"" || tg}
                        onChange={handleTgChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="text" placeholder="Ваш YouTube" 
                        value={"" || youTube}
                        onChange={handleYouTubeChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="text" placeholder="Ваш Discord" 
                        value={"" || tg}
                        onChange={handleDiscordChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <h3 className="text-base">PUBG</h3>
                    <input type="text" placeholder="Ник в PUBG"
                        value={"" || nickname}
                        onChange={handleNicknameChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="text" placeholder="ID в PUBG"
                        value={"" || pubgId}
                        onChange={handlePubgIdChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button className='w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold'>
                        <span>Изменить настройки профиля</span>
                    </button>
                </form>
                <form className="pt-5 space-y-[10px]" onSubmit={handleChangePassword}>
                    <h3 className="text-base">Сменить пароль</h3>
                    <input type="password" placeholder="Старый пароль"
                        value={password}
                        required
                        onChange={changePassword}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="password" placeholder="Новый пароль"
                        required
                        value={newPassword}
                        onChange={changeNewPassword}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="password" placeholder="Подтвердите новый пароль"
                        required
                        value={confirmNewPassword}
                        onChange={changeConfirmNewPassword}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button className='w-full rounded-lg bg-grey py-4 text-sm font-bold'>
                        <span>Изменить пароль</span>
                    </button>
                </form>
                <h3 className="pt-5 text-base">Верификация аккаунта</h3>
                <p className="p py-3">
                    Верификация аккаунта на нашем сервисе нужна для того, чтобы наши пользователи могли пользоваться всеми услугами, которые мы предоставляем. Мы не требуем никаких дополнительных документов от пользователей, но рекомендуем пройти верификацию. Это делается для того, чтобы у нас была возможность работать с вашим аккаунтом, и для вас было безопаснее. Итак, вы прошли верификацию (в случае если вы ее не проходили). Теперь вам нужно будет ввести: 1. Логин, который вы использовали при регистрации на сайте.
                </p>
                <Link>
                    <button className='w-full rounded-lg bg-grey py-4 text-sm font-bold'>
                        <span>Подтвердить аккаунт</span>
                    </button>
                </Link>
            </main>
            <NavBar/>
        </div>
    )
}