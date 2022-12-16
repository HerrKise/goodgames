
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
    getTeamsData,
    getTeamsInvCode,
    getTeamsLoadingStatus,
    leaveTeams,
    loadManagerCode,
    loadMyTeams,
    loadTeamByCode,
} from "../store/reducers/teamsSlice";

import {
    getUserProfileData,
} from "../store/reducers/userSlice.js";

import { ProFileTeamsItem } from '../components/ProfilePage/ProfileTeamsItem';

const Teams = () => {
    
    const dispatch = useDispatch();
    const user = useSelector(getUserProfileData());
    
    const isLoading = useSelector(getTeamsLoadingStatus());

    const myTeams = useSelector(getTeamsData());
    const codeSelector = useSelector(getTeamsInvCode());

    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeTag = (e) => {
        setTag(e.target.value);
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

    useEffect(() => {
        if (myTeams && !isLoading) {
            console.log(myTeams);
            console.log(codeSelector);
        }
    }, [isLoading]);

    useEffect(() => {
        dispatch(loadMyTeams());
    }, []);
    
    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <main className="wrap pt-28 text-white pb-20 space-y-5">
                <h1 className="h1">Создать команду</h1>
                    <form
                        className="space-y-3"
                        onSubmit={handleSubmit}
                    >
                        <div className="bg-grey w-full py-4 px-7 rounded-lg text-center text-sm font-bold flex flex-col items-center">
                            <input type="file" name="avatar" id="avatar" onChange={handlePicUpload} className="hidden" />
                            <label htmlFor="avatar" >Добавить аватар команды</label>
                        </div>
                        <input type="text" placeholder="Название команды" value={name} onChange={changeName} className="bg-[#26262633] w-full py-4 px-7 rounded-lg"/>
                        <input type="text" placeholder="Тэг команды" value={tag} onChange={changeTag} className="bg-[#26262633] w-full py-4 px-7 rounded-lg"/>
                        
                        <button type="submit" className='w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold'>Создать команду</button>
                    </form>
                <h1 className="h1">Мои команды</h1>
                {/* <div className="w-full bg-[#26262633] rounded-lg relative">
                    <input type="text" placeholder="Вставьте код приглашения" value={invCode} onChange={changeCode} className="bg-[#26262633] w-full py-4 px-7 rounded-lg"/>
                    <button onClick={navigateToTeamPage} className="bg-grey absolute p-4 rounded-r-lg right-0">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.37671 18.476H16.6267C17.5918 18.476 18.3767 17.6911 18.3767 16.726V4.47595C18.3767 3.51083 17.5918 2.72595 16.6267 2.72595H4.37671C3.41158 2.72595 2.62671 3.51083 2.62671 4.47595V9.72683H8.74996V6.22595L14 10.601L8.74996 14.976V11.4768H2.62671V16.726C2.62671 17.6911 3.41158 18.476 4.37671 18.476Z" fill="white"/>
                        </svg>
                    </button>
                </div> */}
                {myTeams
                    ? <ul className="flex flex-wrap gap-5">
                        {myTeams.map((team, i) => {
                            return(
                                <ProFileTeamsItem team={team} i={i} key={team.id} user={user}/>
                            )
                        })}
                    </ul>
                    : <></>
                }  
            </main>
            <NavBar/>
        </div>
    );
};

export default Teams;
