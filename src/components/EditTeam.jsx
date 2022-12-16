import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    editTeams,
    getSelectedTeam,
    getTeamsLoadingStatus,
    loadTeamByID,
    updateTeamsPicture,
} from "../store/reducers/teamsSlice";

const EditTeam = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("Title");
    const [tag, setTag] = useState("Tag");
    const [img, setImg] = useState([]);
    const pickedTeamSelector = useSelector(getSelectedTeam());
    const isLoading = useSelector(getTeamsLoadingStatus());

    useEffect(() => {
        if (props.teamId !== "") {
            dispatch(loadTeamByID(props.teamId));
        }
    }, [props.isVisible]);

    useEffect(() => {
        if (isLoading === false && props.isVisible === true) {
            setName(pickedTeamSelector.title);
            setTag(pickedTeamSelector.tag);
        }
    }, [isLoading]);

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

    return (
            <div className="bg-darkgrey rounded-b-lg p-4">
                <form
                    className="space-y-[10px]"
                    onSubmit={handleSubmit}
                >
                    <input type="text" placeholder="Новое название команды" value={name} onChange={changeName} className="bg-[#26262633] w-full py-4 px-7 rounded-lg"/>
                    <input type="text" placeholder="Новый тэг команды" value={tag} onChange={changeTag} className="bg-[#26262633] w-full py-4 px-7 rounded-lg" />
                    <div className="bg-grey w-full py-3 px-7 rounded-lg text-center text-xs font-bold flex flex-col items-center">
                        <label htmlFor="teampic">Изменить аватар профиля</label>
                        <input
                            id="teampic"
                            name="teampic"
                            type="file"
                            placeholder="изменить"
                            className="hidden"
                            onChange={handlePicUpload}
                        />
                    </div>
                    <button className='w-full rounded-lg bg-yellow py-3 text-darkgrey text-xs font-bold' type="submit" onClick={props.openChange}>Подтвердить</button>
                </form>
            </div>
    );
};

export default EditTeam;
