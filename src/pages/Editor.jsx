import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import {
    createNews,
    getNewsLoadingStatus,
    getPhotoUrl,
    getPhotoUrlData,
} from "../store/reducers/newsSlice";

const Editor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [mainPic, setMainPic] = useState("");
    const [postPic, setPostPic] = useState([]);
    const isLoading = useSelector(getNewsLoadingStatus());
    const photoUrl = useSelector(getPhotoUrlData());

    const dispatch = useDispatch();

    const handlePicChange = (e) => {
        e.preventDefault();
        setPostPic(e.target.files[0]);
    };

    const handleMainPicChange = (e) => {
        e.preventDefault();
        setMainPic(e.target.files[0]);
    };

    const changeTitle = (e) => {
        setTitle(e.target.value);
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
        dispatch(
            createNews({
                title: title,
                content: value,
                type: type,
            })
        );

        console.log("Creating post: ", value);
    };

    useEffect(() => {
        console.log(type);
    }, [type]);

    return (
        <div className="container">
            <p>Название поста</p>
            <input
                className="text-black"
                type="text"
                placeholder="Название"
                value={title}
                onChange={changeTitle}
            />
            <p>Тип поста</p>
            <select
                className="w-[400px] text-black"
                onChange={(e) => {
                    setType(e.target.value);
                }}
            >
                <option>Выберите тип поста</option>
                <option value="News">News</option>
                <option value="Action">Action</option>
                <option value="Offer">Offer</option>
            </select>
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
                <button onClick={handleUrlGet}>Вставить картинку</button>
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
