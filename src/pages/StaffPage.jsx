import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserPopup from "./UserProfile";
import {
    getUsersList,
    loadStaffProfile,
    staffLogout
} from "../store/reducers/staffSlice";
import StaffData from "../components/StaffData";

const StaffPage = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [active, setActive] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [userName, setUserName] = useState("");
    const [id, setId] = useState("");
    const [users, setUsers] = useState([
        {
            id: "id1",
            nickname: "nickname1"
        }, 
        {
            id: "id2",
            nickname: "nickname2"
        },
        {
            id: "id3",
            nickname: "nickname3"
        },
        {
            id: "id4",
            nickname: "nickname4"
        },
        {
            id: "id5",
            nickname: "nickname5"
        },
        {
            id: "id6",
            nickname: "nickname6"
        },
        {
            id: "id7",
            nickname: "nickname7"
        },
        {
            id: "id8",
            nickname: "nickname8"
        },
        {
            id: "id9",
            nickname: "nickname9"
        },
        {
            id: "id10",
            nickname: "nickname10"
        },

    ]);
    const loadedUsersSelector = useSelector(getUsersList())

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

    const handleButtonClick = (id, name) => {
        setUserName(name);
        setId(id);
        setPopupVisible(true);
    }

    return (
        <section className="w-[100%] h-[100vh] bg-green-200 flex flex-col items-center">
            <h1 className="mt-[50px] text-[30px]">Admin</h1>
            <NavLink to="/staff/reg">Регистраця нового сотрудника</NavLink>
            <NavLink to="/staff/login">Авторизация сотрудников</NavLink>
            <button onClick={handleLogOut}>Выход</button>
            <form onSubmit={handleGetUsersList} className="flex flex-col items-center">
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
            <ul className="bg-gray-200 mt-[30px]">
                {users.map(user => {
                    return(
                        <li className="border-[1px] border-black" key={user.id}>
                            <p>nickname: {user.nickname}</p>
                            <p>id: {user.id} </p>
                            <NavLink to={`/staff/user-profile/${user.id}`}>Больше информации</NavLink>
                        </li>
                    )
                })}
            </ul>
            <StaffData />
        </section>
    );
};

export default StaffPage;
