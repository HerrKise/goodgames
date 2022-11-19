import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./common/protectedRoute";
import StaffPage from "./pages/StaffPage";
import StaffLogin from "./pages/StaffLogin";
import StaffRegistration from "./pages/StaffRegistration";
import {useState} from "react";
import {Profile} from "./pages/Profile";
import {ProfileSettings} from "./pages/ProfileSettings";

function App() {
    const [loggedIn, setLoggedIn] = useState(true); // думаю лучше тянуть это тут, потому что компонент грузится первым
    const [isAdmin, setAdmin] = useState(true);
    return (
        <Routes>
            <Route element={<ProtectedRoute isLoggedIn={loggedIn} isAdmin={isAdmin}/>}>
                <Route path="/staff" element={<StaffPage />}> </Route>
                <Route path="/staff/login" element={<StaffLogin />} />
                <Route path="/staff/reg" element={<StaffRegistration />} />
                <Route path="/profile" element={<Profile />} ></Route>
                <Route path="/profile/settings" element={<ProfileSettings />}></Route>
            </Route>

            <Route path="/reg" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
        </Routes>
    );
}

export default App;
