import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [postPic, setPostPic] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    useEffect(() => {
        console.log(value);
    }, [value]);

    const handlePicUpload = (e) => {
        e.preventDefault();
        setPostPic(e.target.files[0]);
        //тут диспатч файла на сервер
        //сервер возвращает ответ
        //закидываем адрес картинки
        setImgUrl("Какой-то адрес картинки с сервера");
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
                    onChange={handlePicUpload}
                    className="px-[5px] py-[3px]"
                />
                <p>Ваша ссылка появится здесь: {imgUrl}</p>
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
