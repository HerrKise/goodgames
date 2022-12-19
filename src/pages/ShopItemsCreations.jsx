import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/reducers/shopSlice";

import { NavLink } from "react-router-dom";

import logopic from "../assets/Main/logo.png";

const ShopItemsCreation = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [title, setTitle] = useState("");
    const [specifications, setSpecifications] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [tag, setTag] = useState("");

    const dispatch = useDispatch();

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const changeSpecifications = (e) => {
        setSpecifications(e.target.value);
    };

    const changeAmount = (e) => {
        setAmount(e.target.value);
    };

    const changePrice = (e) => {
        setPrice(e.target.value);
    };

    const uploadShopItem = () => {
        dispatch(
            createProduct({
                tag: tag,
                title: title,
                description: value,
                specifications: specifications,
                amount: amount,
                price: price,
            })
        );
    };

    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-50" to="/">
                <img src={logopic} alt="logopic" className="w-[132px]"/>
            </NavLink>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Создание товара</h1>
                <div className="space-y-3 p-4 bg-grey rounded-lg my-5">
                    
                    <MDEditor value={value} onChange={setValue} />
                    <MDEditor.Markdown
                        source={value}
                        style={{ whiteSpace: "pre-wrap" }}
                    />
                    <select
                        onChange={(e) => {
                            setTag(e.target.value);
                        }}
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    >
                        <option>Выберите тип поста</option>
                        <option value="Product">Product</option>
                        <option value="Merch">Merch</option>
                    </select>
                    <input 
                        type="text" 
                        onChange={changeTitle} 
                        value={title} 
                        placeholder="Название товара" 
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                    <input
                        type="text"
                        onChange={changeSpecifications}
                        value={specifications}
                        placeholder="Описание товара" 
                        className="bg-darkgrey w-full p-3 rounded-lg p"
                    />
                    <div className="flex items-center justify-between border-b-[1px] border-white/20 py-3 space-x-4">
                        <p className="p w-28">Количество</p>
                        <input
                            type="number"
                            onChange={changeAmount}
                            value={amount}
                            className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                        <p className="p w-28">Цена</p>
                        <input 
                            type="number"
                            onChange={changePrice} 
                            value={price}
                            className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                        />
                    </div>

                    <button
                        className='w-full rounded-lg bg-yellow py-4 my-5 text-darkgrey text-sm font-bold'
                        onClick={uploadShopItem}
                    >
                        Создать товар
                    </button>
                </div>
            </main>
        </section>
    );
};

export default ShopItemsCreation;
