import {NavLink} from "react-router-dom";

const Main = () => {
    return(
        <section className="w-[100%] min-h-[100vh] bg-gray-800 text-white pt-[150px]">
            <div className="w-[1240px] mx-auto flex flex-col justify-around items-center" >
                <h1>Доступный функционал:</h1>
                <nav className="flex flex-col items-center gap-5">
                    <NavLink to="/login">Логин</NavLink>
                    <NavLink to="/reg">Регистрация</NavLink>
                    <NavLink to="/reset-password">Ресет пароля по почте</NavLink>
                    <NavLink to="/staff/login">Логин для персонала</NavLink>
                    <p>Доступно при логине :</p>
                    <NavLink to="/profile">Профиль</NavLink>
                    <NavLink to="/profile/settings">Настройки профиля</NavLink>
                    <p>Доступно для Owner'а:</p>
                    <NavLink to="/staff/reg">Регистрация сотрудника</NavLink>
                </nav>
            </div>

        </section>
    )
}

export default Main
