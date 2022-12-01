import { NavLink } from "react-router-dom";

const StaffData = ({ users }) => {
    return (
        <section className="w-[100%] bg-yellow-400">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <p>Текущее количество пользователей: {users.totalCount}</p>
                <ul className="bg-gray-200 mt-[30px]">
                    {users.items.map((user) => {
                        return (
                            <li
                                className="border-[1px] border-black"
                                key={user.id}
                            >
                                <p>nickname: {user.profile.nickname}</p>
                                <p>id: {user.id} </p>
                                <NavLink to={`/staff/user-profile/${user.id}`}>
                                    Больше информации
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default StaffData;
