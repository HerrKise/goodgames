import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserPopup from "./UserProfile";
import {
    getEmployeeLogs,
    getEmployeeLogsList,
    getListOfUsers,
    getStaffLoadingStatus,
    getStaffProfileData,
    getUsersList,
    loadStaffProfile,
    staffLogout
} from "../store/reducers/staffSlice";
import UsersListShortData from "../components/UsersListShortData";

const StaffPage = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [active, setActive] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [userName, setUserName] = useState("");
    const [id, setId] = useState("");
    const [logging, setLogging] = useState(false);
    const [created, setCreated] = useState(false);
    const [deletedEmployees, setDeletedEmployees] = useState(false);
    const [deletedUsers, setDeletedUsers] = useState(false);
    const isLoading = useSelector(getStaffLoadingStatus());
    const usersList = useSelector(getListOfUsers());
    const staffData = useSelector(getStaffProfileData());
    const logs = useSelector(getEmployeeLogsList());
    console.log(staffData);

    useEffect(() => {
        dispatch(getEmployeeLogs());
    }, []);

    if (!isLoading && logs) {
        console.log(logs); //это логи самого стафа, за которого мы зареганы
    }

    if (!isLoading && staffData) {
        console.log(staffData);
    }

    const toggleLogging = () => {
        setLogging((prevState) => !prevState);
    };

    const toggleCreated = () => {
        setCreated((prevState) => !prevState);
    };

    const toggleDeletedEmployees = () => {
        setDeletedEmployees((prevState) => !prevState);
    };

    const toggleDeletedUsers = () => {
        setDeletedUsers((prevState) => !prevState);
    };

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
        console.log(active);
        dispatch(
            getUsersList({
                PageNumber: pageNumber,
                PageSize: pageSize,
                GetActive: active
            })
        );
    };

    const handleButtonClick = (id, name) => {
        setUserName(name);
        setId(id);
        setPopupVisible(true);
    };

    return (
        <section className="w-[100%] h-[100vh] bg-green-200">
            <nav className="flex items-center bg-fuchsia-300 justify-between px-5 py-5 mb-5">
                <h1 className="text-[30px]">Admin</h1>
                <NavLink
                    to="/staff/reg"
                    type="button"
                    className="rounded border-2 border-black py-[10px] px-[20px] hover:bg-green-400"
                >
                    Регистраця нового сотрудника
                </NavLink>
                <NavLink
                    to="/staff/login"
                    type="button"
                    className="rounded border-2 border-black py-[10px] px-[20px] hover:bg-green-400"
                >
                    Авторизация сотрудников
                </NavLink>
                <NavLink
                    to="/staff/create-event"
                    type="button"
                    className="rounded border-2 border-black py-[10px] px-[20px] hover:bg-green-400"
                >
                    Создать событие
                </NavLink>
                <button
                    onClick={handleLogOut}
                    className="rounded border-2 border-black py-[10px] px-[20px] hover:bg-green-400"
                >
                    Выход
                </button>
            </nav>

            <div>
                <div>
                    <form
                        onSubmit={handleGetUsersList}
                        className="flex flex-col items-center"
                    >
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
                        <label htmlFor="active">
                            Только активные пользователи
                        </label>
                        <input
                            id="active"
                            checked={active}
                            onChange={handleChangeActive}
                            type="checkbox"
                        />
                        <button type="submit">
                            Получить список пользователей
                        </button>
                    </form>
                    {!isLoading && usersList !== null && (
                        <UsersListShortData users={usersList} />
                    )}
                </div>
            </div>
            {!isLoading && (
                <div className="flex flex-row justify-around my-5">
                    <div>
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            name="created"
                            onClick={toggleCreated}
                        >
                            Created staff
                        </button>

                        <div
                            id="dropdownUsers"
                            className={`${
                                !created && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                        >
                            <ul
                                className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUsersButton"
                            >
                                {staffData.profile.created.map((person) => (
                                    <li key={person}>{person}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            name="deletedEmployees"
                            onClick={toggleDeletedEmployees}
                        >
                            Deleted employees
                        </button>

                        <div
                            id="dropdownUsers"
                            className={`${
                                !deletedEmployees && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                        >
                            <ul
                                className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUsersButton"
                            >
                                {staffData.profile.deletedEmployees.map(
                                    (person) => (
                                        <li key={person}>{person}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            name="deletedUsers"
                            onClick={toggleDeletedUsers}
                        >
                            Deleted users
                        </button>

                        <div
                            id="dropdownUsers"
                            className={`${
                                !deletedUsers && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                        >
                            <ul
                                className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUsersButton"
                            >
                                {staffData.profile.deletedUsers.map(
                                    (person) => (
                                        <li key={person}>{person}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            name="logging"
                            onClick={toggleLogging}
                        >
                            logging data
                        </button>

                        <div
                            id="dropdownUsers"
                            className={`${
                                !logging && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                        >
                            <ul
                                className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUsersButton"
                            >
                                {staffData.profile.logging.map((data) => (
                                    <li key={data}>{data}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default StaffPage;
