import { useParams } from "react-router";
import { useState } from "react";
import staffService from "../services/staff.service";

const UserProfile = () => {
    const params = useParams();
    console.log(params);

    const [time, setTime] = useState("");

    console.log(Date.now());

    const ban = () => {
        const eternityBanTime = new Date(
            Date.now() + 1000 * 60 * 60 * 24 * 365 * 1000
        );
        staffService.giveBan({
            userId: params.id,
            to: eternityBanTime.toISOString()
        });
        console.log(`Юзер с id: ${params.id} забанен!`);
    };

    const shadowBan = () => {
        const shadowBanTime = new Date(Date.now() + 1000 * 60 * time);
        staffService.giveShadowBan({
            userId: params.id,
            to: shadowBanTime.toISOString()
        });
        console.log(`Юзер с id: ${params.id} замучен на ${time} минут!`);
    };

    const deleteUser = () => {
        console.log(`Юзер с id: ${params.id} удален!`);
    };

    return (
        <section className="w-[100%] min-h-[100vh] bg-[black] fixed ">
            <div className="relative w-[1240px] flex flex-col items-center">
                <div className="bg-white w-[500px] h-[500px] absolute top-[100px]">
                    <p>id: {params.id}</p>
                    <div className="flex flex-col items-center w-[400px] mx-auto">
                        <button
                            onClick={ban}
                            className="p-1 bg-red-500 rounded border-2 border-black mb-4"
                        >
                            Забанить
                        </button>
                        <button
                            onClick={shadowBan}
                            className="p-1 bg-yellow-300 rounded border-2 border-black"
                        >
                            Выдать тайм-аут
                        </button>
                        <select
                            className="w-[100px]"
                            onChange={(e) => {
                                setTime(e.target.value);
                            }}
                        >
                            <option>15</option>
                            <option>30</option>
                            <option>120</option>
                            <option>1440</option>
                            <option>10080</option>
                        </select>
                        <button onClick={deleteUser}>
                            Удалить пользователя
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
