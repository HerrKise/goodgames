import { useState } from "react";
import EditNews from "../components/EditNews";
import EditOffers from "../components/EditOffers";
import EditActions from "../components/EditActions";

const EditPosts = () => {
    const [current, setCurrent] = useState("News");
    return (
        <section>
            <div>
                <h2>Ваши посты</h2>
                <div>
                    <button
                        onClick={() => {
                            setCurrent("News");
                        }}
                        className={
                            current === "News" ? "bg-yellow-600" : "bg-white"
                        }
                    >
                        Новости
                    </button>
                    <button
                        onClick={() => {
                            setCurrent("Offers");
                        }}
                        className={
                            current === "Offers" ? "bg-yellow-600" : "bg-white"
                        }
                    >
                        Предложения
                    </button>
                    <button
                        onClick={() => {
                            setCurrent("Actions");
                        }}
                        className={
                            current === "Actions" ? "bg-yellow-600" : "bg-white"
                        }
                    >
                        Акции
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
            </div>
        </section>
    );
};

export default EditPosts;
