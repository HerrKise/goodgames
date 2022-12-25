import { NavLink } from "react-router-dom";

const UsersListShortData = ({ users }) => {
    return (
            <div className="pt-3">
                <h3 className="h3">Текущее количество пользователей: {users.totalCount}</h3>
                <ul className="space-y-3 pt-3">
                    {users.items.map((user) => {
                        return (
                            <li
                                className="bg-[#19191973] rounded-lg p-5 "
                                key={user.id}
                            >
                                <p className="text-base break-all"><span className="p">ID:</span> {user.id} </p>
                                <p className="text-base break-all"><span className="p">Никнейм:</span> {user.profile.nickname}</p>
                                
                                <NavLink to={`/staff/user-profile/${user.id}`} className="flex justify-end pt-2">
                                    <button className='rounded-lg bg-darkgrey p-3 text-sm font-semibold md:text-base'>
                                        Больше информации
                                    </button>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
    );
};

export default UsersListShortData;
