import { useSelector } from "react-redux";
import { getIsStaffLoggedIn } from "../store/reducers/staffSlice";
import { Outlet, Navigate } from "react-router";
import localStorageService from "../services/localStorage.service";

const StaffProtectedRoute = () => {
    const isLoggedIn = useSelector(getIsStaffLoggedIn());
    const isAdmin = localStorageService.getIsStaff();
    console.log(isAdmin);
    return isLoggedIn & (isAdmin === "true") ? (
        <Outlet />
    ) : (
        <Navigate to="/staff/login" />
    );
};

export default StaffProtectedRoute;
