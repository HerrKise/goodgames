import { useState } from "react";
import {useDispatch} from "react-redux";
import {updatePassword} from "../store/reducers/userSlice.js";

const PasswordChangeViaProfile = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const changeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };
    const changeConfirmNewPassword = (e) => {
        setConfirmNewPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            updatePassword({
                currentPassword: password,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword
            })
        );
    };

    return (
        <div className="w-[100%] min-h-[100vh] bg-gray-800">
            <div className="w-[1240px] mx-auto pt-[150px] flex flex-col items-center">
                <h2>Смена пароля</h2>
               <form className="w-[400px] h-[500px] flex flex-col items-center justify-around bg-gray-600" onSubmit={handleSubmit}>
                   <label>Старый пароль</label>
                   <input value={password} type="password" required onChange={changePassword} />
                   <label>Новый пароль</label>
                   <input value={newPassword} type="password" required onChange={changeNewPassword} />
                   <label>ПОдтвердите новый пароль</label>
                   <input
                       type="password" required
                       value={confirmNewPassword}
                       onChange={changeConfirmNewPassword}
                   />
                   <button type="submit" className="bg-orange-500">Поменять пароль</button>
               </form>
            </div>

        </div>
    );
};

export default PasswordChangeViaProfile;
