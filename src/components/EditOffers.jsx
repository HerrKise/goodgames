import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "../services/localStorage.service";
import MDEditor from "@uiw/react-md-editor";
import {
    editOffers,
    getOffersData,
    getOffersLoadingStatus,
    loadUserOffers,
} from "../store/reducers/offersSlice";

const EditOffers = () => {
    const dispatch = useDispatch();
    const currentUser = localStorageService.getUserId();
    const [value, setValue] = useState("**Hello world!!!**");
    const [postId, setPostId] = useState("");
    const offersData = useSelector(getOffersData());
    const isLoading = useSelector(getOffersLoadingStatus());
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const changeId = (e) => {
        setPostId(e.target.value);
    };

    useEffect(() => {
        dispatch(loadUserOffers({ newsEditorId: currentUser, type: "Offer" }));
    }, []);

    const editOffersPost = () => {
        dispatch(
            editOffers({
                newsId: postId,
                title: title,
                content: value,
                type: type,
            })
        );
    };

    const deleteOffersPost = (postId) => {
        dispatch(
            deleteNews({
                newsId: postId,
            })
        );
    };

    return (
        <section className="bg-grey p-3 rounded-b-lg">
            <ul className="">
                {offersData
                    ? offersData.items.map((post) => {
                          return (
                              <li key={post.id} className="">
                                  <p>{post.id}</p>

                                  <h3>{post.title}</h3>
                                  <p>{post.content}</p>
                                  <button
                                      onClick={() => {
                                          deleteOffersPost(post.id);
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
                    onClick={editOffersPost}
                >
                    Редактировать предложение
                </button>
            </div>
        </section>
    );
};

export default EditOffers;
