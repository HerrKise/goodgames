import { useState, useCallback, useEffect } from "react";
import { Collapse } from "react-collapse";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import EditTeam from "../../components/EditTeam";

import {
    createTeams,
    getInvitationCode,
    getManagerCodeData,
    getTeamByCode,
    getTeamsData,
    getTeamsInvCode,
    getTeamsLoadingStatus,
    leaveTeams,
    loadManagerCode,
    loadMyTeams,
    loadTeamByCode,
    teammatesReceived,
} from "../../store/reducers/teamsSlice";


export const ProFileTeamsItem = ({team, user}) => {

    const dispatch = useDispatch();
    
    const [img, setImg] = useState([]);
    const [id, setId] = useState("");
    const [invCode, setInvCode] = useState("");
    const [editVisible, setEditVisible] = useState(false);
    const navigate = useNavigate();

    
    const codeSelector = useSelector(getTeamsInvCode());
    const teamGotByCode = useSelector(getTeamByCode());
    const managerCode = useSelector(getManagerCodeData());
    
    const [isChangeOpen, setIsChangeOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const openInfo = useCallback(
        () => setIsInfoOpen(!isInfoOpen),
        [isInfoOpen]
    )

    const openChange = useCallback(
        () => setIsChangeOpen(!isChangeOpen),
        [isChangeOpen]
    );

    const getCode = (id) => {
        dispatch(getInvitationCode(id));
        console.log(codeSelector);
    };

    const getManagerCode = (id) => {
        dispatch(loadManagerCode(id));
        console.log(managerCode);
    };

    const changeCode = (e) => {
        setInvCode(e.target.value);
    };
    

    const deleteTeam = (teamId) => {
        console.log("удаление команды с id", teamId);
    };

    const navigateToTeamPage = () => {
        dispatch(loadTeamByCode(invCode, navigate));
    };

    const leaveTeam = (id) => {
        dispatch(leaveTeams({ teamId: id }));
    };

    

    const teammates = [
        {
            nickname: "GoodGames",
            role: "Участник",
        },
        {
            nickname: "GoodGames2",
            role: "Участник",
        }
    ]

    console.log(user)

    return (
            <li className="bg-grey rounded-xl p-5 relative w-full">
                <div onClick={openInfo} className="flex items-center justify-between">
                    <div className='flex items-center space-x-3'>
                        <div className="w-8 h-8 rounded-full bg-yellow">
                            {team.logo ? 
                                <img
                                    src={team.logo}
                                    alt="tl"
                                    className="w-full h-full"
                                />
                                : <div className="w-full h-full"></div>
                            }
                        </div>
                        <h3 className="h3">{team.title}</h3>
                        <p className="p">#{team.tag}</p>
                    </div>
                    <button
                        className={isInfoOpen ? "duration-300 rotate-90" : "rotate-0 duration-300"}
                        aria-expanded={isInfoOpen}
                        type="button"
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z" fill="white"/>
                        </svg>
                    </button>
                </div>

                <Collapse isOpened={isInfoOpen}>
                    <div className="space-y-[14px] pt-4">
                        <button
                            className='w-full rounded-lg bg-darkgrey py-3 text-white text-xs font-bold flex items-center justify-center space-x-2'
                            onClick={() => {
                                getCode(team.id);
                            }}
                        >
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.40625 3.98438C4.40625 3.30061 4.67787 2.64486 5.16137 2.16137C5.64486 1.67787 6.30061 1.40625 6.98438 1.40625C7.66814 1.40625 8.32389 1.67787 8.80738 2.16137C9.29088 2.64486 9.5625 3.30061 9.5625 3.98438C9.5625 4.66814 9.29088 5.32389 8.80738 5.80738C8.32389 6.29088 7.66814 6.5625 6.98438 6.5625C6.30061 6.5625 5.64486 6.29088 5.16137 5.80738C4.67787 5.32389 4.40625 4.66814 4.40625 3.98438ZM2.53125 11.9531C2.53125 10.7721 3.00042 9.63941 3.83554 8.80429C4.67066 7.96917 5.80333 7.5 6.98438 7.5C8.16542 7.5 9.29809 7.96917 10.1332 8.80429C10.9683 9.63941 11.4375 10.7721 11.4375 11.9531V11.955L11.4369 12.0294C11.4355 12.1089 11.414 12.1867 11.3743 12.2556C11.3347 12.3245 11.2781 12.3821 11.21 12.4231C9.9345 13.1912 8.47329 13.596 6.98438 13.5938C5.43938 13.5938 3.99312 13.1663 2.75938 12.4231C2.69116 12.3822 2.63448 12.3246 2.59468 12.2557C2.55488 12.1868 2.53327 12.1089 2.53187 12.0294L2.53125 11.9531ZM12.8438 4.6875C12.8438 4.56318 12.7944 4.44395 12.7065 4.35604C12.6185 4.26814 12.4993 4.21875 12.375 4.21875C12.2507 4.21875 12.1315 4.26814 12.0435 4.35604C11.9556 4.44395 11.9062 4.56318 11.9062 4.6875V6.09375H10.5C10.3757 6.09375 10.2565 6.14314 10.1685 6.23104C10.0806 6.31895 10.0312 6.43818 10.0312 6.5625C10.0312 6.68682 10.0806 6.80605 10.1685 6.89396C10.2565 6.98186 10.3757 7.03125 10.5 7.03125H11.9062V8.4375C11.9062 8.56182 11.9556 8.68105 12.0435 8.76896C12.1315 8.85686 12.2507 8.90625 12.375 8.90625C12.4993 8.90625 12.6185 8.85686 12.7065 8.76896C12.7944 8.68105 12.8438 8.56182 12.8438 8.4375V7.03125H14.25C14.3743 7.03125 14.4935 6.98186 14.5815 6.89396C14.6694 6.80605 14.7188 6.68682 14.7188 6.5625C14.7188 6.43818 14.6694 6.31895 14.5815 6.23104C14.4935 6.14314 14.3743 6.09375 14.25 6.09375H12.8438V4.6875Z" fill="white"/>
                            </svg>
                            <span>Получить код приглашения</span>
                        </button>
                        <button
                            className='w-full rounded-lg bg-darkgrey py-3 text-white text-xs font-bold flex items-center justify-center space-x-2 opacity-60'
                            onClick={() => {
                                getManagerCode(team.id);
                            }}
                        >
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.24244 2.00631C7.52244 1.33318 8.47744 1.33318 8.75744 2.00631L10.0587 5.13568L13.4362 5.40631C14.1637 5.46443 14.4587 6.37193 13.9043 6.84693L11.3312 9.05131L12.1168 12.3469C12.2862 13.0569 11.5143 13.6176 10.8918 13.2376L7.99994 11.4713L5.10807 13.2376C4.48557 13.6176 3.71369 13.0563 3.88307 12.3469L4.66869 9.05131L2.09557 6.84693C1.54119 6.37193 1.83619 5.46443 2.56369 5.40631L5.94119 5.13568L7.24244 2.00693V2.00631Z" fill="white"/>
                            </svg>
                            <span>Получить код для менеджера</span>
                        </button>
                        <div className={managerCode ? "block" : "hidden"}>
                            <div className="flex items-center p space-x-2">
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.39376 2.10505C5.61776 1.56655 6.38176 1.56655 6.60576 2.10505L7.64676 4.60855L10.3488 4.82505C10.9308 4.87155 11.1668 5.59755 10.7233 5.97755L8.66476 7.74105L9.29326 10.3775C9.42876 10.9455 8.81126 11.394 8.31326 11.09L5.99976 9.67705L3.68626 11.09C3.18826 11.394 2.57076 10.945 2.70626 10.3775L3.33476 7.74105L1.27626 5.97755C0.832757 5.59755 1.06876 4.87155 1.65076 4.82505L4.35276 4.60855L5.39376 2.10555V2.10505Z" fill="white"/>
                                    </g>
                                </svg>
                                <span className="mt-1">Код менеджера</span>
                            </div>
                            <p>{managerCode}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <p className="p">Состав команды</p>
                            <div className="flex items-center space-x-1 p justify-end ">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.37497 4C4.37497 3.30381 4.65154 2.63613 5.14382 2.14384C5.6361 1.65156 6.30378 1.375 6.99997 1.375C7.69617 1.375 8.36385 1.65156 8.85613 2.14384C9.34841 2.63613 9.62497 3.30381 9.62497 4C9.62497 4.69619 9.34841 5.36387 8.85613 5.85615C8.36385 6.34844 7.69617 6.625 6.99997 6.625C6.30378 6.625 5.6361 6.34844 5.14382 5.85615C4.65154 5.36387 4.37497 4.69619 4.37497 4ZM2.18806 12.2279C2.20773 10.9647 2.72335 9.75986 3.62362 8.8735C4.52389 7.98714 5.7366 7.49034 6.99997 7.49034C8.26335 7.49034 9.47606 7.98714 10.3763 8.8735C11.2766 9.75986 11.7922 10.9647 11.8119 12.2279C11.8134 12.313 11.7901 12.3966 11.7448 12.4686C11.6996 12.5406 11.6343 12.5978 11.557 12.6333C10.1273 13.2888 8.57273 13.6271 6.99997 13.625C5.37481 13.625 3.83072 13.2703 2.44297 12.6333C2.36567 12.5978 2.30039 12.5406 2.25512 12.4686C2.20984 12.3966 2.18654 12.313 2.18806 12.2279Z" fill="white"/>
                                    </g>
                                </svg>
                                <span>Роль</span>
                            </div>
                            <p>{user.name}</p>
                            <p className="text-end">Командир</p>
                            {teammates.map((teammate, i) => {
                                return (
                                    <>
                                        <p>{teammate.nickname}</p>
                                        <p className="text-end">{teammate.role}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div
                            onClick={() => {
                                setId(team.id);
                                setEditVisible(true);
                            }}
                        >
                            <div className='w-full rounded-lg bg-white py-3 text-darkgrey text-xs font-bold flex items-center justify-center' onClick={openChange}>Изменить команду</div>
                            <Collapse isOpened={isChangeOpen}>
                                <EditTeam
                                    teamId={id}
                                    openChange={openChange}
                                />
                            </Collapse>
                        </div>
                        <button
                            className='w-full rounded-lg bg-darkgrey py-3 text-white text-xs font-bold'
                            onClick={() => {
                                leaveTeam(team.id);
                            }}
                        >
                            Покинуть команду
                        </button>
                        <button
                            className='w-full rounded-lg bg-darkgrey py-3 text-white text-xs font-bold flex items-center justify-center space-x-2 opacity-60'
                            onClick={() => {
                                deleteTeam(team.id);
                            }}
                        >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.3125 2.79872V2.94059C11.1244 3.01483 11.9329 3.12159 12.7363 3.26059C12.7969 3.2711 12.8549 3.29345 12.9069 3.32637C12.9589 3.35928 13.004 3.40212 13.0394 3.45244C13.0749 3.50276 13.1001 3.55957 13.1136 3.61963C13.1271 3.67968 13.1286 3.74181 13.1181 3.80247C13.1076 3.86312 13.0853 3.92111 13.0524 3.97313C13.0194 4.02515 12.9766 4.07017 12.9263 4.10563C12.876 4.14109 12.8192 4.16629 12.7591 4.1798C12.699 4.1933 12.6369 4.19485 12.5763 4.18434L12.4456 4.16247L11.8175 12.3312C11.7813 12.8022 11.5686 13.2422 11.2221 13.5631C10.8755 13.8841 10.4205 14.0624 9.94813 14.0625H5.0525C4.58013 14.0624 4.12516 13.8841 3.77858 13.5631C3.432 13.2422 3.21934 12.8022 3.18313 12.3312L2.55438 4.16247L2.42375 4.18434C2.3631 4.19485 2.30097 4.1933 2.24091 4.1798C2.18085 4.16629 2.12405 4.14109 2.07373 4.10563C1.97211 4.03402 1.9031 3.92496 1.88188 3.80247C1.86066 3.67997 1.88898 3.55406 1.96059 3.45244C2.03221 3.35082 2.14126 3.28181 2.26375 3.26059C3.06705 3.12142 3.87562 3.01467 4.6875 2.94059V2.79872C4.6875 1.82122 5.44563 0.986217 6.4475 0.954342C7.1492 0.931886 7.85143 0.931886 8.55313 0.954342C9.555 0.986217 10.3125 1.82122 10.3125 2.79872ZM6.4775 1.89122C7.1592 1.86942 7.84143 1.86942 8.52313 1.89122C8.99375 1.90622 9.375 2.30247 9.375 2.79872V2.86934C8.12615 2.7935 6.87385 2.7935 5.625 2.86934V2.79872C5.625 2.30247 6.00563 1.90622 6.4775 1.89122ZM6.25563 5.60684C6.25325 5.54529 6.23877 5.4848 6.21301 5.42884C6.18726 5.37288 6.15073 5.32254 6.10552 5.28069C6.06031 5.23885 6.0073 5.20632 5.94952 5.18496C5.89173 5.16361 5.83031 5.15384 5.76875 5.15622C5.7072 5.1586 5.64671 5.17308 5.59075 5.19884C5.53479 5.22459 5.48445 5.26112 5.44261 5.30633C5.40076 5.35154 5.36823 5.40455 5.34687 5.46233C5.32552 5.52011 5.31575 5.58154 5.31813 5.64309L5.535 11.2681C5.53981 11.3923 5.59377 11.5096 5.68502 11.594C5.7302 11.6358 5.78318 11.6683 5.84092 11.6897C5.89867 11.711 5.96005 11.7208 6.02157 11.7184C6.08308 11.716 6.14353 11.7016 6.19945 11.6758C6.25537 11.6501 6.30568 11.6136 6.34749 11.5684C6.38931 11.5232 6.42182 11.4702 6.44316 11.4125C6.4645 11.3547 6.47426 11.2934 6.47188 11.2318L6.25563 5.60684ZM9.68063 5.64309C9.68521 5.58035 9.67712 5.51733 9.65683 5.45779C9.63655 5.39824 9.60448 5.34339 9.56255 5.29649C9.52062 5.2496 9.46968 5.21163 9.41276 5.18484C9.35585 5.15804 9.29412 5.14298 9.23126 5.14055C9.1684 5.13811 9.10569 5.14836 9.04688 5.17067C8.98806 5.19298 8.93433 5.2269 8.8889 5.27041C8.84347 5.31392 8.80726 5.36613 8.78243 5.42393C8.7576 5.48173 8.74466 5.54394 8.74438 5.60684L8.5275 11.2318C8.5227 11.3562 8.56747 11.4773 8.65198 11.5686C8.73649 11.6599 8.85381 11.7139 8.97813 11.7187C9.10245 11.7235 9.22359 11.6788 9.31489 11.5942C9.4062 11.5097 9.4602 11.3924 9.465 11.2681L9.68063 5.64309Z" fill="white"/>
                            </svg>
                            <span>Удалить команду</span>
                        </button>
                    </div>
                </Collapse>
            </li>
    )
}