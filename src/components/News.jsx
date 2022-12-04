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
        dispatch(loadNews({ type: "News" }));
    }, []);

    useEffect(() => {
        if (isLoading === false) {
            console.log(newsData);
        }
    }, [isLoading]);

    return (
        <section>
            <p>News</p>
        </section>
    );
};

export default News;
