import { useState } from "react"
import { NavLink } from "react-router-dom";


const StaffData =() => {

    const [users, setUsers] = useState([
        {
            id: "id1",
            nickname: "nickname1",
            role: "moder",
        }, 
        {
            id: "id2",
            nickname: "nickname2",
            role: "moder",
        },
        {
            id: "id3",
            nickname: "nickname3",
            role: "redactor",
        },
        {
            id: "id4",
            nickname: "nickname4",
            role: "redactor",
        },
        {
            id: "id5",
            nickname: "nickname5",
            role: "tournament owner",
        },
    ]);

    return(
        <section className="w-[100%] bg-yellow-400">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <ul>
                {users.map(user => {
                    return(
                        <li className="border-[1px] border-black" key={user.id}>
                            <p>nickname: {user.nickname}</p>
                            <p>id: {user.id} </p>
                            <p>role: {user.role}</p>
                            <NavLink to={`/staff/user-profile/${user.id}`}>Больше информации</NavLink>
                        </li>
                    )
                })}
                </ul>
            </div>
        </section>
    )
}

export default StaffData