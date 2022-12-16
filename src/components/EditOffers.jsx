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
        <section className=" bg-green ">
            <h2>Ваши предложения</h2>
            <ul className="flex w-900px gap-5 flex-wrap overflow-scroll h-[200px]">
                {offersData
                    ? offersData.items.map((post) => {
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
            <div className="container">
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
                    onClick={editOffersPost}
                >
                    Редактировать предложение
                </button>
            </div>
        </section>
    );
};

export default EditOffers;
