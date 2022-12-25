import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../store/reducers/staffSlice.js";

import logopic from "../assets/Main/logo.png";

const StaffRegistration = () => {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            register({
                nickname: nickname,
                role: role,
                password: password,
                confirmPassword: confirmPassword,
            })
        );
    };

    return (
        <section className="bg-darkgrey min-h-[100vh] flex flex-col items-center justify-center relative">
            <NavLink className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-50" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </NavLink>
            <main  className="wrap pt-28 text-white pb-20 max-w-[400px]">
                <form
                    className="space-y-3 p-4 bg-grey rounded-lg my-5"
                    onSubmit={handleSubmit}
                >
                    <h1 className="h1 text-center">Создание профиля для сотрудника</h1>
                    <input
                        type="text"
                        value={nickname || ""}
                        onChange={handleNicknameChange}
                        placeholder="Никнейм сотрудника"
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                    <input
                        type="password"
                        value={password || ""}
                        onChange={handlePasswordChange}
                        placeholder="Пароль сотрудника"
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                    <input
                        type="password"
                        value={confirmPassword || ""}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Повторите пароль"
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                    <select
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    >
                        <option>Роль сотрудника</option>
                        <option>Admin</option>
                        <option>Moderator</option>
                        <option>EventModerator</option>
                        <option>Organizer</option>
                        <option>NewsEditor</option>
                    </select>
                    <button
                        type="submit"
                        className='w-full rounded-lg bg-yellow py-4 my-5 text-darkgrey text-sm font-bold md:text-base'
                    >
                        Создать профиль
                    </button>
                </form>
            </main>
        </section>
    );
};

export default StaffRegistration;
