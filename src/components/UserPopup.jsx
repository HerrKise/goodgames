const UserPopup = (props) => {
    console.log(props);
    return(
        props.isVisible ? 
        <section className="w-[100%] min-h-[100vh] bg-[black] fixed " >
            <div className="relative w-[1240px] flex flex-col items-center">
                
                <div className="bg-white w-[500px] h-[500px] absolute top-[100px]">
                <button className="text-white absolute right-[-15px] top-[-30px]" onClick={()=>{props.setVisible(false)}}>X</button>
                    <p>nickname: {props.userName}</p>
                    <p>id:  {props.id}</p>
                </div>
            </div>
        </section>
        : ""
    )
}

export default UserPopup