import { useState } from "react";
import { useDispatch } from "react-redux";
import { giveMoneyToUser } from "../store/reducers/staffSlice";

import logopic from "../assets/Main/logo.png";
import { Link } from "react-router-dom";

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
        <section className="bg-darkgrey min-h-[100vh]">
            <Link
                className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-50"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </Link>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Пополнение баланса</h1>
                <div className="py-5 space-y-3">
                    <p className="p">ID юзера</p>
                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={changeId}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <p className="p">Количество монет</p>
                    <input
                        type="number"
                        value={staffCoins}
                        onChange={changeCoins}
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button className="w-full rounded-lg bg-yellow py-3 text-darkgrey text-sm font-bold" onClick={sendCoins}>Закинуть монеты</button>
                </div>
            </main>
        </section>
    );
};

export default StaffGiveCoins;
