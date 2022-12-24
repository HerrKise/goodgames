import { useDispatch, useSelector } from "react-redux";
import {
    getIsStaff,
    getIsStaffLoggedIn,
    loadStaffProfile
} from "../store/reducers/staffSlice";
import { Outlet, Navigate } from "react-router";
import { useEffect } from "react";
import { userLogout } from "../store/reducers/userSlice";

const StaffProtectedRoute = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsStaffLoggedIn());
    const isStaff = useSelector(getIsStaff());
    /* if (isLoggedIn && isStaff) {
        dispatch(loadStaffProfile());
    } */
    console.log(isStaff, isLoggedIn);
    return isLoggedIn & isStaff ? <Outlet /> : <Navigate to="/staff/login" />;
};

export default StaffProtectedRoute;
