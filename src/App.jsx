import {Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
    return (
        <Routes>
            <Route path="/reg" element={<Registration />}></Route>
        </Routes>
    )
}

export default App;
