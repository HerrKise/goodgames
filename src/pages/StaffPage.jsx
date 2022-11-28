import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    getUsersList,
    loadStaffProfile,
    staffLogout
} from "../store/reducers/staffSlice";

const StaffPage = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        console.log(pageSize);
    }, [pageSize]);

    useEffect(() => {
        dispatch(loadStaffProfile());
    }, []);

    const handleLogOut = () => {
        dispatch(staffLogout());
    };

    const handlePageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
    };

    const handlePageNumberChange = (e) => {
        setPageNumber(Number(e.target.value));
    };

    const handleChangeActive = (e) => {
        console.log(e.target.value);
        setActive((prevState) => !prevState);
    };

    const handleGetUsersList = (e) => {
        e.preventDefault();
        dispatch(
            getUsersList({
                PageNumer: pageNumber,
                PageSize: pageSize,
                GetActive: active
            })
        );
    };

    return (
        <section className="w-[100%] h-[100vh] bg-green-200 flex flex-col items-center">
            <h1 className="mt-[50px] text-[30px]">Admin</h1>
            <NavLink to="/staff/reg">Регистраця нового сотрудника</NavLink>
            <NavLink to="/staff/login">Авторизация сотрудников</NavLink>
            <button onClick={handleLogOut}>Выход</button>
            <form onSubmit={handleGetUsersList}>
                <label htmlFor="pagesize">
                    Количество пользователей на странице
                </label>
                <input
                    id="pagesize"
                    value={pageSize}
                    onChange={handlePageSizeChange}
                />
                <label htmlFor="pageNumber">Номер страницы</label>
                <input
                    id="pageNumber"
                    value={pageNumber}
                    onChange={handlePageNumberChange}
                />
                <label htmlFor="active">Активные пользователи</label>
                <input
                    id="active"
                    checked={active}
                    onChange={handleChangeActive}
                    type="checkbox"
                />
                <button type="submit">Получить список пользователей</button>
            </form>
        </section>
    );
};

export default StaffPage;
