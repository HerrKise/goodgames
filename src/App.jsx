import {Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App() {
    return (
        <Routes>
            <Route path="/reg" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reset-password" element={<ResetPassword />} ></Route>
        </Routes>
    )
}

export default App;
