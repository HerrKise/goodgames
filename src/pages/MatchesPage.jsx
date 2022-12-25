import { useSelector } from "react-redux";
import { MatchesList } from "../components/MatchesPage/MatchesList";
import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
import {
    getUserLoadingStatus,
    getUserProfileData
} from "../store/reducers/userSlice";

export const MatchesPage = () => {
    const matches = useSelector(getUserProfileData())?.matches;
    const isLoading = useSelector(getUserLoadingStatus());
    const tournament1 = {
        title: "PUBG Mobile Club Open Fall Splint 2022 CIS"
    };

    const commands = [
        {
            title: "GoodGames",
            confirmed: true,
            stages: 2,
            availablestages: 5,
            matchResult: false
        },
        {
            title: "GoodGames2",
            confirmed: false,
            stages: 1,
            availablestages: 1,
            matchResult: "Турнир проигран"
        }
    ];

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header />
            <main className="wrap pt-28 text-white pb-20">
                <div className="space-y-4">
                    <h1 className="h1">Мои матчи</h1>
                    <div className="flex items-center space-x-2 mt-3">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.5" clipPath="url(#clip0_366_441)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.01372 1.5295V2.03C2.40997 2.11633 1.81264 2.2225 1.2223 2.34675C1.11183 2.37016 1.01468 2.43538 0.951186 2.52877C0.887693 2.62216 0.862772 2.73649 0.881638 2.84783C1.02897 3.71352 1.46132 4.50515 2.11003 5.097C2.75874 5.68885 3.58661 6.04698 4.46214 6.1145C4.92825 6.49544 5.47572 6.76408 6.06222 6.89967C6.00648 7.56176 5.78304 8.19875 5.41297 8.75058H4.98189C4.37755 8.75058 3.88814 9.24058 3.88814 9.84433V11.3756H3.45064C3.10254 11.3756 2.7687 11.5139 2.52256 11.76C2.27642 12.0061 2.13814 12.34 2.13814 12.6881C2.13814 12.9296 2.33414 13.1256 2.57564 13.1256H11.3256C11.4417 13.1256 11.5529 13.0795 11.635 12.9974C11.717 12.9154 11.7631 12.8041 11.7631 12.6881C11.7631 12.34 11.6249 12.0061 11.3787 11.76C11.1326 11.5139 10.7987 11.3756 10.4506 11.3756H10.0131V9.84433C10.0131 9.24 9.52314 8.75058 8.91939 8.75058H8.4883C8.11841 8.19871 7.89517 7.56171 7.83964 6.89967C8.42619 6.76391 8.97367 6.49506 9.43972 6.11392C10.3154 6.04652 11.1434 5.68845 11.7922 5.09659C12.441 4.50473 12.8734 3.71302 13.0208 2.84725C13.0395 2.73591 13.0144 2.62166 12.9508 2.52839C12.8872 2.43511 12.79 2.37003 12.6796 2.34675C12.0863 2.22142 11.489 2.11578 10.8887 2.03V1.52892C10.8887 1.42221 10.8496 1.31921 10.7789 1.23928C10.7083 1.15935 10.6108 1.10801 10.5049 1.09492C9.32583 0.948141 8.1388 0.874694 6.95064 0.875001C5.74722 0.875001 4.5613 0.949668 3.39639 1.09492C3.29059 1.10814 3.19327 1.15953 3.1227 1.23945C3.05213 1.31937 3.01317 1.4223 3.01314 1.52892L3.01372 1.5295ZM3.01372 3.06308C3.01372 3.76075 3.19572 4.41642 3.51364 4.98458C3.11934 4.80777 2.76678 4.54976 2.479 4.2274C2.19122 3.90504 1.97469 3.52559 1.84355 3.11383C2.23207 3.03844 2.62223 2.97173 3.01372 2.91375V3.06308ZM10.8887 3.06308V2.91375C11.2819 2.97208 11.6721 3.03858 12.0589 3.11383C11.9278 3.5256 11.7113 3.90507 11.4235 4.22743C11.1357 4.5498 10.7831 4.8078 10.3888 4.98458C10.7176 4.3976 10.8897 3.73587 10.8887 3.06308Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_366_441">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="p opacity-50">{tournament1.title}</p>
                    </div>
                    {/* <p className="p opacity-50">Выберите команду</p> */}
                </div>
                {!isLoading && matches && <MatchesList matches={matches} />}
            </main>
            <NavBar />
        </div>
    );
};
