import {useState} from "react";
import {useDispatch} from "react-redux";
import {register} from "../store/reducers/staffSlice.js";

const StaffRegistration = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({login,  password, role});
        dispatch(
            register(
                {
                    email: email,
                    role: role,
                    password: password,
                    login: login,
                }
            )
        )

    }

    return (
        <section className="w-[100%] h-[100vh] bg-purple-300">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <form className="flex flex-col items-center justify-between mt-[150px] w-[700px] h-[400px]" onSubmit={handleSubmit}>
                    <h2>Создание профиля для сотрудника</h2>
                    <div className=" flex flex-col items-center">
                        <label>Логин сотрудника</label>
                        <input type="text" className="w-[400px]" value={login || ""} onChange={handleLoginChange}/>
                    </div>
                    <div className=" flex flex-col items-center">
                        <label>Пароль сотрудника</label>
                        <input type="password" className="w-[400px]" value={password || ""} onChange={handlePasswordChange}/>
                    </div>
                    <div className=" flex flex-col items-center">
                        <label>Роль сотрудника</label>
                        <select className="w-[400px]" onChange={(e)=>{
                            setRole(e.target.value)

                        }}>
                            <option>Должность</option>
                            <option>Org</option>
                            <option>Moderator</option>
                            <option>Redactor</option>
                        </select>
                    </div>
                    <button type="submit" className="w-[300px] h-[30px] rounded-[20px] bg-orange-500">Создать профиль</button>
                </form>
            </div>
        </section>
    )
};

export default StaffRegistration;
