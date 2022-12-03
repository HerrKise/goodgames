import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import {
    getNewsLoadingStatus,
    getPhotoUrl,
    getPhotoUrlData
} from "../store/reducers/newsSlice";

const Editor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [postPic, setPostPic] = useState([]);
    const isLoading = useSelector(getNewsLoadingStatus());
    const photoUrl = useSelector(getPhotoUrlData());

    const dispatch = useDispatch();

    const handlePicChange = (e) => {
        e.preventDefault();
        setPostPic(e.target.files[0]);
    };

    const handleUrlGet = (e) => {
        e.preventDefault();
        if (postPic.length !== 0) {
            let formData = new FormData();
            formData.append("file", postPic);
            dispatch(getPhotoUrl(formData));
        }
    };

    const uploadPost = () => {
        //тут будет диспатч
        console.log("Creating post: ", value);
    };

    return (
        <div className="container">
            <form>
                <p>
                    Если вы хотите загрузить картинку локально, можете сделать
                    это здесь, после чего сервер сгенерирует вам ссылку для
                    вставки в статью:
                </p>
                <input
                    type="file"
                    placeholder="изменить"
                    onChange={handlePicChange}
                    className="px-[5px] py-[3px]"
                />
                <button onClick={handleUrlGet}>Получить ссылку</button>
                <p>Ваша ссылка появится здесь: {!isLoading ? photoUrl : ""}</p>
            </form>
            <MDEditor value={value} onChange={setValue} />
            <MDEditor.Markdown
                source={value}
                style={{ whiteSpace: "pre-wrap" }}
            />
            <button
                className="bg-yellow-700 rounded-[5px]"
                onClick={uploadPost}
            >
                Создать новость
            </button>
        </div>
    );
};

export default Editor;
