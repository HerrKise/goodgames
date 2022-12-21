import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
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

import logopic from "../assets/Main/logo.png";
import { Collapse } from "react-collapse";
import { useCallback } from "react";
import { getSelectedEvent, getStagesList } from "../store/reducers/eventsSlice";

const StaffPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    // const toggleCreated = () => {
    //     setCreated((prevState) => !prevState);
    // };

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

    const [isCreatedEventsOpen, setIsCreatedEventsOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isDeletedOpen, setIsDeletedOpen] = useState(false);
    const [isDeletedUsersOpen, setIsDeletedUsersOpen] = useState(false);
    const [isLogsOpen, setIsLogsOpen] = useState(false);

    const openCreatedEvents = useCallback(
        () => setIsCreatedEventsOpen(!isCreatedEventsOpen),
        [isCreatedEventsOpen]
    );

    const openUsers = useCallback(
        () => setIsUsersOpen(!isUsersOpen),
        [isUsersOpen]
    );

    const openDeleted = useCallback(
        () => setIsDeletedOpen(!isDeletedOpen),
        [isDeletedOpen]
    );

    const openDeletedUsers = useCallback(
        () => setIsDeletedUsersOpen(!isDeletedUsersOpen),
        [isDeletedUsersOpen]
    );

    const openLogs = useCallback(
        () => setIsLogsOpen(!isLogsOpen),
        [isLogsOpen]
    );

    const showEvent = (eventId) => {
        dispatch(
            getSelectedEvent({
                id: eventId,
                navigate: () => navigate("/staff/edit-event")
            })
        );
    };

    const showApplicationsList = (eventId) => {
        dispatch(
            getSelectedEvent({
                id: eventId,
                navigate: () => navigate("/staff/applications-event")
            })
        );
    };

    const showResultsForm = (eventId) => {
        dispatch(
            getStagesList({
                payload: eventId,
                navigate: () => navigate(`/staff/results-event/${eventId}`)
            })
        );
    };

    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink
                className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </NavLink>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Admin</h1>
                <nav className="py-5 space-y-3">
                    <NavLink
                        to="/staff/reg"
                        type="button"
                        className="bg-[#26262633] w-full rounded-xl p-4 text-center text-sm font-bold"
                    >
                        Регистраця нового сотрудника
                    </NavLink>
                    <NavLink
                        to="/staff/login"
                        type="button"
                        className="bg-[#26262633] w-full rounded-xl p-4 text-center text-sm font-bold"
                    >
                        Авторизация сотрудников
                    </NavLink>
                    <NavLink
                        to="/staff/create-event"
                        type="button"
                        className="bg-[#26262633] w-full rounded-xl p-4 text-center text-sm font-bold"
                    >
                        Создать событие
                    </NavLink>
                </nav>

                <div>
                    <div>
                        <form
                            onSubmit={handleGetUsersList}
                            className="space-y-3 p-4 bg-grey rounded-lg"
                        >
                            <div>
                                <label htmlFor="pagesize" className="p">
                                    Количество пользователей на странице
                                </label>
                                <input
                                    id="pagesize"
                                    value={pageSize}
                                    placeholder="Кол-во пользователей на странице"
                                    onChange={handlePageSizeChange}
                                    className="bg-darkgrey w-full py-4 px-7 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="pageNumber" className="p">
                                    Номер страницы
                                </label>
                                <input
                                    id="pageNumber"
                                    value={pageNumber}
                                    onChange={handlePageNumberChange}
                                    placeholder="Номер страницы"
                                    className="bg-darkgrey w-full py-4 px-7 rounded-lg"
                                />
                            </div>
                            <div className="flex items-center justify-start">
                                <input
                                    id="active"
                                    checked={active}
                                    onChange={handleChangeActive}
                                    placeholder="Только активные пользователи"
                                    className="mr-3"
                                    type="checkbox"
                                />
                                <label htmlFor="active" className="p">
                                    Только активные пользователи
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold"
                            >
                                Получить список пользователей
                            </button>
                            {!isLoading && usersList !== null && (
                                <UsersListShortData users={usersList} />
                            )}
                        </form>
                    </div>
                </div>

                <div className="space-y-3 py-5">
                    {!isLoading && staffData.profile.createdEvents && (
                        <div className="bg-[#26262633]">
                            <button
                                id="dropdownCreatedEventsButton"
                                data-dropdown-toggle="dropdownCreatedEvents"
                                data-dropdown-placement="bottom"
                                className="w-full rounded-lg bg-[#26262633] p-4 text-sm font-bold flex justify-between"
                                type="button"
                                name="createdEvents"
                                //onClick={toggleCreated}
                                onClick={openCreatedEvents}
                            >
                                <p>Созданные события</p>
                                <div
                                    className={
                                        isCreatedEventsOpen
                                            ? "duration-300 rotate-90"
                                            : "rotate-0 duration-300"
                                    }
                                    aria-expanded={isCreatedEventsOpen}
                                    type="button"
                                >
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </button>

                            <Collapse
                                id="dropdownUsers"
                                className={`${"hidden"} z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                                isOpened={isCreatedEventsOpen}
                            >
                                {staffData && (
                                    <ul
                                        className="p-4 space-y-2"
                                        aria-labelledby="dropdownUsersButton"
                                    >
                                        {staffData.profile.createdEvents.map(
                                            (event) => (
                                                <li
                                                    key={event.id}
                                                    className="text-sm"
                                                >
                                                    {event.title}
                                                    <button
                                                        onClick={() =>
                                                            showEvent(event.id)
                                                        }
                                                    >
                                                        Редактировать событие
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            showResultsForm(
                                                                event.id
                                                            )
                                                        }
                                                    >
                                                        Внести результаты группы
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            showApplicationsList(
                                                                event.id
                                                            )
                                                        }
                                                    >
                                                        Посмотреть список заявок
                                                        на участие
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </Collapse>
                        </div>
                    )}
                    <div className="bg-[#26262633]">
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="w-full rounded-lg bg-[#26262633] p-4 text-sm font-bold flex justify-between"
                            type="button"
                            name="created"
                            //onClick={toggleCreated}
                            onClick={openUsers}
                        >
                            <p>Созданные сотрудники</p>
                            <div
                                className={
                                    isUsersOpen
                                        ? "duration-300 rotate-90"
                                        : "rotate-0 duration-300"
                                }
                                aria-expanded={isUsersOpen}
                                type="button"
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </button>

                        <Collapse
                            id="dropdownUsers"
                            className="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700"
                            isOpened={isUsersOpen}
                        >
                            {staffData && (
                                <ul
                                    className="p-4 space-y-2"
                                    aria-labelledby="dropdownUsersButton"
                                >
                                    {staffData.profile.created.map((person) => (
                                        <li key={person.id} className="text-sm">
                                            {person.nickname}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Collapse>
                    </div>

                    <div className="bg-[#26262633]">
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="w-full rounded-lg bg-[#26262633] p-4 text-sm font-bold flex justify-between"
                            type="button"
                            name="deletedEmployees"
                            //onClick={toggleDeletedEmployees}
                            onClick={openDeleted}
                        >
                            <p>Удаленные сотрудники</p>
                            <div
                                className={
                                    isDeletedOpen
                                        ? "duration-300 rotate-90"
                                        : "rotate-0 duration-300"
                                }
                                aria-expanded={isDeletedOpen}
                                type="button"
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </button>

                        <Collapse
                            id="dropdownUsers"
                            className={`${
                                !deletedEmployees && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                            isOpened={isDeletedOpen}
                        >
                            {staffData && (
                                <ul
                                    className="p-4 space-y-2"
                                    aria-labelledby="dropdownUsersButton"
                                >
                                    {staffData.profile.deletedEmployees.map(
                                        (person) => (
                                            <li
                                                key={person}
                                                className="text-sm"
                                            >
                                                {person}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </Collapse>
                    </div>
                    <div className="bg-[#26262633]">
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="w-full rounded-lg bg-[#26262633] p-4 text-sm font-bold flex justify-between"
                            type="button"
                            name="deletedUsers"
                            //onClick={toggleDeletedUsers}
                            onClick={openDeletedUsers}
                        >
                            <p>Удаленные пользователи</p>
                            <div
                                className={
                                    isDeletedUsersOpen
                                        ? "duration-300 rotate-90"
                                        : "rotate-0 duration-300"
                                }
                                aria-expanded={isDeletedUsersOpen}
                                type="button"
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </button>

                        <Collapse
                            id="dropdownUsers"
                            className={`${
                                !deletedUsers && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                            isOpened={isDeletedUsersOpen}
                        >
                            {staffData && (
                                <ul
                                    className="p-4 space-y-2"
                                    aria-labelledby="dropdownUsersButton"
                                >
                                    {staffData.profile.deletedUsers.map(
                                        (person) => (
                                            <li
                                                key={person}
                                                className="text-sm"
                                            >
                                                {person}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </Collapse>
                    </div>
                    <div className="bg-[#26262633]">
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            className="w-full rounded-lg bg-[#26262633] p-4 text-sm font-bold flex justify-between"
                            type="button"
                            name="logging"
                            //onClick={toggleLogging}
                            onClick={openLogs}
                        >
                            <p>Показать логи</p>
                            <div
                                className={
                                    isLogsOpen
                                        ? "duration-300 rotate-90"
                                        : "rotate-0 duration-300"
                                }
                                aria-expanded={isLogsOpen}
                                type="button"
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </button>

                        <Collapse
                            id="dropdownUsers"
                            className={`${
                                !logging && "hidden"
                            } z-10 w-60 bg-white rounded shadow dark:bg-gray-700`}
                            isOpened={isLogsOpen}
                        >
                            {staffData && (
                                <ul
                                    className="p-4 space-y-2"
                                    aria-labelledby="dropdownUsersButton"
                                >
                                    {staffData.profile.logging.map((data) => (
                                        <li key={data} className="text-sm">
                                            {data}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Collapse>
                    </div>
                </div>

                <button
                    className="bg-grey w-full rounded-xl p-4 flex items-center justify-center"
                    onClick={handleLogOut}
                >
                    <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.37671 18.476H16.6267C17.5918 18.476 18.3767 17.6911 18.3767 16.726V4.47595C18.3767 3.51083 17.5918 2.72595 16.6267 2.72595H4.37671C3.41158 2.72595 2.62671 3.51083 2.62671 4.47595V9.72683H8.74996V6.22595L14 10.601L8.74996 14.976V11.4768H2.62671V16.726C2.62671 17.6911 3.41158 18.476 4.37671 18.476Z"
                            fill="white"
                        />
                    </svg>
                    <h3 className="h3 ml-2">Выйти из профиля</h3>
                </button>
            </main>
        </section>
    );
};

export default StaffPage;
