import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import localStorageService from "../services/localStorage.service";
import { getIsUserLoggedIn } from "../store/reducers/userSlice";

const UserProtectedRoute = () => {
    const isAdmin = localStorageService.getIsStaff();
    console.log(isAdmin);
    const isLoggedIn = useSelector(getIsUserLoggedIn());
    return isLoggedIn && !isAdmin ? <Outlet /> : <Navigate to="/login" />; //если пользователь не админ, то его перекинет на страницу логина и если его токен не истёк, то потом редиректнет на главную страницу
};

export default UserProtectedRoute;
