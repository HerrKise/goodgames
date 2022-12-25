import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
import { ProfilePromo } from "../components/ProfilePage/ProfilePromo";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
    getUserLoadingStatus,
    getUserProfileData,
    loadUserProfile,
    userLogout,
    resendEmailConfirmation
} from "../store/reducers/userSlice.js";
import localStorageService from "../services/localStorage.service.js";
import { useEffect, useState } from "react";
import { API_URL } from "../http/index";

export const ProfilePage = () => {
    /* const user = null; */
    const userId = localStorageService.getUserId();
    console.log(userId);
    const dispatch = useDispatch();
    const user = useSelector(getUserProfileData());
    const isLoading = useSelector(getUserLoadingStatus());

    console.log(isLoading);

    useEffect(() => {
        dispatch(loadUserProfile());
    }, []);

    const handleLogOut = () => {
        dispatch(userLogout());
    };
    if (!isLoading && user) {
        console.log(!isLoading, user);
    }

    return (
        isLoading ? 
        <div className=" w-full aspect-square grid place-items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[50px] h-[50px] fill-white animate-spin"
            >
            <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
            <path
                fillRule="evenodd"
                d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z"
                clipRule="evenodd"
            />
            </svg>
        </div>
        :
        <div className="bg-darkgrey min-h-[100vh]">
            <Header />
            <main className="text-white pb-20 md:pb-40">
                {!isLoading && user && (
                    <ProfilePromo user={user.profile} isLoading={isLoading} />
                )}
                <ul className="wrap space-y-3 md:grid grid-cols-2 md:gap-4 md:space-y-0 md:mt-8">
                    {/* <li className={user.premium ? "bg-yellow text-darkgrey w-full rounded-xl p-4" : "bg-[#262626] w-full rounded-xl p-4"}>
                        <Link className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={user.premium ? "fill-black" : "fill-white"} fillRule="evenodd" clipRule="evenodd" d="M8.98996 3.27591C9.3633 2.37841 10.6366 2.37841 11.01 3.27591L12.745 7.44841L17.2483 7.80924C18.2183 7.88674 18.6116 9.09674 17.8725 9.73007L14.4416 12.6692L15.4891 17.0634C15.715 18.0101 14.6858 18.7576 13.8558 18.2509L9.99996 15.8959L6.14413 18.2509C5.31413 18.7576 4.28496 18.0092 4.5108 17.0634L5.55829 12.6692L2.12746 9.73007C1.38829 9.09674 1.78163 7.88674 2.75163 7.80924L7.25496 7.44841L8.98996 3.27674V3.27591Z" fill="black"/>
                                </svg>
                                <h3 className="h3">PREMIUM</h3>
                            </div>
                            {user.premium 
                                ?   <div className="flex items-center space-x-1">
                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.13435 1.09786C9.22586 1.1488 9.29768 1.22891 9.33834 1.32543C9.37901 1.42194 9.38618 1.52929 9.35872 1.63036L8.11372 6.19474H12.6562C12.7476 6.19474 12.8369 6.22144 12.9133 6.27155C12.9897 6.32166 13.0498 6.39299 13.0862 6.47678C13.1225 6.56057 13.1336 6.65317 13.1181 6.74319C13.1026 6.83321 13.0611 6.91673 12.9987 6.98349L6.43622 14.0147C6.36474 14.0915 6.26959 14.142 6.16599 14.1583C6.06238 14.1746 5.95631 14.1557 5.86473 14.1046C5.77315 14.0535 5.70136 13.9731 5.66084 13.8764C5.62032 13.7796 5.61341 13.6721 5.64122 13.571L6.88622 9.00724H2.34372C2.25237 9.00723 2.16301 8.98053 2.08663 8.93042C2.01025 8.88032 1.95017 8.80898 1.91379 8.72519C1.8774 8.6414 1.86629 8.5488 1.88183 8.45878C1.89736 8.36876 1.93886 8.28524 2.00122 8.21849L8.56372 1.18724C8.6352 1.11076 8.73022 1.06042 8.83363 1.04422C8.93705 1.02802 9.04291 1.04691 9.13435 1.09786Z" fill="black"/>
                                        </svg>
                                        <p className="text-sm text-darkgrey font-bold">Активный</p>
                                    </div>
                                :   <div className="flex items-center space-x-1">
                                        <p className="text-sm text-white font-bold">Нективен</p>
                                    </div>
                            }
                        </Link>
                    </li> */}
                    <li className="bg-[#26262633] w-full rounded-xl p-4">
                        <Link
                            className="flex items-center space-x-3"
                            to="/profilepage-settings"
                        >
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.17 9.27347C14.285 9.63597 13.99 9.97513 13.61 9.97513H10.7225C10.6127 9.9752 10.5049 9.94636 10.4098 9.8915C10.3147 9.83664 10.2357 9.7577 10.1808 9.66263L8.7375 7.16263C8.54667 6.83263 8.69334 6.4068 9.065 6.32597C10.1302 6.0931 11.2439 6.26621 12.1881 6.81139C13.1324 7.35657 13.8391 8.23456 14.17 9.27347ZM6.76667 7.6543C7.0225 7.37263 7.465 7.45847 7.655 7.78763L9.09834 10.2876C9.15319 10.3826 9.18207 10.4904 9.18207 10.6001C9.18207 10.7098 9.15319 10.8176 9.09834 10.9126L7.655 13.4135C7.46417 13.7435 7.02167 13.8285 6.76584 13.5468C6.03062 12.742 5.62359 11.691 5.625 10.601C5.625 9.46597 6.0575 8.4318 6.76667 7.6543ZM9.065 14.876C8.6925 14.7951 8.54584 14.3693 8.73667 14.0401L10.1808 11.5376C10.2357 11.4426 10.3147 11.3636 10.4098 11.3088C10.5049 11.2539 10.6127 11.2251 10.7225 11.2251H13.61C13.9908 11.2251 14.285 11.5651 14.17 11.9276C13.8393 12.9667 13.1326 13.8449 12.1884 14.3902C11.2441 14.9356 10.1303 15.1088 9.065 14.876Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.5 11.2259C17.6658 11.2259 17.8248 11.1601 17.942 11.0429C18.0592 10.9257 18.125 10.7667 18.125 10.6009C18.125 10.4352 18.0592 10.2762 17.942 10.159C17.8248 10.0418 17.6658 9.97595 17.5 9.97595H16.8475C16.8134 9.59414 16.7474 9.21587 16.65 8.84511L17.2617 8.62261C17.3388 8.59454 17.4097 8.55155 17.4702 8.49609C17.5308 8.44064 17.5798 8.3738 17.6145 8.29939C17.6492 8.22499 17.6689 8.14448 17.6725 8.06246C17.6761 7.98044 17.6635 7.89852 17.6354 7.82136C17.6074 7.74421 17.5644 7.67334 17.5089 7.61281C17.4535 7.55227 17.3866 7.50325 17.3122 7.46854C17.2378 7.43384 17.1573 7.41413 17.0753 7.41054C16.9933 7.40694 16.9113 7.41954 16.8342 7.44761L16.2217 7.67095C16.0583 7.32469 15.8662 6.99269 15.6475 6.67845L16.1475 6.25845C16.2118 6.20614 16.265 6.14158 16.3041 6.06852C16.3432 5.99545 16.3674 5.91535 16.3752 5.83286C16.3831 5.75037 16.3744 5.66714 16.3498 5.58802C16.3252 5.5089 16.2851 5.43546 16.2318 5.37198C16.1786 5.3085 16.1132 5.25624 16.0396 5.21825C15.9659 5.18026 15.8855 5.15729 15.8029 5.15068C15.7203 5.14407 15.6372 5.15395 15.5584 5.17975C15.4797 5.20555 15.4069 5.24674 15.3442 5.30095L14.8442 5.72095C14.5723 5.45122 14.2785 5.20454 13.9659 4.98345L14.2917 4.41845C14.3334 4.34734 14.3606 4.26869 14.3717 4.18703C14.3829 4.10536 14.3778 4.02229 14.3568 3.94261C14.3357 3.86292 14.2991 3.78819 14.249 3.72271C14.1989 3.65723 14.1364 3.60231 14.065 3.56109C13.9936 3.51988 13.9148 3.49319 13.8331 3.48257C13.7513 3.47195 13.6683 3.47759 13.5888 3.49919C13.5092 3.52079 13.4347 3.5579 13.3696 3.6084C13.3044 3.65891 13.2499 3.72179 13.2092 3.79345L12.8842 4.35761C12.5361 4.19669 12.1751 4.06539 11.805 3.96511L11.9184 3.32345C11.9435 3.16177 11.9043 2.99666 11.8091 2.86357C11.7139 2.73049 11.5703 2.64006 11.4092 2.61169C11.248 2.58332 11.0822 2.61928 10.9472 2.71185C10.8123 2.80442 10.7191 2.94622 10.6875 3.10678L10.5742 3.74845C10.1923 3.71691 9.80854 3.71691 9.42669 3.74845L9.31335 3.10678C9.30056 3.02466 9.27151 2.94592 9.22792 2.87516C9.18432 2.8044 9.12705 2.74305 9.05946 2.69469C8.99186 2.64633 8.9153 2.61194 8.83425 2.59353C8.75321 2.57512 8.6693 2.57306 8.58745 2.58747C8.5056 2.60188 8.42744 2.63247 8.35755 2.67744C8.28767 2.72242 8.22745 2.78089 8.18044 2.84942C8.13342 2.91796 8.10054 2.99518 8.08373 3.07657C8.06691 3.15797 8.0665 3.24189 8.08252 3.32345L8.19585 3.96511C7.82252 4.06595 7.46252 4.19845 7.11752 4.35678L6.79252 3.79345C6.75148 3.72231 6.69684 3.65996 6.6317 3.60995C6.56657 3.55993 6.49222 3.52324 6.4129 3.50196C6.33358 3.48068 6.25085 3.47523 6.16943 3.48592C6.08801 3.49662 6.00949 3.52324 5.93835 3.56428C5.86722 3.60532 5.80487 3.65997 5.75486 3.7251C5.70484 3.79024 5.66815 3.86458 5.64687 3.9439C5.62559 4.02322 5.62014 4.10595 5.63083 4.18737C5.64152 4.26879 5.66815 4.34731 5.70919 4.41845L6.03585 4.98345C5.72314 5.20451 5.42935 5.45119 5.15752 5.72095L4.65752 5.30095C4.53055 5.19431 4.36641 5.14248 4.20123 5.15685C4.03604 5.17123 3.88333 5.25064 3.77669 5.37761C3.67005 5.50459 3.61822 5.66872 3.63259 5.83391C3.64697 5.9991 3.72638 6.15181 3.85335 6.25845L4.35335 6.67761C4.1346 6.99213 3.94254 7.3244 3.77919 7.67095L3.16669 7.44845C3.08954 7.42038 3.00761 7.40778 2.92559 7.41137C2.84357 7.41496 2.76306 7.43467 2.68866 7.46938C2.61425 7.50408 2.54742 7.5531 2.49196 7.61364C2.4365 7.67418 2.39351 7.74505 2.36544 7.8222C2.33737 7.89935 2.32477 7.98127 2.32836 8.06329C2.33195 8.14532 2.35166 8.22583 2.38637 8.30023C2.45646 8.45049 2.58337 8.56676 2.73919 8.62345L3.35169 8.84595C3.25415 9.21613 3.1878 9.59384 3.15335 9.97511H2.50085C2.33509 9.97511 2.17612 10.041 2.05891 10.1582C1.9417 10.2754 1.87585 10.4344 1.87585 10.6001C1.87585 10.7659 1.9417 10.9248 2.05891 11.0421C2.17612 11.1593 2.33509 11.2251 2.50085 11.2251H3.15335C3.18835 11.6118 3.25502 11.9893 3.35169 12.3551L2.73919 12.5784C2.66204 12.6065 2.59117 12.6495 2.53063 12.705C2.4701 12.7604 2.42107 12.8273 2.38637 12.9017C2.35166 12.9761 2.33195 13.0566 2.32836 13.1386C2.32477 13.2206 2.33737 13.3025 2.36544 13.3797C2.39351 13.4568 2.4365 13.5277 2.49196 13.5883C2.54742 13.6488 2.61425 13.6978 2.68866 13.7325C2.76306 13.7672 2.84357 13.7869 2.92559 13.7905C3.00761 13.7941 3.08954 13.7815 3.16669 13.7534L3.77919 13.5301C3.94335 13.8776 4.13585 14.2101 4.35419 14.5234L3.85419 14.9434C3.78822 14.9951 3.73333 15.0596 3.69277 15.1329C3.65221 15.2062 3.62681 15.287 3.61809 15.3703C3.60937 15.4537 3.6175 15.5379 3.64199 15.6181C3.66649 15.6982 3.70686 15.7726 3.76069 15.8369C3.81452 15.9011 3.88072 15.9538 3.95535 15.992C4.02998 16.0301 4.11151 16.0528 4.1951 16.0588C4.2787 16.0648 4.36264 16.0539 4.44193 16.0268C4.52123 15.9996 4.59426 15.9569 4.65669 15.9009L5.15752 15.4801C5.42919 15.7493 5.72335 15.9968 6.03585 16.2176L5.70919 16.7843C5.66815 16.8554 5.64152 16.9339 5.63083 17.0154C5.62014 17.0968 5.62559 17.1795 5.64687 17.2588C5.66815 17.3381 5.70484 17.4125 5.75486 17.4776C5.80487 17.5428 5.86722 17.5974 5.93835 17.6384C6.00949 17.6795 6.08801 17.7061 6.16943 17.7168C6.25085 17.7275 6.33358 17.722 6.4129 17.7008C6.49222 17.6795 6.56657 17.6428 6.6317 17.5928C6.69684 17.5428 6.75148 17.4804 6.79252 17.4093L7.11752 16.8434C7.46252 17.0034 7.82335 17.1351 8.19585 17.2359L8.08252 17.8784C8.0665 17.96 8.06691 18.0439 8.08373 18.1253C8.10054 18.2067 8.13342 18.2839 8.18044 18.3525C8.22745 18.421 8.28767 18.4795 8.35755 18.5244C8.42744 18.5694 8.5056 18.6 8.58745 18.6144C8.6693 18.6288 8.75321 18.6268 8.83425 18.6084C8.9153 18.59 8.99186 18.5556 9.05946 18.5072C9.12705 18.4588 9.18432 18.3975 9.22792 18.3267C9.27151 18.256 9.30056 18.1772 9.31335 18.0951L9.42752 17.4518C9.8091 17.4832 10.1926 17.4832 10.5742 17.4518L10.6875 18.0959C10.7003 18.1781 10.7294 18.2568 10.773 18.3276C10.8166 18.3983 10.8738 18.4597 10.9414 18.508C11.009 18.5564 11.0856 18.5908 11.1666 18.6092C11.2477 18.6276 11.3316 18.6297 11.4134 18.6153C11.4953 18.6009 11.5734 18.5703 11.6433 18.5253C11.7132 18.4803 11.7734 18.4218 11.8204 18.3533C11.8675 18.2848 11.9003 18.2075 11.9171 18.1262C11.934 18.0448 11.9344 17.9608 11.9184 17.8793L11.805 17.2359C12.1748 17.1359 12.5355 17.0049 12.8834 16.8443L13.2092 17.4084C13.2502 17.4796 13.3049 17.5419 13.37 17.5919C13.4351 17.642 13.5095 17.6787 13.5888 17.6999C13.6681 17.7212 13.7509 17.7267 13.8323 17.716C13.9137 17.7053 13.9922 17.6787 14.0634 17.6376C14.1345 17.5966 14.1968 17.5419 14.2469 17.4768C14.2969 17.4117 14.3336 17.3373 14.3548 17.258C14.3761 17.1787 14.3816 17.0959 14.3709 17.0145C14.3602 16.9331 14.3336 16.8546 14.2925 16.7834L13.965 16.2176C14.2778 15.9966 14.5715 15.7499 14.8434 15.4801L15.3442 15.9001C15.4071 15.9529 15.4798 15.9927 15.5581 16.0173C15.6365 16.042 15.7189 16.051 15.8007 16.0438C15.8824 16.0366 15.962 16.0134 16.0348 15.9754C16.1076 15.9375 16.1723 15.8855 16.225 15.8226C16.2778 15.7597 16.3176 15.687 16.3423 15.6087C16.3669 15.5303 16.3759 15.4479 16.3687 15.3661C16.3615 15.2844 16.3383 15.2048 16.3003 15.132C16.2624 15.0592 16.2104 14.9945 16.1475 14.9418L15.6475 14.5226C15.8665 14.2084 16.0589 13.8764 16.2225 13.5301L16.835 13.7534C16.9122 13.7815 16.9941 13.794 17.0761 13.7904C17.1581 13.7867 17.2386 13.767 17.3129 13.7322C17.3873 13.6975 17.4541 13.6484 17.5095 13.5879C17.5649 13.5273 17.6078 13.4564 17.6359 13.3793C17.6639 13.3021 17.6764 13.2202 17.6728 13.1382C17.6691 13.0562 17.6494 12.9757 17.6146 12.9014C17.5799 12.827 17.5308 12.7602 17.4703 12.7048C17.4097 12.6494 17.3388 12.6065 17.2617 12.5784L16.65 12.3551C16.7459 11.9901 16.8125 11.6118 16.8475 11.2251H17.5009L17.5 11.2259ZM15.2859 8.67595C15.059 8.05154 14.7233 7.4723 14.2942 6.96511C13.8662 6.46011 13.3528 6.03419 12.7775 5.70678C11.9312 5.22529 10.9737 4.97335 10 4.97595C9.65765 4.97588 9.31597 5.00684 8.97919 5.06845C8.3485 5.18394 7.74242 5.4072 7.18752 5.72845C6.05592 6.38392 5.18656 7.41143 4.72752 8.63595C4.71945 8.66411 4.70942 8.69168 4.69752 8.71845C4.48362 9.32298 4.37483 9.95969 4.37585 10.6009C4.3748 11.5854 4.63254 12.5528 5.12324 13.4062C5.61394 14.2597 6.32036 14.9691 7.17169 15.4634L7.18002 15.4684L7.18835 15.4726C7.75631 15.8015 8.37775 16.0277 9.02419 16.1409C9.03002 16.1409 9.03586 16.1426 9.04169 16.1443C9.6762 16.2533 10.3247 16.2533 10.9592 16.1443L10.9775 16.1409C11.6319 16.0264 12.2606 15.7962 12.8342 15.4609C13.3905 15.1357 13.8871 14.7178 14.3025 14.2251L14.31 14.2168L14.3175 14.2068C14.7446 13.6962 15.0775 13.1138 15.3009 12.4868C15.5117 11.8968 15.6259 11.2618 15.6259 10.6001C15.6257 9.94407 15.5106 9.29311 15.2859 8.67678V8.67595Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="h3">Настройки</h3>
                        </Link>
                    </li>
                    <li className="bg-[#26262633] w-full rounded-xl p-4">
                        <Link
                            className="flex items-center space-x-3"
                            to="/profilepage/teams"
                        >
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.875 6.22595C6.875 5.39715 7.20424 4.60229 7.79029 4.01624C8.37634 3.43019 9.1712 3.10095 10 3.10095C10.8288 3.10095 11.6237 3.43019 12.2097 4.01624C12.7958 4.60229 13.125 5.39715 13.125 6.22595C13.125 7.05475 12.7958 7.84961 12.2097 8.43566C11.6237 9.02171 10.8288 9.35095 10 9.35095C9.1712 9.35095 8.37634 9.02171 7.79029 8.43566C7.20424 7.84961 6.875 7.05475 6.875 6.22595ZM13.125 8.72595C13.125 8.06291 13.3884 7.42703 13.8572 6.95819C14.3261 6.48934 14.962 6.22595 15.625 6.22595C16.288 6.22595 16.9239 6.48934 17.3928 6.95819C17.8616 7.42703 18.125 8.06291 18.125 8.72595C18.125 9.38899 17.8616 10.0249 17.3928 10.4937C16.9239 10.9626 16.288 11.226 15.625 11.226C14.962 11.226 14.3261 10.9626 13.8572 10.4937C13.3884 10.0249 13.125 9.38899 13.125 8.72595ZM1.875 8.72595C1.875 8.06291 2.13839 7.42703 2.60723 6.95819C3.07607 6.48934 3.71196 6.22595 4.375 6.22595C5.03804 6.22595 5.67393 6.48934 6.14277 6.95819C6.61161 7.42703 6.875 8.06291 6.875 8.72595C6.875 9.38899 6.61161 10.0249 6.14277 10.4937C5.67393 10.9626 5.03804 11.226 4.375 11.226C3.71196 11.226 3.07607 10.9626 2.60723 10.4937C2.13839 10.0249 1.875 9.38899 1.875 8.72595ZM5.25833 13.1985C5.76662 12.4018 6.46757 11.7462 7.29635 11.2922C8.12513 10.8381 9.05501 10.6004 10 10.601C10.7915 10.6002 11.5743 10.7667 12.297 11.0894C13.0197 11.4122 13.6661 11.8839 14.1939 12.4738C14.7217 13.0636 15.119 13.7583 15.3597 14.5123C15.6004 15.2664 15.6792 16.0627 15.5908 16.8493C15.58 16.947 15.5463 17.0408 15.4925 17.123C15.4386 17.2053 15.3661 17.2737 15.2808 17.3226C13.6738 18.2447 11.8528 18.7286 10 18.726C8.07917 18.726 6.275 18.216 4.71917 17.3226C4.63391 17.2737 4.5614 17.2053 4.50754 17.123C4.45367 17.0408 4.41997 16.947 4.40917 16.8493C4.26921 15.5715 4.56872 14.2841 5.25833 13.1993V13.1985Z"
                                    fill="white"
                                />
                                <path
                                    d="M4.23495 12.4792C3.41307 13.7479 3.03016 15.2512 3.14495 16.7584C2.64453 16.6825 2.15237 16.5598 1.67495 16.3917L1.57911 16.3584C1.49361 16.3281 1.41874 16.2736 1.36357 16.2016C1.3084 16.1295 1.2753 16.043 1.26828 15.9526L1.25995 15.8517C1.22628 15.4334 1.27724 15.0125 1.40978 14.6143C1.54232 14.216 1.75373 13.8486 2.03138 13.5338C2.30904 13.2191 2.64725 12.9635 3.02584 12.7823C3.40444 12.6011 3.81565 12.498 4.23495 12.4792ZM16.8549 16.7584C16.9697 15.2512 16.5868 13.7479 15.7649 12.4792C16.1842 12.498 16.5955 12.6011 16.974 12.7823C17.3526 12.9635 17.6909 13.2191 17.9685 13.5338C18.2462 13.8486 18.4576 14.216 18.5901 14.6143C18.7226 15.0125 18.7736 15.4334 18.7399 15.8517L18.7316 15.9526C18.7244 16.0429 18.6913 16.1292 18.6361 16.2011C18.5809 16.2729 18.5062 16.3273 18.4208 16.3576L18.3249 16.3909C17.8524 16.5576 17.3616 16.6817 16.8549 16.7584Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="h3">Мои команды</h3>
                        </Link>
                    </li>
                    <li className="bg-[#26262633] w-full rounded-xl p-4">
                        <Link
                            className="flex items-center space-x-3"
                            to="/matchespage"
                        >
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.30498 2.7851V3.5001C3.44248 3.62343 2.58915 3.7751 1.74582 3.9526C1.58799 3.98604 1.44921 4.07921 1.35851 4.21263C1.2678 4.34605 1.2322 4.50937 1.25915 4.66843C1.46962 5.90512 2.08728 7.03603 3.014 7.88153C3.94073 8.72703 5.1234 9.23864 6.37415 9.3351C7.04002 9.87929 7.82212 10.2631 8.65998 10.4568C8.58036 11.4026 8.26116 12.3126 7.73248 13.1009H7.11665C6.25332 13.1009 5.55415 13.8009 5.55415 14.6634V16.8509H4.92915C4.43187 16.8509 3.95496 17.0485 3.60333 17.4001C3.25169 17.7517 3.05415 18.2287 3.05415 18.7259C3.05415 19.0709 3.33415 19.3509 3.67915 19.3509H16.1792C16.3449 19.3509 16.5039 19.2851 16.6211 19.1679C16.7383 19.0507 16.8042 18.8917 16.8042 18.7259C16.8042 18.2287 16.6066 17.7517 16.255 17.4001C15.9033 17.0485 15.4264 16.8509 14.9292 16.8509H14.3042V14.6634C14.3042 13.8001 13.6041 13.1009 12.7417 13.1009H12.1258C11.5974 12.3125 11.2785 11.4025 11.1992 10.4568C12.0371 10.2628 12.8192 9.87876 13.485 9.33427C14.7359 9.23798 15.9187 8.72645 16.8456 7.88093C17.7725 7.03542 18.3903 5.90442 18.6008 4.6676C18.6275 4.50855 18.5917 4.34533 18.5008 4.21208C18.41 4.07883 18.2711 3.98586 18.1133 3.9526C17.2658 3.77356 16.4125 3.62265 15.555 3.5001V2.78427C15.5549 2.63183 15.4991 2.48468 15.3982 2.37049C15.2972 2.25631 15.1579 2.18296 15.0067 2.16427C13.3223 1.95458 11.6265 1.84966 9.92915 1.8501C8.20998 1.8501 6.51582 1.95677 4.85165 2.16427C4.70052 2.18315 4.56148 2.25658 4.46067 2.37074C4.35985 2.48491 4.30419 2.63196 4.30415 2.78427L4.30498 2.7851ZM4.30498 4.97593C4.30498 5.9726 4.56498 6.90927 5.01915 7.72093C4.45587 7.46834 3.95221 7.09975 3.5411 6.63924C3.12998 6.17872 2.82065 5.63665 2.63332 5.04843C3.18834 4.94073 3.7457 4.84543 4.30498 4.7626V4.97593ZM15.555 4.97593V4.7626C16.1167 4.84593 16.6742 4.94093 17.2267 5.04843C17.0394 5.63667 16.7301 6.17877 16.3189 6.63929C15.9078 7.09981 15.4041 7.46839 14.8408 7.72093C15.3105 6.88238 15.5564 5.93706 15.555 4.97593Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="h3">Мои матчи</h3>
                        </Link>
                    </li>
                    <li className="bg-[#26262633] w-full rounded-xl p-4 opacity-40">
                        <Link className="flex items-center space-x-3">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 6.85095C9.50272 6.85095 9.02581 7.0485 8.67417 7.40013C8.32254 7.75176 8.125 8.22867 8.125 8.72595C8.125 9.22323 8.32254 9.70015 8.67417 10.0518C9.02581 10.4034 9.50272 10.601 10 10.601C10.4973 10.601 10.9742 10.4034 11.3258 10.0518C11.6775 9.70015 11.875 9.22323 11.875 8.72595C11.875 8.22867 11.6775 7.75176 11.3258 7.40013C10.9742 7.0485 10.4973 6.85095 10 6.85095Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.25 4.66345C1.25 3.80012 1.95 3.10095 2.8125 3.10095H17.1875C18.05 3.10095 18.75 3.80095 18.75 4.66345V12.7885C18.75 13.6518 18.05 14.351 17.1875 14.351H2.8125C2.60731 14.351 2.40413 14.3105 2.21456 14.232C2.02499 14.1535 1.85274 14.0384 1.70765 13.8933C1.56255 13.7482 1.44746 13.576 1.36894 13.3864C1.29042 13.1968 1.25 12.9936 1.25 12.7885V4.66345ZM6.875 8.72595C6.875 7.89715 7.20424 7.10229 7.79029 6.51624C8.37634 5.93019 9.1712 5.60095 10 5.60095C10.8288 5.60095 11.6237 5.93019 12.2097 6.51624C12.7958 7.10229 13.125 7.89715 13.125 8.72595C13.125 9.55475 12.7958 10.3496 12.2097 10.9357C11.6237 11.5217 10.8288 11.851 10 11.851C9.1712 11.851 8.37634 11.5217 7.79029 10.9357C7.20424 10.3496 6.875 9.55475 6.875 8.72595ZM15.625 8.10095C15.4592 8.10095 15.3003 8.1668 15.1831 8.28401C15.0658 8.40122 15 8.56019 15 8.72595V8.73262C15 9.07762 15.28 9.35762 15.625 9.35762H15.6317C15.7974 9.35762 15.9564 9.29177 16.0736 9.17456C16.1908 9.05735 16.2567 8.89838 16.2567 8.73262V8.72595C16.2567 8.56019 16.1908 8.40122 16.0736 8.28401C15.9564 8.1668 15.7974 8.10095 15.6317 8.10095H15.625ZM3.75 8.72595C3.75 8.56019 3.81585 8.40122 3.93306 8.28401C4.05027 8.1668 4.20924 8.10095 4.375 8.10095H4.38167C4.54743 8.10095 4.7064 8.1668 4.82361 8.28401C4.94082 8.40122 5.00667 8.56019 5.00667 8.72595V8.73262C5.00667 8.89838 4.94082 9.05735 4.82361 9.17456C4.7064 9.29177 4.54743 9.35762 4.38167 9.35762H4.375C4.20924 9.35762 4.05027 9.29177 3.93306 9.17456C3.81585 9.05735 3.75 8.89838 3.75 8.73262V8.72595Z"
                                    fill="white"
                                />
                                <path
                                    d="M1.875 15.601C1.70924 15.601 1.55027 15.6668 1.43306 15.784C1.31585 15.9012 1.25 16.0602 1.25 16.226C1.25 16.3917 1.31585 16.5507 1.43306 16.6679C1.55027 16.7851 1.70924 16.851 1.875 16.851C6.375 16.851 10.7333 17.4526 14.875 18.5801C15.8667 18.8501 16.875 18.1151 16.875 17.0635V16.226C16.875 16.0602 16.8092 15.9012 16.6919 15.784C16.5747 15.6668 16.4158 15.601 16.25 15.601H1.875Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="h3">Транзакции</h3>
                        </Link>
                    </li>
                    <li className="bg-[#26262633] w-full rounded-xl p-4">
                        <Link className="flex items-center space-x-3">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.2075 7.64095L13.6567 9.76761C13.7814 10.3167 13.7814 10.8868 13.6567 11.4359L16.2075 13.5609C16.6469 12.6362 16.8749 11.6252 16.8749 10.6014C16.8749 9.57752 16.6469 8.56653 16.2075 7.64178V7.64095ZM12.96 16.8093L10.8334 14.2576C10.2842 14.3823 9.71415 14.3823 9.16503 14.2576L7.04003 16.8084C7.96478 17.2479 8.97577 17.4758 9.99961 17.4758C11.0235 17.4758 12.0344 17.2479 12.9592 16.8084L12.96 16.8093ZM3.79169 13.5609L6.34336 11.4343C6.21866 10.8852 6.21866 10.3151 6.34336 9.76595L3.79253 7.64261C3.35311 8.56736 3.12513 9.57836 3.12513 10.6022C3.12513 11.626 3.35311 12.637 3.79253 13.5618L3.79169 13.5609ZM7.04003 4.39261L9.16669 6.94428C9.71581 6.81958 10.2859 6.81958 10.835 6.94428L12.96 4.39345C12.0353 3.95403 11.0243 3.72605 10.0004 3.72605C8.9766 3.72605 7.96561 3.95403 7.04086 4.39345L7.04003 4.39261ZM14.2542 3.67595C14.7957 4.00943 15.2964 4.40518 15.7459 4.85511C16.1954 5.30413 16.5909 5.8042 16.9242 6.34511C17.7095 7.62529 18.1252 9.09784 18.1252 10.5997C18.1252 12.1016 17.7095 13.5741 16.9242 14.8543C16.5907 15.3958 16.195 15.8965 15.745 16.3459C15.296 16.7955 14.7959 17.1909 14.255 17.5243C12.9748 18.3097 11.502 18.7255 10 18.7255C8.49801 18.7255 7.0253 18.3097 5.74503 17.5243C5.20407 17.1907 4.704 16.7949 4.25503 16.3451C3.8052 15.8961 3.40945 15.3961 3.07586 14.8551C2.29039 13.5748 1.87463 12.1021 1.87463 10.6001C1.87463 9.09809 2.29039 7.62539 3.07586 6.34511C3.40944 5.80414 3.80519 5.30407 4.25503 4.85511C4.70399 4.40527 5.20406 4.00952 5.74503 3.67595C7.02521 2.89064 8.49776 2.47498 9.99961 2.47498C11.5015 2.47498 12.974 2.89064 14.2542 3.67595ZM11.7675 8.83428C11.5066 8.57242 11.1906 8.37201 10.8425 8.24761C10.2976 8.05366 9.70245 8.05366 9.15753 8.24761C8.80943 8.37201 8.49344 8.57242 8.23253 8.83428C7.96086 9.10511 7.76586 9.42178 7.64586 9.75928C7.45191 10.3042 7.45191 10.8994 7.64586 11.4443C7.76586 11.7818 7.96086 12.0984 8.23253 12.3693C8.50336 12.6409 8.82003 12.8359 9.15753 12.9559C9.70086 13.1501 10.2992 13.1501 10.8425 12.9559C11.1906 12.8316 11.5066 12.6311 11.7675 12.3693C12.0392 12.0984 12.2342 11.7818 12.3542 11.4443C12.5481 10.8993 12.5481 10.3042 12.3542 9.75928C12.2298 9.41119 12.0294 9.09519 11.7675 8.83428Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="h3">Помощь</h3>
                        </Link>
                    </li>
                    <li className="bg-[#26262633] w-full rounded-xl p-4">
                        <Link
                            className="flex items-center space-x-3"
                            to="/profilepage/bought-items"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                            </svg>


                            <h3 className="h3">Мои покупки</h3>
                        </Link>
                    </li>
                    <li
                        className="bg-grey w-full rounded-xl p-4 md:col-span-2"
                        onClick={handleLogOut}
                    >
                        <button className="w-full text-center">
                            <h3 className="h3">Выйти из профиля</h3>
                        </button>
                    </li>
                </ul>
            </main>
            <NavBar />
        </div>
    );
};
