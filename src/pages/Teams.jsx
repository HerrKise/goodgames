import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
import {
    createTeams,
    getInvitationCode,
    getManagerCodeData,
    getTeamByCode,
    getTeammatesData,
    getTeamsData,
    getTeamsInvCode,
    getTeamsLoadingStatus,
    joinTeamAsManager,
    joinTeams,
    leaveTeams,
    loadManagerCode,
    loadMyTeams,
    loadTeamByCode,
    loadTeammates,
} from "../store/reducers/teamsSlice";

import { getUserProfileData } from "../store/reducers/userSlice.js";

import { ProFileTeamsItem } from "../components/ProfilePage/ProfileTeamsItem";
import localStorageService from "../services/localStorage.service";

const Teams = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getUserProfileData());

    const userId = localStorageService.getUserId();

    const isLoading = useSelector(getTeamsLoadingStatus());

    const myTeams = useSelector(getTeamsData());
    const codeSelector = useSelector(getTeamsInvCode());
    const teamReceivedByCode = useSelector(getTeamByCode());
    const teammates = useSelector(getTeammatesData());
    const [isInTeam, setIsInTeam] = useState(false);

    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");
    const [invCode, setInvCode] = useState("");

    // const changeCode = (e) => {
    //     setInvCode(e.target.value);
    // };

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeTag = (e) => {
        setTag(e.target.value);
    };

    // const navigateToTeamPage = () => {
    //     dispatch(loadTeamByCode(invCode));
    // };

    const handlePicUpload = (e) => {
        e.preventDefault();
        setImg(e.target.files[0]);
    };

    const changeCode = (e) => {
        setInvCode(e.target.value);
    };

    const navigateToTeamPage = () => {
        dispatch(loadTeamByCode(invCode, navigate));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("Title", name);
        formData.append("Tag", tag);
        formData.append("Picture", img);
        dispatch(createTeams(formData));
    };

    useEffect(() => {
        if (myTeams && !isLoading) {
            console.log(myTeams);
            console.log(codeSelector);
        }
    }, [isLoading]);

    const enterTeam = () => {
        dispatch(joinTeams({ code: invCode }));
    };

    const enterTeamAsManager = () => {
        dispatch(joinTeamAsManager({ code: invCode }));
    };

    const leaveTeam = () => {
        dispatch(leaveTeams({ teamId: teamReceivedByCode.id }));
    };

    useEffect(() => {
        dispatch(loadMyTeams());
    }, []);

    useEffect(() => {
        if (teamReceivedByCode) {
            dispatch(loadTeammates(teamReceivedByCode.id));
        }
    }, [teamReceivedByCode]);

    useEffect(() => {
        if (isLoading === false && teammates) {
            teammates.map((teammate) => {
                if (teammate.user.id === userId) {
                    setIsInTeam(true);
                }
            });
        }
    }, [teammates]);

    const refreshTeamsData = () => {
        dispatch(loadMyTeams())
    }

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header />
            <main className="wrap pt-28 text-white pb-20 space-y-5 max-w-[500px] md:pb-40">
                <div className="w-full bg-[#26262633] rounded-lg relative">
                    <input
                        type="text"
                        placeholder="Вставьте код приглашения"
                        value={invCode}
                        onChange={changeCode}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button
                        onClick={navigateToTeamPage}
                        className="bg-grey absolute p-4 rounded-r-lg right-0"
                    >
                        <svg
                            width="21"
                            height="22"
                            viewBox="0 0 21 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.37671 18.476H16.6267C17.5918 18.476 18.3767 17.6911 18.3767 16.726V4.47595C18.3767 3.51083 17.5918 2.72595 16.6267 2.72595H4.37671C3.41158 2.72595 2.62671 3.51083 2.62671 4.47595V9.72683H8.74996V6.22595L14 10.601L8.74996 14.976V11.4768H2.62671V16.726C2.62671 17.6911 3.41158 18.476 4.37671 18.476Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
                <div className="">
                    {teamReceivedByCode ? (
                        <div className="bg-grey rounded-xl p-5 relative w-full">
                            <div className='flex items-center space-x-3'>
                                <h3 className="h3">{teamReceivedByCode.title}</h3>
                                <p className="p">#{teamReceivedByCode.tag}</p>
                            </div>
                            <ul className="space-y-[14px] py-4">
                                <div className="grid grid-cols-2 gap-[10px]">
                                    <p className="p">Состав команды</p>
                                    <div className="flex items-center space-x-1 p justify-end ">
                                        <svg
                                            width="14"
                                            height="15"
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.5">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.37497 4C4.37497 3.30381 4.65154 2.63613 5.14382 2.14384C5.6361 1.65156 6.30378 1.375 6.99997 1.375C7.69617 1.375 8.36385 1.65156 8.85613 2.14384C9.34841 2.63613 9.62497 3.30381 9.62497 4C9.62497 4.69619 9.34841 5.36387 8.85613 5.85615C8.36385 6.34844 7.69617 6.625 6.99997 6.625C6.30378 6.625 5.6361 6.34844 5.14382 5.85615C4.65154 5.36387 4.37497 4.69619 4.37497 4ZM2.18806 12.2279C2.20773 10.9647 2.72335 9.75986 3.62362 8.8735C4.52389 7.98714 5.7366 7.49034 6.99997 7.49034C8.26335 7.49034 9.47606 7.98714 10.3763 8.8735C11.2766 9.75986 11.7922 10.9647 11.8119 12.2279C11.8134 12.313 11.7901 12.3966 11.7448 12.4686C11.6996 12.5406 11.6343 12.5978 11.557 12.6333C10.1273 13.2888 8.57273 13.6271 6.99997 13.625C5.37481 13.625 3.83072 13.2703 2.44297 12.6333C2.36567 12.5978 2.30039 12.5406 2.25512 12.4686C2.20984 12.3966 2.18654 12.313 2.18806 12.2279Z"
                                                    fill="white"
                                                />
                                            </g>
                                        </svg>
                                        <span>Роль</span>
                                    </div>
                                    {teammates
                                        ? teammates.map((teammate) => {
                                            return (
                                                <
                                                    //key={teammate.user.id}
                                                >
                                                    <p>
                                                        {teammate.teammateType}
                                                    </p>
                                                    <p  className="text-end">
                                                        {
                                                            teammate.user.profile
                                                                .nickname
                                                        }
                                                    </p>
                                                    {/* <p>
                                                        Киллы:{" "}
                                                        {
                                                            teammate.user
                                                                .statistic.kills
                                                        }
                                                    </p> */}
                                                </>
                                            );
                                        })
                                        : ""}
                                    </div>
                            </ul>
                            <button
                                className='w-full rounded-lg bg-yellow py-3 my-3 text-darkgrey text-xs font-bold'
                                onClick={enterTeam}
                                disabled={isInTeam ? true : false}
                            >
                                {isInTeam
                                    ? "Вы уже состоите в этой команде"
                                    : "Вступить в команду"}
                            </button>
                            {isInTeam ? (
                                <button
                                className="w-full rounded-lg bg-darkgrey py-3 text-white text-xs font-bold"
                                    onClick={leaveTeam}
                                >
                                    Покинуть команду
                                </button>
                            ) : (
                                ""
                            )}
                            {isInTeam ? (
                                ""
                            ) : (
                                <button
                                    className="bg-orange-600 rounded-[10px] p-[5px]"
                                    onClick={enterTeamAsManager}
                                    disabled={isInTeam ? true : false}
                                >
                                    Вступить как менеджер
                                </button>
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <h1 className="h1">Создать команду</h1>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="bg-grey w-full py-4 px-7 rounded-lg text-center text-sm font-bold flex flex-col items-center md:text-base">
                        <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            onChange={handlePicUpload}
                            className="hidden"
                        />
                        <label htmlFor="avatar">Добавить аватар команды</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Название команды"
                        value={name}
                        onChange={changeName}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Тэг команды"
                        value={tag}
                        onChange={changeTag}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold md:text-base"
                    >
                        Создать команду
                    </button>
                </form>
                <h1 className="h1">Мои команды</h1>
                
                {myTeams ? (
                    <ul className="flex flex-wrap gap-5">
                        {myTeams.map((team, i) => {
                            return (
                                <ProFileTeamsItem
                                    team={team}
                                    i={i}
                                    key={team.id}
                                    user={user}
                                />
                            );

                // <div className="w-full bg-[#26262633] rounded-lg relative">
                //     <input type="text" placeholder="Вставьте код приглашения" value={invCode} onChange={changeCode} className="bg-[#26262633] w-full py-4 px-7 rounded-lg"/>
                //     <button onClick={navigateToTeamPage} className="bg-grey absolute p-4 rounded-r-lg right-0">
                //         <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                //             <path d="M4.37671 18.476H16.6267C17.5918 18.476 18.3767 17.6911 18.3767 16.726V4.47595C18.3767 3.51083 17.5918 2.72595 16.6267 2.72595H4.37671C3.41158 2.72595 2.62671 3.51083 2.62671 4.47595V9.72683H8.74996V6.22595L14 10.601L8.74996 14.976V11.4768H2.62671V16.726C2.62671 17.6911 3.41158 18.476 4.37671 18.476Z" fill="white"/>
                //         </svg>
                //     </button>
                // </div>
                // {myTeams
                //     ? <ul className="flex flex-wrap gap-5">
                //         {myTeams.map((team, i) => {
                //             return(
                //                 <ProFileTeamsItem team={team} i={i} user={user} refreshTeamsData={refreshTeamsData}/>
                //             )
                        })}
                    </ul>
                ) : (
                    <></>
                )}
            </main>
            <NavBar />
        </div>
    );
};

export default Teams;
