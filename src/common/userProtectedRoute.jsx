import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router";
import localStorageService from "../services/localStorage.service";
import { getIsStaff, staffLogout } from "../store/reducers/staffSlice";
import {
    getIsUserLoggedIn,
    getUserLoadingStatus,
    getUserProfileData
} from "../store/reducers/userSlice";
import { loadUserProfile } from "../store/reducers/userSlice";

const UserProtectedRoute = () => {
    const dispatch = useDispatch();
    const isStaff = localStorageService.getIsStaff() === "true";
    console.log(isStaff);
    if (isStaff) {
        dispatch(staffLogout());
    }
    const isLoggedIn = useSelector(getIsUserLoggedIn());

    const isLoading = useSelector(getUserLoadingStatus());
    console.log(isLoading);
    return (
        <>
            {!isLoading ? (
                <>
                    {isLoggedIn && !isStaff ? (
                        <Outlet />
                    ) : (
                        <Navigate to="/login" />
                    )}
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    ); //если пользователь не админ, то его перекинет на страницу логина и если его токен не истёк, то потом редиректнет на главную страницу
};

export default UserProtectedRoute;
