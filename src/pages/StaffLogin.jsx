import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../store/reducers/staffSlice.js";

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
        <section className="w-[100%] h-[100vh] bg-purple-300">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <form
                    className="flex flex-col items-center justify-between mt-[150px] w-[700px] h-[400px]"
                    onSubmit={handleSubmit}
                >
                    <h2>Авторизация сотрудника</h2>
                    <div className=" flex flex-col items-center">
                        <label>Никнейм</label>
                        <input
                            type="text"
                            className="w-[400px]"
                            value={nickname || ""}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className=" flex flex-col items-center">
                        <label>Пароль </label>
                        <input
                            type="password"
                            className="w-[400px]"
                            value={password || ""}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[300px] h-[30px] rounded-[20px] bg-orange-500"
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
