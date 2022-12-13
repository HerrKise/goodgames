import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/reducers/shopSlice";

const ShopItemsCreation = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [title, setTitle] = useState("");
    const [specifications, setSpecifications] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [tag, setTag] = useState("");

    const dispatch = useDispatch();

    const changeTag = (e) => {
        setTag(e.target.value);
    };

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
        <section className="bg-gray-400 w-[100%] min-h-[100vh]">
            <div className="w-[1240px] flex flex-col items-center justify-center mx-auto">
                <div className="container">
                    <p>Создание товара</p>
                    <MDEditor value={value} onChange={setValue} />
                    <MDEditor.Markdown
                        source={value}
                        style={{ whiteSpace: "pre-wrap" }}
                    />
                    <p>Tag</p>
                    <input type="text" onChange={changeTag} value={tag} />
                    <p>Title</p>
                    <input type="text" onChange={title} value={changeTitle} />
                    <p>Specifications</p>
                    <input
                        type="text"
                        onChange={changeSpecifications}
                        value={specifications}
                    />
                    <p>Amount</p>
                    <input
                        type="number"
                        onChange={changeAmount}
                        value={amount}
                    />
                    <p></p>
                    <input type="text" onChange={changePrice} value={price} />

                    <button
                        className="bg-yellow-700 rounded-[5px]"
                        onClick={uploadShopItem}
                    >
                        Создать товар
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShopItemsCreation;
