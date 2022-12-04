import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "../services/localStorage.service";
import { getNewsData, loadUserNews } from "../store/reducers/newsSlice";

const EditNews = () => {
    const dispatch = useDispatch();
    const currentUser = localStorageService.getUserId();
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [postId, setPostId] = useState("");
    const newsData = useSelector(getNewsData());
    const isLoading = useSelector(getNewsLoadingStatus());
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        dispatch(loadUserNews({ id: currentUser }));
    }, []);

    const editNews = () => {
        dispatch(
            editNews({
                newsId: postId,
                title: title,
                content: value,
                type: type,
            })
        );
    };

    const deleteNews = () => {
        dispatch(
            deleteNews({
                newsId: postId,
            })
        );
    };

    return (
        <section>
            <h2>Ваши новости</h2>
            <div className="container">
                <p>Название поста</p>
                <input
                    type="text"
                    placeholder="Название"
                    value={title}
                    onChange={changeTitle}
                />
                <p>Тип поста</p>
                <select
                    className="w-[400px]"
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                >
                    <option>News</option>
                    <option>Action</option>
                    <option>Offer</option>
                </select>
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
        </section>
    );
};

export default EditNews;
