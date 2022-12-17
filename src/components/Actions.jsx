import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getActionsData,
    getActionsLoadingStatus,
    loadActions,
} from "../store/reducers/actionsSlice";

const Actions = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getActionsLoadingStatus());
    const actionsData = useSelector(getActionsData());

    useEffect(() => {
        dispatch(loadActions({ type: "Action", page: "1" }));
    }, []);

    useEffect(() => {
        if (isLoading === false && actionsData) {
            console.log(actionsData);
        }
    }, [isLoading]);

    return (
        <section className="bg-gray-300 w-full min-h-[400px]">
            <div className="w-[1240px] mx-auto">
                <p>Actions</p>
                <ul className="flex w-900px gap-5 flex-wrap overflow-scroll h-[200px]">
                    {actionsData
                        ? actionsData.items.map((post) => {
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

export default Actions;
