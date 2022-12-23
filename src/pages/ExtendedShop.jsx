import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
    buyProduct,
    getExtendedProductsList,
    getProductsList,
    getSelectedShopItem,
    getSelectedShopItemData,
    getShopListData,
    getShopLoadingStatus,
} from "../store/reducers/shopSlice";

import logopic from "../assets/Main/logo.png";
import { NavLink } from "react-router-dom";

const ExtendedShop = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getShopLoadingStatus());
    const shopList = useSelector(getShopListData());
    const selectedShopListItem = useSelector(getSelectedShopItemData());

    useEffect(() => {
        dispatch(getExtendedProductsList());
    }, []);

    useEffect(() => {
        if (!isLoading && shopList) {
            console.log(shopList);
        }
    }, [isLoading]);

    const navigate = useNavigate();

    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink
                className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-10"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </NavLink>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Товары магазина</h1>
                <ul className="space-y-3 my-5">
                    {shopList
                        ? shopList.items.map((shopListItem) => {
                              return (
                                  <li
                                      key={shopListItem.id}
                                      className="p-4 bg-grey rounded-lg text-sm space-y-3"
                                  >
                                      <div className="grid grid-cols-2">
                                        <p className="border-[1px] border-white/30 p-2">Название товара</p>
                                        <p className="border-[1px] border-white/30 p-2">{shopListItem.title}</p>
                                        <p className="border-[1px] border-white/30 p-2">Тип товара</p>
                                        <p className="border-[1px] border-white/30 p-2">{shopListItem.tag}</p>
                                        <p className="border-[1px] border-white/30 p-2">Количество</p>
                                        <p className="border-[1px] border-white/30 p-2">{shopListItem.amount}</p>
                                        <p className="border-[1px] border-white/30 p-2">Цена</p>
                                        <p className="border-[1px] border-white/30 p-2">{shopListItem.price}</p>
                                        <p className="border-[1px] border-white/30 p-2">Описание</p>
                                        <p className="border-[1px] border-white/30 p-2">{shopListItem.description}</p>
                                        <p className="border-[1px] border-white/30 p-2">Особенности</p>
                                        <p className="border-[1px] border-white/30 p-2">{shopListItem.specifications}</p>
                                        <p className="border-[1px] border-white/30 p-2">Куплено</p>
                                        <p className="border-[1px] border-white/30 p-2">
                                          {shopListItem.amountUsersPurchased} шт.
                                        </p>
                                        <p className="border-[1px] border-white/30 p-2">Cоздатель</p>
                                        <p className="border-[1px] border-white/30 p-2">
                                          {shopListItem.createdBy.nickname}
                                        </p>
                                      </div>
                                      <button
                                          className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold"
                                          onClick={() => {
                                              navigate(
                                                  `/staff/edit-shop-item/${shopListItem.id}`
                                              );
                                          }}
                                      >
                                          Редактировать
                                      </button>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
            </main>
        </section>
    );
};

export default ExtendedShop;
