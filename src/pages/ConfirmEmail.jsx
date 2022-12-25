import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { confirmEmail } from "../store/reducers/userSlice";

import logopic from "../assets/Main/logo.png";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
    const dispatch = useDispatch();

    const { code } = useParams();
    console.log(code);

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(confirmEmail({ code: code }));
    };

    return (
        <section className="bg-darkgrey min-h-[100vh] flex flex-col items-center justify-center relative">
            <Link
                className="w-full flex items-center justify-center"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </Link>
            <div className="wrap py-20 h-full w-full  text-white max-w-[400px]">
                <form
                    className="bg-grey rounded-lg p-5 space-y-4"
                    onSubmit={handleSubmit}
                >
                    <h1 className="h1 text-center">Подтверждение почты</h1>
                    <input type="text" placeholder="Введите код верификации" className="bg-darkgrey w-full py-4 px-7 rounded-lg"/>
                    <button className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold">
                        Подтвердить почту
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ConfirmEmail;
