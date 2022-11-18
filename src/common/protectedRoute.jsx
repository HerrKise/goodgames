import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isLoggedIn = true; // тут сделать проверку на залогиненность
    const isAdmin = true; // тут сделать проверку на админа, скорее всего по логину
    return isLoggedIn && isAdmin ? <Outlet /> : <Navigate to="/login" />; //если пользователь не админ, то его перекинет на страницу логина и если его токен не истёк, то потом редиректнет на главную страницу
};

export default ProtectedRoute;
