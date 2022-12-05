import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createTeams,
    getTeamsData,
    getTeamsLoadingStatus,
    loadMyTeams,
} from "../store/reducers/teamsSlice";

const Teams = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [id, setId] = useState("");

    const myTeams = useSelector(getTeamsData());
    const isLoading = useSelector(getTeamsLoadingStatus());

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeTag = (e) => {
        setTag(e.target.value);
    };

    const changeImg = (e) => {
        setImgUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createTeams({
                tag: tag,
                logo: imgUrl,
                title: name,
            })
        );
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
        <section className="bg-gray-400 w-[100%] min-h-full ">
            <div className="w-[1240px] mx-auto">
                <h2>My teams</h2>
                <ul>
                    {myTeams
                        ? myTeams.map((team) => {
                              return (
                                  <li>
                                      <div>
                                          <p>{team.title} - название</p>
                                          <p>{team.tag} - Тэг </p>
                                          <button
                                              onClick={() => {
                                                  setId(team.id);
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
                                      </div>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
                <div>
                    <h3>Создать команду</h3>
                    <form
                        className="w-[350px] h-[400px] flex flex-col items-center justify-around"
                        onSubmit={handleSubmit}
                    >
                        <p>Название команды</p>
                        <input type="text" value={name} onChange={changeName} />
                        <p>Тэг команды</p>
                        <input type="text" value={tag} onChange={changeTag} />
                        <p>Ссылка на аватар команды</p>
                        <input
                            type="text"
                            value={imgUrl}
                            onChange={changeImg}
                        />
                        <button type="submit">Создать команду</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Teams;
