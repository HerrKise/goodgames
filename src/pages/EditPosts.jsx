import { useState } from "react";
import EditNews from "../components/EditNews";
import EditOffers from "../components/EditOffers";
import EditActions from "../components/EditActions";
import { NavLink } from "react-router-dom";
import logopic from "../assets/Main/logo.png";

const EditPosts = () => {
    const [current, setCurrent] = useState("News");
    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-50" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </NavLink>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Ваши посты</h1>
                <div className="w-full items-center justify-between text-sm font-bold pt-5">
                    <button
                        onClick={() => {
                            setCurrent("News");
                        }}
                        className={
                            current === "News" ? "bg-yellow w-[33.3%] rounded-t-lg text-darkgrey py-2" : "w-[33.3%] rounded-t-lg bg-grey/40 py-2"
                        }
                    >
                        Новости
                    </button>
                    <button
                        onClick={() => {
                            setCurrent("Offers");
                        }}
                        className={
                            current === "Offers" ? "bg-yellow w-[33.3%] rounded-t-lg text-darkgrey py-2" : "w-[33.3%] rounded-t-lg bg-grey/40 py-2"
                        }
                    >
                        Предложения
                    </button>
                    <button
                        onClick={() => {
                            setCurrent("Actions");
                        }}
                        className={
                            current === "Actions" ? "bg-yellow w-[33.3%] rounded-t-lg text-darkgrey py-2" : "w-[33.3%] rounded-t-lg bg-grey/40 py-2"
                        }
                    >
                        Конкурсы
                    </button>
                </div>
                <div>
                    {current === "News" ? (
                        <EditNews />
                    ) : current === "Offers" ? (
                        <EditOffers />
                    ) : current === "Actions" ? (
                        <EditActions />
                    ) : (
                        ""
                    )}
                </div>
            </main>
        </section>
    );
};

export default EditPosts;
