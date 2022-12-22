import { useDispatch, useSelector } from "react-redux";
import { getUserProfileData } from "../store/reducers/userSlice";
import { useEffect } from "react";

const UserBoughtItems = () => {
    const user = useSelector(getUserProfileData());

    useEffect(() => {
        if (user) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%", user);
        }
    }, [user]);

    return (
        <section className="w-full h-[100vh] bg-slate-600">
            <div className="w-[1240px] mx-auto">
                <ul className="flex w-full flex-wrap gap-4">
                    {user.purchasedShopItems
                        ? user.purchasedShopItems.map((item) => {
                              return (
                                  <li
                                      key={Math.random()}
                                      className="border-black border-[1px] p-3 rounded-[15px]"
                                  >
                                      <p>{item.tag}</p>
                                      <p>{item.title}</p>
                                  </li>
                              );
                          })
                        : ""}
                </ul>
            </div>
        </section>
    );
};

export default UserBoughtItems;
