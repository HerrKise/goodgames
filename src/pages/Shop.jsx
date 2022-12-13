import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    buyProduct,
    getProductsList,
    getSelectedShopItem,
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

    const buyShopItem = (id) => {
        console.log(id);
        dispatch(buyProduct({ shopItemId: id }));
    };

    return (
        <section className="bg-gray-400 w-[100%] min-h-[100vh]">
            <div className="w-[1240px] flex flex-col items-center justify-center mx-auto">
                <h2>Shop</h2>
                <ul className="flex w-900px gap-5 flex-wrap overflow-scroll h-[400px]">
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
                                      <button
                                          onClick={() => {
                                              buyShopItem(shopListItem.id);
                                          }}
                                      >
                                          Купить!!!!!
                                      </button>
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
