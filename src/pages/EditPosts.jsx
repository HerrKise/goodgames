import { useState } from "react";
import EditNews from "../components/EditNews";

const EditPosts = () => {
    const [current, setCurrent] = useState(1);
    return (
        <section>
            <div>
                <h2>Ваши посты</h2>
                <div>
                    <button
                        onClick={() => {
                            setCurrent(1);
                        }}
                        className={current === 1 ? "bg-yellow-600" : "bg-white"}
                    >
                        Новости
                    </button>
                    <button
                        onClick={() => {
                            setCurrent(2);
                        }}
                        className={current === 1 ? "bg-yellow-600" : "bg-white"}
                    >
                        Предложения
                    </button>
                    <button
                        onClick={() => {
                            setCurrent(3);
                        }}
                        className={current === 1 ? "bg-yellow-600" : "bg-white"}
                    >
                        Акции
                    </button>
                </div>
                <div>
                    {current === 1 ? (
                        <EditNews />
                    ) : current === 2 ? (
                        "Тут будут предложения"
                    ) : current === 3 ? (
                        "Тут будут акции"
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};

export default EditPosts;
