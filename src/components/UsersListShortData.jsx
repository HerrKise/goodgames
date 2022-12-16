import { NavLink } from "react-router-dom";

const UsersListShortData = ({ users }) => {
    return (
            <div className="pt-3">
                <h3 className="h3">Текущее количество пользователей: {users.totalCount}</h3>
                <ul className="space-y-3 pt-3">
                    {users.items.map((user) => {
                        return (
                            <li
                                className="bg-[#19191973] rounded-lg p-3"
                                key={user.id}
                            >
                                <p><span className="p">Никнейм:</span> {user.profile.nickname}</p>
                                <p><span className="p">ID:</span> {user.id} </p>
                                <NavLink to={`/staff/user-profile/${user.id}`} className="flex justify-end">
                                    <button className='rounded-lg bg-grey p-2 text-xs font-semibold'>
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
