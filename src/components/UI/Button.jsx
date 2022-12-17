import likeicon from "../../assets/Icons/likeicon.svg"
import infoicon from "../../assets/Icons/infoicon.svg"

export const Button = ({white, text, info, like}) => {

    return (
        <button className={white ? "whitebtn flex items-center" : "yellowbtn flex items-center"}>
            <svg  className={info ? "block mr-3" : "hidden"} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.875 10C1.875 5.5125 5.5125 1.875 10 1.875C14.4875 1.875 18.125 5.5125 18.125 10C18.125 14.4875 14.4875 18.125 10 18.125C5.5125 18.125 1.875 14.4875 1.875 10ZM9.13 8.79833C10.085 8.32083 11.1608 9.18417 10.9017 10.22L10.3108 12.5833L10.3458 12.5667C10.4927 12.5021 10.6587 12.4965 10.8096 12.551C10.9605 12.6054 11.0846 12.7158 11.1564 12.8593C11.2281 13.0028 11.2419 13.1684 11.195 13.3217C11.148 13.4751 11.0439 13.6046 10.9042 13.6833L10.8708 13.7017C9.915 14.1792 8.83917 13.3158 9.09833 12.28L9.69 9.91667L9.655 9.93333C9.58128 9.9743 9.50003 9.99993 9.41615 10.0087C9.33226 10.0174 9.24748 10.0091 9.1669 9.98418C9.08632 9.95928 9.01161 9.91834 8.94727 9.86381C8.88294 9.80927 8.8303 9.74229 8.79254 9.66687C8.75478 9.59146 8.73267 9.50919 8.72754 9.425C8.72242 9.34082 8.73439 9.25647 8.76272 9.17704C8.79106 9.0976 8.83518 9.02472 8.89243 8.96279C8.94968 8.90086 9.01887 8.85115 9.09583 8.81667L9.13 8.79833ZM10 7.5C10.1658 7.5 10.3247 7.43415 10.4419 7.31694C10.5592 7.19973 10.625 7.04076 10.625 6.875C10.625 6.70924 10.5592 6.55027 10.4419 6.43306C10.3247 6.31585 10.1658 6.25 10 6.25C9.83424 6.25 9.67527 6.31585 9.55806 6.43306C9.44085 6.55027 9.375 6.70924 9.375 6.875C9.375 7.04076 9.44085 7.19973 9.55806 7.31694C9.67527 7.43415 9.83424 7.5 10 7.5Z" fill="#191919"/>
            </svg>
            <img src={likeicon} alt="likeicon" className={like ? "block mr-3" : "hidden"}/>
            {text}
        </button>
    )
}