import React from "react";
import {useDispatch} from "react-redux";
import {register} from "../store/reducers/userSlice.js";

export default function ResetPassword() {

    const [email, changeEmail] = React.useState("");


    const handleEmailChange = (e) => {
        changeEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        useDispatch(register({email}))
    }

    return(
        <section className="w-[100%] bg-black">
            <div className="w-[1024px] mx-auto h-[900px] flex flex-col justify-center items-center">
                <form className="bg-[#161823] w-[500px] h-[450px] py-[30px] px-[20px] rounded-[20px]" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center border-b-[1px] border-gray-400 pb-[10px]">
                        <h2 className="text-white">
                            Восстановление пароля
                        </h2>
                        <p className="text-gray-500">
                            Введите свой email
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[70%] py-[20px] border-b-[1px] border-gray-400">

                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder=""
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-[20px]">
                        <button className="bg-amber-500 w-[150px] h-[50px] rounded-[10px]" type="submit">
                            Восстановить
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
