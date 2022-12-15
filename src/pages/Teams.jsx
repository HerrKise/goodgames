import { useCallback } from 'react';
import {Collapse} from 'react-collapse';

import { code } from "@uiw/react-md-editor";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import EditTeam from "../components/EditTeam";
import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
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
} from "../store/reducers/teamsSlice";
import { ProFileTeamsItem } from '../components/ProfilePage/ProfileTeamsItem';

const Teams = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState("");
    const [invCode, setInvCode] = useState("");
    const [editVisible, setEditVisible] = useState(false);
    const navigate = useNavigate();

    const myTeams = useSelector(getTeamsData());
    const isLoading = useSelector(getTeamsLoadingStatus());
    const codeSelector = useSelector(getTeamsInvCode());
    const teamGotByCode = useSelector(getTeamByCode());
    const managerCode = useSelector(getManagerCodeData());

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeTag = (e) => {
        setTag(e.target.value);
    };

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

    const handlePicUpload = (e) => {
        e.preventDefault();
        setImg(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("Title", name);
        formData.append("Tag", tag);
        formData.append("Picture", img);
        dispatch(createTeams(formData));
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

    useEffect(() => {
        dispatch(loadMyTeams());
    }, []);

    useEffect(() => {
        if (myTeams && !isLoading) {
            console.log(myTeams);
            console.log(codeSelector);
        }
    }, [isLoading]);

    
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const openInfo = useCallback(
        () => setIsInfoOpen(!isInfoOpen),
        [isInfoOpen]
    )

    const openTerms = useCallback(
        () => setIsTermsOpen(!isTermsOpen),
        [isTermsOpen]
    );

    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Мои команды</h1>
                {/* <div className="w-full bg-[#26262633] rounded-lg relative">
                    <input type="text" placeholder="Вставьте код приглашения" value={invCode} onChange={changeCode} className="bg-[#26262633] w-full py-4 px-7 rounded-lg"/>
                    <button onClick={navigateToTeamPage} className="bg-grey absolute p-4 rounded-r-lg right-0">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.37671 18.476H16.6267C17.5918 18.476 18.3767 17.6911 18.3767 16.726V4.47595C18.3767 3.51083 17.5918 2.72595 16.6267 2.72595H4.37671C3.41158 2.72595 2.62671 3.51083 2.62671 4.47595V9.72683H8.74996V6.22595L14 10.601L8.74996 14.976V11.4768H2.62671V16.726C2.62671 17.6911 3.41158 18.476 4.37671 18.476Z" fill="white"/>
                        </svg>
                    </button>
                </div> */}
                <ul className="flex flex-wrap gap-5 pt-5">
                    {myTeams
                        ? <ProFileTeamsItem />
                    : ""}
                </ul>
            </main>
            
            <div className="flex flex-col justify-around items-center">
                    <h3>Создать команду</h3>
                    <form
                        className="w-[350px] h-[400px] flex flex-col items-center gap-5"
                        onSubmit={handleSubmit}
                    >
                        <p>Название команды</p>
                        <input type="text" value={name} onChange={changeName} />
                        <p>Тэг команды</p>
                        <input type="text" value={tag} onChange={changeTag} />
                        <p>Aватар команды</p>
                        <input
                            type="file"
                            placeholder="изменить"
                            onChange={handlePicUpload}
                            className="px-[5px] py-[3px]"
                        />
                        <button type="submit">Создать команду</button>
                    </form>
            </div>
            
            <EditTeam
                teamId={id}
                isVisible={editVisible}
                setVisible={setEditVisible}
            />
            <NavBar/>
        </div>
    );
};

export default Teams;
