import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "../services/localStorage.service";
import MDEditor from "@uiw/react-md-editor";
import {
    deleteNews,
    editNews,
    getNewsData,
    getNewsLoadingStatus,
    loadUserNews,
} from "../store/reducers/newsSlice";

const EditNews = () => {
    const dispatch = useDispatch();
    const currentUser = localStorageService.getUserId();
    const [value, setValue] = useState("**Hello world!!!**");
    const [postId, setPostId] = useState("");
    const newsData = useSelector(getNewsData());
    const isLoading = useSelector(getNewsLoadingStatus());
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const changeId = (e) => {
        setPostId(e.target.value);
    };

    useEffect(() => {
        dispatch(loadUserNews({ newsEditorId: currentUser, type: "News" }));
    }, []);

    const editNewsPost = () => {
        dispatch(
            editNews({
                newsId: postId,
                title: title,
                content: value,
                type: type,
            })
        );
    };

    const deleteNewsPost = (postId) => {
        console.log(postId);
        dispatch(
            deleteNews({
                newsId: postId,
            })
        );
    };

    return (
        <section className="w-full bg-gray-400">
            <h2>Ваши новости</h2>
            <ul className="flex w-900px gap-5 flex-wrap overflow-scroll h-[200px]">
                {newsData
                    ? newsData.items.map((post) => {
                          return (
                              <li
                                  key={post.id}
                                  className="flex flex-col items-center justify-around bg-yellow-200 w-[300px] h-[200px]"
                              >
                                  <p>{post.id}</p>

                                  <h3>{post.title}</h3>
                                  <p>{post.content}</p>
                                  <button
                                      onClick={() => {
                                          deleteNewsPost(post.id);
                                      }}
                                  >
                                      Удалить
                                  </button>
                              </li>
                          );
                      })
                    : ""}
            </ul>

            <div className="rounded-[10px]">
                <p>ID поста</p>
                <input type="text" value={postId} onChange={changeId} />
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
                    onClick={editNewsPost}
                >
                    Редактировать новость
                </button>
            </div>
        </section>
    );
};

export default EditNews;
