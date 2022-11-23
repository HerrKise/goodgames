import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProtectedRoute from "./common/protectedRoute";
import StaffPage from "./pages/StaffPage";
import StaffLogin from "./pages/StaffLogin";
import StaffRegistration from "./pages/StaffRegistration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import PasswordChangeViaEmail from "./pages/PasswordChangeViaEmail";
import ConfirmEmail from "./pages/ConfirmEmail";
import PasswordChangeViaProfile from "./pages/PasswordChangeViaProfile.jsx";
import Main from "./pages/Main.jsx";

function App() {
    const [loggedIn, setLoggedIn] = useState(true); // думаю лучше тянуть это тут, потому что компонент грузится первым
    const [isAdmin, setAdmin] = useState(true);
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route
                    element={
                        <ProtectedRoute
                            isLoggedIn={loggedIn}
                            isAdmin={isAdmin}
                        />
                    }
                >
                    <Route path="/staff" element={<StaffPage />}>
                        {" "}
                    </Route>

                    <Route path="/staff/reg" element={<StaffRegistration />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/profile/settings"
                        element={<ProfileSettings />}
                    />
                    <Route
                        path="/profile/change-password"
                        element={<PasswordChangeViaProfile />}
                    />
                </Route>
                <Route path="/staff/login" element={<StaffLogin />} />
                <Route path="/confirm-email/:code" element={<ConfirmEmail />} />
                <Route path="/reg" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route
                    path="/create-new-password/:code"
                    element={<PasswordChangeViaEmail />}
                />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
