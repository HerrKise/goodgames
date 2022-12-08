import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import localStorageService from "../services/localStorage.service";
import {
    getSelectedTeam,
    getTeammatesData,
    getTeamsLoadingStatus,
    joinTeams,
    loadTeamByID,
    loadTeammates,
} from "../store/reducers/teamsSlice";

const TeamProfile = () => {
    const { code, teamId } = useParams();
    const dispatch = useDispatch();
    const teamProfileData = useSelector(getSelectedTeam());
    const isLoading = useSelector(getTeamsLoadingStatus());
    const teammates = useSelector(getTeammatesData());
    const [isInTeam, setIsInTeam] = useState(false);
    const userId = localStorageService.getUserId();
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        dispatch(loadTeamByID(teamId));
    }, []);

    useEffect(() => {
        if (isLoading === false) {
            teammates.map((teammate) => {
                if (teammate.user.id === userId) {
                    setIsInTeam(true);
                }
            });
        }
    }, [teammates]);

    useEffect(() => {
        if (teamProfileData) {
            dispatch(loadTeammates(teamId));
        }
    }, [teamProfileData]);

    useEffect(() => {
        if (!isLoading && teamProfileData) {
            setTag(teamProfileData.tag);
            setTitle(teamProfileData.title);
        }
    }, [isLoading]);

    const enterTeam = () => {
        dispatch(joinTeams({ code: code }));
    };
    const disableButton = () => {
        setIsInTeam(false);
    };

    return (
        <section className="bg-gray-400 w-full min-h-[100vh]">
            <div className="w-[1240px] mx-auto flex flex-col items-center gap-5">
                <h2>профиль команды</h2>
                <p>Название команды : {title}</p>
                <p>Тэг команды : {tag}</p>
                <p>Состав</p>
                <ul className="flex flex-col items-center ">
                    {teammates
                        ? teammates.map((teammate) => {
                              console.log(teammate.user.id);
                              console.log(userId);
                              return (
                                  <li
                                      key={teammate.user.id}
                                      className="border-[1px] rounded-[10px] border-black w-[300px] h-[100px] p-[10px] flex flex-col items-center"
                                  >
                                      <h3>Роль: {teammate.teammateType}</h3>
                                      <p>
                                          Никнейм:{" "}
                                          {teammate.user.profile.nickname}
                                      </p>
                                      <p>
                                          Киллы: {teammate.user.statistic.kills}
                                      </p>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
                <button
                    className="bg-orange-600 rounded-[10px] p-[5px]"
                    onClick={enterTeam}
                    disabled={isInTeam ? true : false}
                >
                    {isInTeam
                        ? "Вы уже состоите в этой команде"
                        : "Вступить в команду"}
                </button>
            </div>
        </section>
    );
};

export default TeamProfile;
