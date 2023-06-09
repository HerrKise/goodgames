import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import placeholdergame from "../../../assets/Main/placeholdergame.jfif"
import { getSelectedEvent } from "../../../store/reducers/eventsSlice";
import moment from "moment";

export const Tournaments = ({tournaments}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEventSelect = (tournament) => {
        dispatch(getSelectedEvent({id: tournament.id, navigate: () => navigate(`/tournamentpage/:${tournament.id}`)}))
    }

    tournaments.map((tournament, i) => {
        console.log(tournament);
    })

    return (
    //     isLoading ? <div className=" w-full aspect-square grid place-items-center">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       className="w-[50px] h-[50px] fill-white animate-spin"
    //     >
    //       <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
    //       <path
    //         fillRule="evenodd"
    //         d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </div>
    //   :
        <ul className="space-y-5 md:gap-5 md:space-y-0 md:grid md:grid-cols-2">
            {tournaments.map((tournament, i) => {
                let startDay = moment(tournament.eventEnd).format("YYYY-MM-DD")
                let startHour = moment(tournament.eventEnd).format("HH:mm")
                return (
                    <li className="p-[14px] rounded-2xl h-[200px] relative overflow-clip cursor-pointer" key={i} onClick={() => handleEventSelect(tournament)} >
                        <img src={placeholdergame} alt="placeholdergame" className="absolute top-0 left-0 h-full w-full object-top object-cover"/>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-[#2626268C]'></div>
                        <div className="flex flex-col justify-between w-full h-full relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-semibold md:text-sm">
                                    <p>{startDay}</p>
                                    <p>{startHour}</p>
                                </div>
                                <div className={!tournament.isPaid ? "hidden" : "bg-yellow flex items-center text-darkgrey px-3 py-1 rounded-full text-xs font-bold space-x-1"}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9 0.875C4.5125 0.875 0.875 4.5125 0.875 9C0.875 13.4875 4.5125 17.125 9 17.125C13.4875 17.125 17.125 13.4875 17.125 9C17.125 4.5125 13.4875 0.875 9 0.875ZM9.625 4C9.625 3.83424 9.55915 3.67527 9.44194 3.55806C9.32473 3.44085 9.16576 3.375 9 3.375C8.83424 3.375 8.67527 3.44085 8.55806 3.55806C8.44085 3.67527 8.375 3.83424 8.375 4V4.68C7.85239 4.76794 7.35983 4.98443 6.94167 5.31C6.34833 5.78167 6.015 6.435 6.015 7.125C6.015 7.81583 6.34833 8.46833 6.9425 8.94C7.36083 9.27333 7.86083 9.47917 8.375 9.57V12.0517C8.09818 11.9875 7.83715 11.8682 7.6075 11.7008L6.875 11.1508C6.80934 11.1016 6.73462 11.0658 6.65511 11.0454C6.5756 11.025 6.49286 11.0205 6.41161 11.0321C6.24752 11.0556 6.09946 11.1432 6 11.2758C5.90054 11.4084 5.85784 11.5751 5.88128 11.7392C5.90472 11.9033 5.99239 12.0514 6.125 12.1508L6.8575 12.7008C7.30167 13.0342 7.83167 13.2383 8.375 13.3258V14C8.375 14.1658 8.44085 14.3247 8.55806 14.4419C8.67527 14.5592 8.83424 14.625 9 14.625C9.16576 14.625 9.32473 14.5592 9.44194 14.4419C9.55915 14.3247 9.625 14.1658 9.625 14V13.325C10.1738 13.2425 10.6945 13.0284 11.1425 12.7008C11.7633 12.235 12.125 11.5808 12.125 10.875C12.125 10.1692 11.7633 9.515 11.1425 9.04917C10.6946 8.72128 10.1739 8.50683 9.625 8.42417V5.96167C9.86667 6.03 10.0908 6.13917 10.28 6.28917L10.6258 6.56417C10.7557 6.66727 10.9212 6.71457 11.0859 6.69566C11.2506 6.67675 11.4011 6.59318 11.5042 6.46333C11.6073 6.33349 11.6546 6.168 11.6357 6.00328C11.6167 5.83856 11.5332 5.6881 11.4033 5.585L11.0575 5.31C10.6395 4.98486 10.1472 4.76866 9.625 4.68083V4Z" fill="#191919"/>
                                    </svg>
                                    Платно
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="max-w-[200px] space-y-3">
                                    <div className="flex items-center space-x-1">
                                        <div className="w-4 h-4 rounded-full bg-red-900 md:w-5 md:h-5">
                                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path fillRule="evenodd" d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-xs font-semibold md:text-base">{tournament.organizer.nickname}</p>
                                    </div>
                                    <h3 className="h3">{tournament.title}</h3>
                                </div>
                                <div className="flex flex-col items-end space-y-2 text-xs font-semibold">
                                    <div className="flex items-center space-x-1">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.15625 3.21875C4.15625 2.59715 4.40318 2.00101 4.84272 1.56147C5.28226 1.12193 5.8784 0.875 6.5 0.875C7.1216 0.875 7.71774 1.12193 8.15728 1.56147C8.59682 2.00101 8.84375 2.59715 8.84375 3.21875C8.84375 3.84035 8.59682 4.43649 8.15728 4.87603C7.71774 5.31557 7.1216 5.5625 6.5 5.5625C5.8784 5.5625 5.28226 5.31557 4.84272 4.87603C4.40318 4.43649 4.15625 3.84035 4.15625 3.21875ZM8.84375 5.09375C8.84375 4.59647 9.04129 4.11956 9.39292 3.76792C9.74456 3.41629 10.2215 3.21875 10.7188 3.21875C11.216 3.21875 11.6929 3.41629 12.0446 3.76792C12.3962 4.11956 12.5938 4.59647 12.5938 5.09375C12.5938 5.59103 12.3962 6.06794 12.0446 6.41958C11.6929 6.77121 11.216 6.96875 10.7188 6.96875C10.2215 6.96875 9.74456 6.77121 9.39292 6.41958C9.04129 6.06794 8.84375 5.59103 8.84375 5.09375ZM0.40625 5.09375C0.40625 4.59647 0.603794 4.11956 0.955425 3.76792C1.30706 3.41629 1.78397 3.21875 2.28125 3.21875C2.77853 3.21875 3.25544 3.41629 3.60708 3.76792C3.95871 4.11956 4.15625 4.59647 4.15625 5.09375C4.15625 5.59103 3.95871 6.06794 3.60708 6.41958C3.25544 6.77121 2.77853 6.96875 2.28125 6.96875C1.78397 6.96875 1.30706 6.77121 0.955425 6.41958C0.603794 6.06794 0.40625 5.59103 0.40625 5.09375ZM2.94375 8.44812C3.32497 7.85064 3.85067 7.35891 4.47226 7.0184C5.09385 6.67789 5.79126 6.4996 6.5 6.5C7.09364 6.49946 7.6807 6.6243 8.22275 6.86635C8.7648 7.1084 9.24961 7.46221 9.64546 7.9046C10.0413 8.347 10.3392 8.86801 10.5198 9.43353C10.7003 9.99905 10.7594 10.5963 10.6931 11.1862C10.685 11.2595 10.6597 11.3299 10.6193 11.3916C10.5789 11.4533 10.5246 11.5045 10.4606 11.5413C9.25535 12.2328 7.88959 12.5958 6.5 12.5938C5.05937 12.5938 3.70625 12.2113 2.53938 11.5413C2.47543 11.5045 2.42105 11.4533 2.38065 11.3916C2.34025 11.3299 2.31498 11.2595 2.30687 11.1862C2.20191 10.2279 2.42654 9.26236 2.94375 8.44875V8.44812Z" fill="white"/>
                                        </svg>
                                        <p className=" md:text-sm">100/2040</p>
                                    </div>
                                    <div className="bg-yellow px-4 py-1 rounded-full text-darkgrey font-bold  md:text-base">
                                        {tournament.prize.pool} ₽
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}