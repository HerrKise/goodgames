import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import {
    createNews,
    getNewsLoadingStatus,
    getPhotoUrl,
    getPhotoUrlData,
} from "../store/reducers/newsSlice";

import { NavLink } from "react-router-dom";
import logopic from "../assets/Main/logo.png";

// Создание поста

const Editor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [mainPic, setMainPic] = useState("");
    const [postPic, setPostPic] = useState([]);
    const isLoading = useSelector(getNewsLoadingStatus());
    const photoUrl = useSelector(getPhotoUrlData());
    const [pictures, setPictures] = useState([]);
    const [bgPic, setBgPic] = useState("");

    const dispatch = useDispatch();

    const handlePicChange = (e) => {
        e.preventDefault();
        setPostPic(e.target.files[0]);
    };

    const changeBgPicture = (e) => {
        setBgPic(e.target.value);
    };

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleUrlGet = (e) => {
        console.log("postpicccccc", postPic);
        e.preventDefault();
        if (postPic.length !== 0) {
            let formData = new FormData();
            formData.append("file", postPic);
            dispatch(getPhotoUrl(formData));
        }
    };

    const uploadPost = () => {
        let formData = new FormData();
        formData.append("Title", title);
        formData.append("Content", value);
        formData.append("Type", type);
        formData.append("Pictures", pictures);
        formData.append("Background", bgPic);
        dispatch(createNews(formData));

        console.log("Creating post: ", value);
    };

    useEffect(() => {
        console.log(type);
    }, [type]);

    return (
        <section  className="bg-darkgrey min-h-[100vh]">
            <NavLink
                className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-10"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </NavLink>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Название поста</h1>
                <div className="space-y-3 p-2 mt-4 bg-grey rounded-lg">
                    <input
                        className="bg-darkgrey w-full py-3 px-7 rounded-lg"
                        type="text"
                        placeholder="Название"
                        value={title}
                        onChange={changeTitle}
                    />
                    <select
                        className="bg-darkgrey w-full py-3 px-7 rounded-lg"
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                    >
                        <option>Выберите тип поста</option>
                        <option value="News">Новость</option>
                        <option value="Action">Конкурс</option>
                        <option value="Offer">Предложение</option>
                    </select>
                    <form className="space-y-3">
                        <p className="p">
                            Если вы хотите загрузить картинку локально, можете сделать
                            это здесь, после чего сервер сгенерирует вам ссылку для
                            вставки в статью:
                        </p>
                        <input
                            type="file"
                            placeholder="изменить"
                            onChange={handlePicChange}
                            className="bg-darkgrey w-full py-3 px-7 rounded-lg"
                        />
                        <button 
                            onClick={handleUrlGet} 
                            className="w-full rounded-lg bg-white text-darkgrey p-3 text-sm font-bold"
                        >
                            Вставить картинку
                        </button>
                        <p className="p">Ссылка на картинку появится здесь {photoUrl}</p>
                        <p className="p">Вставьте ссылку на бэкграунд, чтобы его установить</p>
                        <input type="text" value={bgPic} onChange={changeBgPicture}
                        placeholder="Ссылка на бэкграунд" className="bg-darkgrey w-full py-3 px-7 rounded-lg"/>
                    </form>
                    <MDEditor value={value} onChange={setValue} />
                    <MDEditor.Markdown
                        source={value}
                        style={{ whiteSpace: "pre-wrap" }}
                    />
                    <button
                        className="w-full rounded-lg bg-yellow py-3 text-darkgrey text-sm font-bold md:text-base"
                        onClick={uploadPost}
                    >
                        Создать новость
                    </button>
                </div>
            </main>
        </section>
    );
};

export default Editor;
