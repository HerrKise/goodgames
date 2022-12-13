import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductsList,
    getSelectedShopItemData,
    getShopListData,
    getShopLoadingStatus,
} from "../store/reducers/shopSlice";

const Shop = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getShopLoadingStatus());
    const shopList = useSelector(getShopListData());
    const selectedShopListItem = useSelector(getSelectedShopItemData());

    useEffect(() => {
        dispatch(getProductsList());
    }, []);

    useEffect(() => {
        if (!isLoading && shopList) {
            console.log(shopList);
        }
    }, [isLoading]);

    return (
        <section className="bg-gray-400 w-[100%] min-h-[100vh]">
            <div className="w-[1240px] flex flex-col items-center justify-center mx-auto">
                <h2>Shop</h2>
                <ul>
                    {shopList
                        ? shopList.items.map((shopListItem) => {
                              return (
                                  <li>
                                      <p>listItem</p>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
            </div>
        </section>
    );
};

export default Shop;
