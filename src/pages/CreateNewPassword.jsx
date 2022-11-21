import {useDispatch} from "react-redux";
import {updatePassword} from "../store/reducers/userSlice.js";

import {useState} from "react";

export const CreateNewPassword = () => {

    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const changeVerificationCode = (e) => {
        setVerificationCode(e.target.value);
    };
    const changeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword ) {
            dispatch(
                updatePassword({
                    verificationCode: verificationCode,
                    newPassword: newPassword,
                    confirmNewPassword: confirmPassword
                })
            );
        } else {
            console.log("Пароли не совпадают")
        }

    };

    return(
        <div className=" w-[100%] min-h-[100vh] bg-yellow-600">
            <div className="w-[1240px] mx-auto h-[100%] flex flex-col items-center pt-[150px]">
                <form className="flex flex-col justify-around items-center h-[500px] w-[400px] bg-gray-800 rounded-[30px]">
                    <div className="flex flex-col justify-around items-center h-[200px] w-[90%]">
                        <label className="text-white">Код верификации</label>
                        <input type="text" className="w-[70%]" required placeholder="Введите код ферификации" value={verificationCode} onChange={changeVerificationCode} />
                        <label className="text-white">Новый пароль</label>
                        <input value={newPassword} type="password" className="w-[70%]" required placeholder="Введите новый пароль" onChange={changeNewPassword} />
                        <label className="text-white">Подтверждение пароля</label>
                        <input type="password"
                               required
                               className="w-[70%]"
                               value={confirmPassword}
                               placeholder="Повторите новый пароль"
                               onChange={changeConfirmPassword}
                        />
                    </div>

                    <button className="w-[150px] h-[50px] bg-yellow-600 rounded-[20px]" onClick={handleChangePassword}>Поменять пароль</button>
                </form>
            </div>
        </div>
    )
}


