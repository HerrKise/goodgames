import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./common/protectedRoute";
import StaffPage from "./pages/StaffPage";
import StaffLogin from "./pages/StaffLogin";
import StaffRegistration from "./pages/StaffRegistration";

function App() {
    return (
        <Routes>
            <Route path="/staff" element={<ProtectedRoute />}>
                <Route path="/staff" element={<StaffPage />}>
                    <Route path="/staff/login" element={<StaffLogin />} />
                    <Route path="/staff/reg" element={<StaffRegistration />} />
                </Route>
            </Route>
            <Route path="/reg" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
        </Routes>
    );
}

export default App;
