import { useState } from "react";
import { useDispatch } from "react-redux";
import { giveMoneyToUser } from "../store/reducers/staffSlice";

const StaffGiveCoins = () => {
    const [staffCoins, setStaffCoins] = useState("");
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(0);

    const changeId = (e) => {
        setId(e.target.value);
    };

    const changeCoins = (e) => {
        setStaffCoins(e.target.value);
    };

    const dispatch = useDispatch();
    const sendCoins = () => {
        dispatch(
            giveMoneyToUser({
                userId: id,
                coins: staffCoins,
            }),
        );
    };

    return (
        <section className="bg-gray-400 w-full h-full">
            <div className="w-[1240px] mx-auto flex flex-col items-center">
                <p>ID юзера</p>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={changeId}
                />
                <p>Количество монет</p>
                <input
                    type="number"
                    value={staffCoins}
                    onChange={changeCoins}
                />
                <button onClick={sendCoins}>Закинуть монеты</button>
            </div>
        </section>
    );
};

export default StaffGiveCoins;
