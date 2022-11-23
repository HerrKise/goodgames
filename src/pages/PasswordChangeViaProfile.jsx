import { useState } from "react";

const PasswordChangeViaProfile = () => {
    const dispatch = useDispatch();
    const [password, setpassword] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [confirmnewpassword, setconfirmnewpassword] = useState("");

    const changepassword = (e) => {
        setpassword(e.target.value);
    };
    const changenewpassword = (e) => {
        setnewpassword(e.target.value);
    };
    const changeconfirmnewpassword = (e) => {
        setconfirmnewpassword(e.target.value);
    };

    const handleChangePassword = () => {
        dispatch(
            updatePassword({
                currentPassword: password,
                newPassword: newpassword,
                confirmNewPassword: confirmnewpassword
            })
        );
    };

    return (
        <div>
            <input value={password} onChange={changepassword} />
            <input value={newpassword} onChange={changenewpassword} />
            <input
                value={confirmnewpassword}
                onChange={changeconfirmnewpassword}
            />
            <button onClick={handleChangePassword}>Поменять пароль</button>
        </div>
    );
};

export default PasswordChangeViaProfile;
