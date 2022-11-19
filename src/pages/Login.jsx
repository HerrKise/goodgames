import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../store/reducers/userSlice.js";

export default function Login() {
    const [email, changeEmail] = React.useState("");
    const [password, changePassword] = React.useState("");
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        changePassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn({ email: email, password: password }));
    };

    return (
        <section className="w-[100%] bg-black">
            <div className="w-[1024px] mx-auto h-[900px] flex flex-col justify-center items-center">
                <form
                    className="bg-[#161823] w-[500px] h-[600px] py-[30px] px-[20px] rounded-[20px]"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col justify-center items-center border-b-[1px] border-gray-400 pb-[10px]">
                        <h2 className="text-white">С возвращением, дружище!</h2>
                    </div>
                    <div className="flex flex-col items-center justify-around h-[70%] py-[20px] border-b-[1px] border-gray-400">
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">Почта</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder=""
                                required
                                value={email}
                                onChange={handleEmailChange}
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder=""
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                    </div>
                    <div className="flex justify-around items-center pt-[15px]">
                        <button className="bg-white w-[150px] h-[50px] rounded-[10px]">
                            Регистрация
                        </button>
                        <button
                            className="bg-amber-500 w-[150px] h-[50px] rounded-[10px]"
                            type="submit"
                        >
                            Вход
                        </button>
                    </div>
                    <div className="flex items-center justify-center text-white text-center mt-[10px]">
                        <p>Забыли пароль?</p>
                    </div>
                </form>
            </div>
        </section>
    );
}
