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
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import PasswordChangeViaEmail from "./pages/PasswordChangeViaEmail";
import ConfirmEmail from "./pages/ConfirmEmail";
import PasswordChangeViaProfile from "./pages/PasswordChangeViaProfile.jsx";
import Main from "./pages/Main.jsx";
import Games from "./pages/Games.jsx";
import StaffProtectedRoute from "./common/staffProtectedRoute";
import UserProfile from "./pages/UserProfile";
import PostContent from "./pages/PostContent";
import EditPosts from "./pages/EditPosts";
import CreateEventForm from "./pages/CreateEventForm";
import StaffProfile from "./pages/StaffProfile";
import Teams from "./pages/Teams";
import TeamProfile from "./pages/TeamProfile";

import { MainPage } from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";
import { GamesPage } from "./pages/GamesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { TournamentPage } from "./pages/TournamentPage";
import { TournamentList } from "./components/TournamentPage/TournamentList";
import { MatchesPage } from "./pages/MatchesPage";
import { ProfilePageSettings } from "./components/ProfilePage/ProfilePageSettings";
import { ProfilePageStatistics } from "./components/ProfilePage/ProfilePageStatistics";

import Shop from "./pages/Shop";
import ShopItemsCreation from "./pages/ShopItemsCreations";
import EditEventForm from "./pages/EditEventForm";
import EditShopItem from "./pages/EditShopItem";
import ExtendedShop from "./pages/ExtendedShop";


function App() {
    return (
        <>
            <Routes>
                <Route path="/mainpage" element={<Main />} />
                <Route path="/games" element={<Games />} />
                <Route path="/posts" element={<PostContent />} />
                <Route path="/shop" element={<Shop />}></Route>
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
                    <Route path="/profile/teams" element={<Teams />}></Route>
                    <Route
                        path="/profile/teams/:code/:teamId"
                        element={<TeamProfile />}
                    ></Route>
                    <Route path="/profilepage-settings" element={<ProfilePageSettings/>}/>
                    <Route path="/profilepage-statistics" element={<ProfilePageStatistics/>}/>
                    <Route path="/profilepage" element={<ProfilePage/>}/>
                </Route>
                <Route element={<StaffProtectedRoute />}>
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/staff/reg" element={<StaffRegistration />} />
                    <Route
                        path="/staff/user-profile/:id"
                        element={<UserProfile />}
                    ></Route>
                    <Route
                        path="/staff/staff-profile/:id"
                        element={<StaffProfile />}
                    ></Route>
                    <Route
                        path="/staff/create-event"
                        element={<CreateEventForm />}
                    ></Route>
                    <Route
                        path="/staff/create-shop-item"
                        element={<ShopItemsCreation />}
                    ></Route>
                    <Route
                        path="/staff/edit-event"
                        element={<EditEventForm />}
                    ></Route>
                    <Route
                        path="/staff/edit-posts"
                        element={<EditPosts />}
                    ></Route>
                    <Route
                        path="/staff/extended-shop"
                        element={<ExtendedShop />}
                    ></Route>
                    <Route
                        path="/staff/edit-shop-item/:id"
                        element={<EditShopItem />}
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
                <Route path="/" element={<MainPage/>}/>
                <Route path="/newspage" element={<NewsPage/>}/>
                <Route path="/gamespage" element={<GamesPage/>}/>
                <Route path="/tournamentpage" element={<TournamentPage/>}/>
                <Route path="/tournamentlist" element={<TournamentList/>}/>
                <Route path="/matchespage" element={<MatchesPage/>}/>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
