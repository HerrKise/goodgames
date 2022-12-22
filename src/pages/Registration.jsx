import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../store/reducers/userSlice.js";

import logopic from "../assets/Main/logo.png"
import { Link } from "react-router-dom";

export default function Registration() {
    const [login, changeLogin] = useState("");
    const [pubgId, changePubgId] = useState("");
    const [password, changePassword] = useState("");
    const [passwordR, changePasswordR] = useState("");
    const [email, changeEmail] = useState("");
    const [nickname, changeNickname] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        changeLogin(e.target.value);
    };

    const handlePubgIdChange = (e) => {
        changePubgId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        changePassword(e.target.value);
    };

    const handlePasswordRChange = (e) => {
        changePasswordR(e.target.value);
    };

    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    };

    const handleNicknameChange = (e) => {
        changeNickname(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            login: login,
            password: password,
            confirmPassword: passwordR,
            nickname: nickname,
            pubgId: pubgId
        };
        dispatch(register({ payload: data, navigate: navigate }));
    };

    return (
        <section className="bg-darkgrey min-h-[100vh] flex flex-col items-center justify-center relative">
            <Link className="w-full flex items-center justify-center fixed top-12" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </Link>
            <div className="wrap py-20 h-full w-full  text-white">
                <h1 className="h1 pb-8 text-center">Регистрация</h1>
                <form
                    className="space-y-[10px]"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder="Логин"
                        required
                        value={login}
                        onChange={handleLoginChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="text"
                        id="pubgID"
                        name="pubgID"
                        placeholder="ID в PUBGM"
                        value={pubgId}
                        onChange={handlePubgIdChange}
                        required
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        placeholder="Ник"
                        value={nickname}
                        onChange={handleNicknameChange}
                        required
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="password-rep"
                        id="password-rep"
                        name="password-rep"
                        value={passwordR}
                        onChange={handlePasswordRChange}
                        placeholder="Повторите пароль"
                        required
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <div className="flex text-white/70 items-center space-x-3 py-2">
                        <input type="checkbox" id="agreement" required/>
                        <label htmlFor="agreement">С правилами портала ознакомлен</label>
                    </div>
                    <p className="p text-center opacity-30 pb-3">
                        Я подтверждаю, что согласен с <Link to="/terms-of-use" target="_blank" className="underline">пользовательским соглашением</Link>, <Link to="/policy" target="_blank" className="underline">политикой конфиденциальности</Link> и на <Link to="/personal-data"  target="_blank" className="underline">обработку персональных данных</Link>
                    </p>
                    <button
                        className='w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold'
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </section>
    );
}
