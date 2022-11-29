import { useParams } from "react-router"

const UserProfile = () => {
    const id = useParams();
    return(
        <section className="w-[100%] min-h-[100vh] bg-[black] fixed " >
            <div className="relative w-[1240px] flex flex-col items-center">
                
                <div className="bg-white w-[500px] h-[500px] absolute top-[100px]">
                    <p>id:  {id}</p>
                </div>
            </div>
        </section>
    )
}

export default UserProfile