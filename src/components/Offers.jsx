import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOffersData,
    getOffersLoadingStatus,
    loadOffers,
} from "../store/reducers/offersSlice";

const Offers = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getOffersLoadingStatus());
    const offersData = useSelector(getOffersData());

    useEffect(() => {
        dispatch(loadOffers("Offer"));
        console.log("offersData");
    }, []);

    useEffect(() => {
        if (isLoading === false && offersData) {
            console.log(offersData);
        }
    }, [isLoading]);

    return (
        <section className="bg-gray-300 w-full min-h-[400px]">
            <div className="w-[1240px] mx-auto">
                <p>Offers</p>
                <ul className="flex w-900px gap-5 flex-wrap overflow-scroll h-[200px]">
                    {offersData
                        ? offersData.items.map((post) => {
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

export default Offers;
