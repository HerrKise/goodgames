import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { confirmEmail } from "../store/reducers/userSlice";

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
        <section className="bg-gray-800 w-[100%] min-h-[100vh]">
            <div className="flex flex-col items-center justify-center pt-[150px]">
                <form
                    className="bg-gray-200 w-[400px] h-[200px] flex flex-col justify-around items-center rounded-[40px]"
                    onSubmit={handleSubmit}
                >
                    <h2>Подтвердите почту</h2>
                    <div className="flex flex-col">
                        <label>Введите код верификации</label>
                        <input type="text" placeholder="код верификации" />
                    </div>
                    <button className="w-[250px] h-[60px] bg-green-300 rounded-[30px]">
                        Подтвердить почту
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ConfirmEmail;
