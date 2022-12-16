import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getNewsData,
    getNewsLoadingStatus,
    loadNews,
} from "../store/reducers/newsSlice";

const News = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getNewsLoadingStatus());
    const newsData = useSelector(getNewsData());

    useEffect(() => {
        dispatch(loadNews({ type: "News", page: "1" }));
        console.log("newsData");
    }, []);

    useEffect(() => {
        if (isLoading === false && newsData) {
            console.log(newsData);
        }
    }, [isLoading]);

    return (
        <section className="bg-gray-300 w-full min-h-[400px]">
            <div className="w-[1240px] mx-auto">
                <p>News</p>
                <ul className="flex w-900px gap-5 flex-wrap overflow-scroll h-[200px]">
                    {newsData
                        ? newsData.items.map((post) => {
                              return (
                                  <li
                                      key={post.id}
                                      className="flex flex-col items-center justify-around bg-yellow-200 w-[300px] h-[200px]"
                                  >
                                      <h3>{post.title}</h3>
                                      <p>{post.content}</p>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
            </div>
        </section>
    );
};

export default News;
