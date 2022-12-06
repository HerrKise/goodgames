import { code } from "@uiw/react-md-editor";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTeam from "../components/EditTeam";
import {
    createTeams,
    getInvitationCode,
    getTeamsData,
    getTeamsLoadingStatus,
    loadMyTeams,
} from "../store/reducers/teamsSlice";

const Teams = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState("");
    const [invCode, setInvCode] = useState("");
    const [editVisible, setEditVisible] = useState(false);

    const myTeams = useSelector(getTeamsData());
    const isLoading = useSelector(getTeamsLoadingStatus());

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeTag = (e) => {
        setTag(e.target.value);
    };

    const getCode = (id) => {
        dispatch(getInvitationCode(id));
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

    useEffect(() => {
        dispatch(loadMyTeams());
    }, []);

    useEffect(() => {
        if (myTeams && !isLoading) {
            console.log(myTeams);
        }
    }, [isLoading]);

    return (
        <section className="bg-gray-400 w-[100%] min-h-[100vh] ">
            <div className="w-[1240px] mx-auto flex flex-col items-center">
                <h2>My teams</h2>
                <ul className="flex">
                    {myTeams
                        ? myTeams.map((team) => {
                              return (
                                  <li
                                      key={team.id}
                                      className="bg-yellow-600 border-[1px] border-black rounded-[10px] w-[300px] h-[200px] flex flex-col items-center text-center"
                                  >
                                      <div className="flex flex-col items-center justify-between h-[100%]">
                                          <p>{team.title} - название</p>
                                          <p>{team.tag} - Тэг </p>
                                          <img
                                              src={team.logo}
                                              alt="team logo"
                                          />

                                          <button
                                              onClick={() => {
                                                  setId(team.id);
                                                  setEditVisible(true);
                                              }}
                                          >
                                              Редактировать
                                          </button>
                                          <button
                                              onClick={() => {
                                                  deleteTeam(team.id);
                                              }}
                                          >
                                              Удалить
                                          </button>
                                          <button
                                              onClick={() => {
                                                  getCode(team.id);
                                              }}
                                          >
                                              Получить код для вступления
                                          </button>
                                          <p>Код для вступления {invCode}</p>
                                      </div>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
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
            </div>
            <EditTeam
                teamId={id}
                isVisible={editVisible}
                setVisible={setEditVisible}
            />
        </section>
    );
};

export default Teams;
