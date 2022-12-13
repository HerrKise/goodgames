import likeicon from "../../assets/Icons/likeicon.svg"
import infoicon from "../../assets/Icons/infoicon.svg"

export const Button = ({white, text, info, like}) => {

    return (
        <button className={white ? "whitebtn flex items-center" : "yellowbtn flex items-center"}>
            <img src={likeicon} alt="likeicon" className={like ? "block mr-3" : "hidden"}/>
            <img src={infoicon} alt="infoicon" className={info ? "block mr-3" : "hidden"}/>
            {text}
        </button>
    )
}
