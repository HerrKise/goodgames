import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UserProtectedRoute from "./common/userProtectedRoute";
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
import Games from "./pages/Games.jsx";
import StaffProtectedRoute from "./common/staffProtectedRoute";
import UserProfile from "./pages/UserProfile";
import TournamentCreation from "./pages/TournamentCreation";
import PostContent from "./pages/PostContent";
import EditPosts from "./pages/EditPosts";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/games" element={<Games />} />
                <Route element={<UserProtectedRoute />}>
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
                <Route element={<StaffProtectedRoute />}>
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/staff/reg" element={<StaffRegistration />} />
                    <Route
                        path="/staff/user-profile/:id"
                        element={<UserProfile />}
                    ></Route>
                    <Route
                        path="/staff/create-event"
                        element={<TournamentCreation />}
                    ></Route>
                    <Route
                        path="/staff/edit-posts"
                        element={<EditPosts />}
                    ></Route>
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
                <Route path="/posts" element={<PostContent />}></Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
