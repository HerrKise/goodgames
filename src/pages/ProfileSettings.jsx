import localStorageService from "../services/localStorage.service.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    editUserProfile,
    getUserLoadingStatus,
    getUserProfileData,
    loadUserProfile,
    updatePicture
} from "../store/reducers/userSlice.js";

const ProfileSettings = () => {
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
        console.log(isLoading);
    }, [isLoading]);

    useEffect(() => {
        if (userId) {
            dispatch(loadUserProfile({ userId: userId }));
        }
    }, []);

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
        let formData = new FormData();
        console.log(profPic);
        formData.append("Picture", profPic);
        console.log(formData);
        dispatch(updatePicture(formData));
    };
    return isLoading ? (
        ""
    ) : (
        <section className="w-[100%] bg-green-300">
            <div className="w-[1240px]  h-[900px] mx-auto">
                <div className="flex flex-col items-center">
                    <h2>Редактирование профиля</h2>
                    <form
                        className="flex flex-col w-[400px] mt-[50px] gap-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <img src={selector.profilePicture} />
                            <label>Аватар</label>
                            <input
                                type="file"
                                placeholder="изменить"
                                onChange={handlePicUpload}
                                className="px-[5px] py-[3px]"
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваше имя: {selector.name}</label>
                            <input
                                type="text"
                                value={"" || name}
                                placeholder="изменить"
                                className="px-[5px] py-[3px]"
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваша почта: {selector.email}</label>
                            <input
                                type="email"
                                placeholder="изменить"
                                value={"" || email}
                                className="px-[5px] py-[3px]"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш telegram: {selector.telegram}</label>
                            <input
                                type="text"
                                placeholder="изменить"
                                value={"" || tg}
                                className="px-[5px] py-[3px]"
                                onChange={handleTgChange}
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш Discord: {selector.discord}</label>
                            <input
                                type="text"
                                placeholder="изменить"
                                value={"" || discord}
                                className="px-[5px] py-[3px]"
                                onChange={handleDiscordChange}
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш YouTube: {selector.youtube}</label>
                            <input
                                type="text"
                                placeholder="изменить"
                                value={"" || youTube}
                                className="px-[5px] py-[3px]"
                                onChange={handleYouTubeChange}
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px] ">
                            <label>Ваш никнейм: {selector.nickname}</label>
                            <input
                                type="text"
                                value={"" || nickname}
                                placeholder="изменить"
                                className="px-[5px] py-[3px]"
                                onChange={handleNicknameChange}
                            />
                        </div>
                        <div className="flex flex-col  border-white border-[1px] rounded-[5px] p-[5px]">
                            <label>Ваш PUBGID: {selector.pubgId}</label>
                            <input
                                type="text"
                                placeholder="изменить"
                                value={"" || pubgId}
                                className="px-[5px] py-[3px]"
                                onChange={handlePubgIdChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[300px] h-[35px] rounded-[10px] bg-yellow-300 mx-auto"
                        >
                            Обновить данные профиля
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProfileSettings;
