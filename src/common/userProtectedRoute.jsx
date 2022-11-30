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
    if (isStaff) {
        dispatch(staffLogout());
    }
    console.log("проверяется");
    const isLoggedIn = useSelector(getIsUserLoggedIn());
    console.log(isStaff, isLoggedIn);
    if (isLoggedIn && !isStaff) {
        dispatch(loadUserProfile({ userId: localStorageService.getUserId() }));
    }

    return (
        <>{isLoggedIn && !isStaff ? <Outlet /> : <Navigate to="/login" />}</>
    ); //если пользователь не админ, то его перекинет на страницу логина и если его токен не истёк, то потом редиректнет на главную страницу
};

export default UserProtectedRoute;
