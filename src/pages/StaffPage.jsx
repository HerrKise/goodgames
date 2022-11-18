import {NavLink} from "react-router-dom";

const StaffPage = () => {
    return (
        <section className="w-[100%] h-[100vh] bg-green-200 flex flex-col items-center">
            <h1 className="mt-[50px] text-[30px]">Admin</h1>
            <NavLink to="/staff/reg">Регистраця нового сотрудника</NavLink>
            <NavLink to="/staff/login">Авторизация сотрудников</NavLink>
        </section>
    )
};

export default StaffPage;
