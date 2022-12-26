import { useDispatch, useSelector } from "react-redux";
import { getUserProfileData } from "../store/reducers/userSlice";
import { useEffect } from "react";

import logopic from "../assets/Main/logo.png";
import { NavLink } from "react-router-dom";

const UserBoughtItems = () => {
    const user = useSelector(getUserProfileData());

    useEffect(() => {
        if (user) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%", user);
        }
    }, [user]);

    return (
        <section className="bg-darkgrey min-h-[100vh]">
            <NavLink
                className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-10"
                to="/"
            >
                <img src={logopic} alt="logopic" className="w-[132px]" />
            </NavLink>
            <div className="wrap pt-28 text-white pb-20">
                <h1 className="h1 text-center">Приобретенные товары</h1>
                <ul className="space-y-3 mt-3">
                    {user.purchasedShopItems !== []
                        ? user.purchasedShopItems.map((item) => {
                              return (
                                  <li
                                      key={Math.random()}
                                      className=" p-4 bg-grey rounded-lg"
                                  >
                                      <p>{item.tag}</p>
                                      <p>{item.title}</p>
                                  </li>
                              );
                          })
                        : <li className="p">Товаров пока нет</li>    
                    }
                </ul>
            </div>
        </section>
    );
};

export default UserBoughtItems;
