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
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Extended shop for staff</h1>
                <ul className="space-y-3 p-4 bg-grey rounded-lg my-5">
                    {shopList
                        ? shopList.items.map((shopListItem) => {
                              return (
                                  <li
                                      key={shopListItem.id}
                                      className="flex flex-col items-center justify-around bg-yellow-200 w-[300px] h-[400px]"
                                  >
                                      <p>{shopListItem.title}</p>
                                      <p>{shopListItem.tag}</p>
                                      <p>{shopListItem.description}</p>
                                      <p>{shopListItem.specifications}</p>
                                      <p>{shopListItem.amount}</p>
                                      <p>{shopListItem.price} Рублей</p>
                                      <p>
                                          Куплено : -
                                          {shopListItem.amountUsersPurchased}
                                      </p>
                                      <p>
                                          Создатель -{" "}
                                          {shopListItem.createdBy.nickname}
                                      </p>
                                      <button
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
