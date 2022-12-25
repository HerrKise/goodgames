import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../store/reducers/staffSlice.js";

import logopic from "../assets/Main/logo.png"
import { Link } from "react-router-dom";

const StaffLogin = () => {
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setNickname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { nickname: nickname, password: password };
        dispatch(signIn({ payload: data, navigate: navigate }));
    };

    return (
        <section className="bg-darkgrey min-h-[100vh] flex flex-col items-center justify-center relative">
            <Link className="w-full flex items-center justify-center fixed top-12" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </Link>
            <div className="wrap py-20 h-full w-full  text-white  max-w-[400px]">
                <h1 className="h1 pb-8 text-center">Вход для администратора</h1>
                <form
                    className="space-y-[10px]"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        value={nickname || ""}
                        onChange={handleEmailChange}
                        placeholder="Никнейм"
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password || ""}
                        onChange={handlePasswordChange}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button
                        type="submit"
                        className='w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold md:text-base'
                    >
                        {" "}
                        Войти
                    </button>
                </form>
            </div>
        </section>
    );
};

export default StaffLogin;
