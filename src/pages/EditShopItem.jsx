import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { createProduct, updateProduct } from "../store/reducers/shopSlice";

import logopic from "../assets/Main/logo.png";
import { NavLink } from "react-router-dom";

const EditShopItem = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [title, setTitle] = useState("");
    const [specifications, setSpecifications] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [tag, setTag] = useState("");
    const dispatch = useDispatch();

    const { id } = useParams();

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

    const editShopItem = () => {
        console.log(12345);
        dispatch(
            updateProduct({
                id: id,
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
            <NavLink
                className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-10"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </NavLink>
            <div className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Редактирование товара</h1>
                <div className="space-y-3 mt-3 p-4 bg-grey rounded-lg">
                    <p className="p">Описание товара</p>
                    <MDEditor value={value} onChange={setValue} />
                    <MDEditor.Markdown
                        source={value}
                        style={{ whiteSpace: "pre-wrap" }}
                    />
                    <select
                        className="bg-darkgrey w-full py-4 px-7 rounded-lg "
                        onChange={(e) => {
                            setTag(e.target.value);
                        }}
                    >
                        <option>Выберите тип товара</option>
                        <option value="Product">Product</option>
                        <option value="Merch">Merch</option>
                    </select>
                    <input type="text" onChange={changeTitle} value={title} 
                    placeholder="Название товара" className="bg-darkgrey w-full py-4 px-7 rounded-lg"/>
                    <input
                        type="text"
                        onChange={changeSpecifications}
                        value={specifications}
                        placeholder="Особенности товара" className="bg-darkgrey w-full py-4 px-7 rounded-lg"
                    />
                    <input
                        type="number"
                        onChange={changeAmount}
                        value={amount}
                        placeholder="Количество товара" className="bg-darkgrey w-full py-4 px-7 rounded-lg"
                    />
                    <input type="number" onChange={changePrice} value={price} 
                        placeholder="Цена товара" className="bg-darkgrey w-full py-4 px-7 rounded-lg"/>

                    <button
                        className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold"
                        onClick={editShopItem}
                    >
                        Редактировать товар
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EditShopItem;
