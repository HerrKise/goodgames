import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTeams, updateTeamsPicture } from "../store/reducers/teamsSlice";

const EditTeam = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("Title");
    const [tag, setTag] = useState("Tag");
    const [img, setImg] = useState([]);

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
        formData.append("TeamId", props.teamId);
        formData.append("File", img);
        dispatch(updateTeamsPicture(formData));

        dispatch(
            editTeams({
                teamId: props.teamId,
                title: name,
                tag: tag,
            })
        );
    };

    return props.isVisible ? (
        <section
            className={
                props.isVisible
                    ? "bg-[rgba(0,0,0,0.5)]  fixed z-[1000] top-0 w-full h-full flex flex-col items-center"
                    : "hidden"
            }
        >
            <div className="bg-yellow-300 absolute top-[300px] w-[400px] h-[500px] flex flex-col items-center">
                <button
                    className="absolute right-[-22px] top-[-30px]"
                    onClick={() => {
                        props.setVisible(false);
                    }}
                >
                    <svg
                        className="sm:w-4 xs:w-4"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.45508 1.22253L26.4551 26.2225M26.4551 1.22253L1.45508 26.2225"
                            stroke="#E8E9EF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <h3>Редактировать команду</h3>
                <form
                    className="w-[350px] h-[400px] flex flex-col items-center justify-around"
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
                    <button type="submit">Редактировать</button>
                </form>
            </div>
        </section>
    ) : (
        ""
    );
};

export default EditTeam;
