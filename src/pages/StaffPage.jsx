import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadStaffProfile, staffLogout } from "../store/reducers/staffSlice";

const StaffPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadStaffProfile());
    }, []);

    const handleLogOut = () => {
        dispatch(staffLogout());
    };
    return (
        <section className="w-[100%] h-[100vh] bg-green-200 flex flex-col items-center">
            <h1 className="mt-[50px] text-[30px]">Admin</h1>
            <NavLink to="/staff/reg">Регистраця нового сотрудника</NavLink>
            <NavLink to="/staff/login">Авторизация сотрудников</NavLink>
            <button onClick={handleLogOut}>Выход</button>
        </section>
    );
};

export default StaffPage;
