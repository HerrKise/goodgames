import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "../services/localStorage.service";
import MDEditor from "@uiw/react-md-editor";
import {
    getActionsData,
    getActionsLoadingStatus,
    loadUserActions,
} from "../store/reducers/actionsSlice";

const EditActions = () => {
    const dispatch = useDispatch();
    const currentUser = localStorageService.getUserId();
    const [value, setValue] = useState("**Hello world!!!**");
    const [postId, setPostId] = useState("");
    const actionsData = useSelector(getActionsData());
    const isLoading = useSelector(getActionsLoadingStatus());
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const changeId = (e) => {
        setPostId(e.target.value);
    };

    useEffect(() => {
        dispatch(
            loadUserActions({ newsEditorId: currentUser, type: "Action" })
        );
    }, []);

    const editActions = () => {
        dispatch(
            editNews({
                newsId: postId,
                title: title,
                content: value,
                type: type,
            })
        );
    };

    const deleteActionsPost = (postId) => {
        dispatch(
            deleteNews({
                newsId: postId,
            })
        );
    };

    return (
        <section className="bg-grey p-3 rounded-b-lg">
            <ul className="">
                {actionsData
                    ? actionsData.items.map((post) => {
                          return (
                              <li key={post.id} className="">
                                  <p>{post.id}</p>

                                  <h3>{post.title}</h3>
                                  <p>{post.content}</p>
                                  <button
                                      onClick={() => {
                                          deleteActionsPost(post.id);
                                      }}
                                  >
                                      Удалить
                                  </button>
                              </li>
                          );
                      })
                    : ""}
            </ul>
            <div className="space-y-3">
                <div>
                    <input
                        type="text"
                        value={postId}
                        onChange={changeId}
                        placeholder="ID поста"
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Название поста"
                        value={title}
                        onChange={changeTitle}
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                </div>
                <MDEditor value={value} onChange={setValue} />
                <MDEditor.Markdown
                    source={value}
                    style={{ whiteSpace: "pre-wrap" }}
                />
                <button
                    className="w-full rounded-lg bg-yellow py-4 my-5 text-darkgrey text-sm font-bold"
                    onClick={editActions}
                >
                    Редактировать конкурс
                </button>
            </div>
        </section>
    );
};

export default EditActions;
