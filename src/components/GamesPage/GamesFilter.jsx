import { Button } from "../UI/Button"

export const GamesFilter = ({popupVisible, setPopupVisible}) => {
    return (
        <div className={popupVisible ? "fixed top-0 left-0 w-full h-full bg-grey z-[200] overflow-scroll" : "hidden"}>
            <form className="py-10 wrap space-y-5 relative">
                <div 
                    className="absolute z-[210] top-[70px] right-3"
                    onClick={() => setPopupVisible(false)}
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.9925 1.1955C14.1419 1.34487 14.2238 1.54942 14.2204 1.76413C14.2169 1.97884 14.1283 2.18613 13.974 2.3404L8.7389 7.57554L13.8079 12.6446C13.9573 12.794 14.0393 12.9985 14.0358 13.2132C14.0324 13.4279 13.9438 13.6352 13.7895 13.7895C13.6352 13.9438 13.4279 14.0324 13.2132 14.0358C12.9985 14.0393 12.794 13.9573 12.6446 13.8079L7.57554 8.7389L2.3404 13.974C2.18613 14.1283 1.97884 14.2169 1.76413 14.2204C1.54941 14.2238 1.34487 14.1419 1.1955 13.9925C1.04612 13.8431 0.964143 13.6386 0.967604 13.4239C0.971065 13.2091 1.05968 13.0019 1.21395 12.8476L6.44909 7.61245L1.38004 2.54341C1.23067 2.39403 1.14869 2.18949 1.15215 1.97477C1.15561 1.76006 1.24423 1.55277 1.3985 1.3985C1.55277 1.24423 1.76006 1.15561 1.97477 1.15215C2.18949 1.14869 2.39403 1.23067 2.54341 1.38004L7.61245 6.44909L12.8476 1.21395C13.0019 1.05968 13.2091 0.971066 13.4239 0.967605C13.6386 0.964144 13.8431 1.04612 13.9925 1.1955Z" fill="white"/>
                    </svg>
                </div>
                <h1 className="h1 text-center">Фильтры</h1>
                <div className="space-y-5">
                    <h3 className="h3">Тип</h3>
                    <ul className="grid grid-cols-2 gap-3">
                        <label htmlFor="paid" className="w-[175px] h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative">
                            <input type="checkbox" name="paid" id="paid" value="paid" className="w-4 h-4 rounded-full checked:bg-yellow"/>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8238 12.3901C15.1454 12.1351 15.5279 11.9495 15.9373 11.8319V15.7915C15.5332 15.6808 15.1548 15.4916 14.8238 15.2347C14.2656 14.7913 14.0503 14.27 14.0503 13.8124C14.0503 13.3548 14.2656 12.8335 14.8238 12.3901ZM18.0623 22.1877V18.1871C18.5539 18.3075 19.003 18.5101 19.367 18.7835C19.972 19.2368 20.1873 19.7553 20.1873 20.1874C20.1873 20.6195 19.972 21.138 19.367 21.5913C18.9766 21.8754 18.5328 22.0778 18.0623 22.1863V22.1877Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.0001 3.1875C9.37137 3.1875 3.18762 9.37125 3.18762 17C3.18762 24.6287 9.37137 30.8125 17.0001 30.8125C24.6289 30.8125 30.8126 24.6287 30.8126 17C30.8126 9.37125 24.6289 3.1875 17.0001 3.1875ZM18.0626 8.5C18.0626 8.21821 17.9507 7.94796 17.7514 7.7487C17.5522 7.54944 17.2819 7.4375 17.0001 7.4375C16.7183 7.4375 16.4481 7.54944 16.2488 7.7487C16.0496 7.94796 15.9376 8.21821 15.9376 8.5V9.656C15.0492 9.8055 14.2118 10.1735 13.501 10.727C12.4923 11.5288 11.9256 12.6395 11.9256 13.8125C11.9256 14.9869 12.4923 16.0962 13.5024 16.898C14.2135 17.4647 15.0635 17.8146 15.9376 17.969V22.1878C15.467 22.0788 15.0233 21.8759 14.6329 21.5914L13.3876 20.6564C13.276 20.5727 13.149 20.5118 13.0138 20.4772C12.8786 20.4425 12.738 20.4349 12.5999 20.4546C12.3209 20.4944 12.0692 20.6435 11.9001 20.8689C11.731 21.0943 11.6584 21.3777 11.6983 21.6567C11.7382 21.9356 11.8872 22.1873 12.1126 22.3564L13.3579 23.2914C14.113 23.8581 15.014 24.2052 15.9376 24.3539V25.5C15.9376 25.7818 16.0496 26.052 16.2488 26.2513C16.4481 26.4506 16.7183 26.5625 17.0001 26.5625C17.2819 26.5625 17.5522 26.4506 17.7514 26.2513C17.9507 26.052 18.0626 25.7818 18.0626 25.5V24.3525C18.9956 24.2123 19.8807 23.8482 20.6424 23.2914C21.6978 22.4995 22.3126 21.3874 22.3126 20.1875C22.3126 18.9876 21.6978 17.8755 20.6424 17.0836C19.8809 16.5262 18.9958 16.1616 18.0626 16.0211V11.8348C18.4735 11.951 18.8545 12.1366 19.1761 12.3916L19.764 12.8591C19.9848 13.0344 20.2661 13.1148 20.5461 13.0826C20.8261 13.0505 21.0819 12.9084 21.2572 12.6877C21.4325 12.4669 21.5129 12.1856 21.4807 11.9056C21.4486 11.6256 21.3065 11.3698 21.0858 11.1945L20.4979 10.727C19.7872 10.1743 18.9504 9.80672 18.0626 9.65742V8.5V8.5Z" fill="white"/>
                            </svg>
                            <p className="mt-2">Платные</p>
                        </label>
                        <li className="w-[175px] h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center">
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.9805 16.8913L31.5296 14.2141C31.7158 13.892 31.7664 13.5091 31.6703 13.1497C31.5743 12.7903 31.3395 12.4837 31.0174 12.2974L28.3375 10.7484V7.66147C28.3375 7.28933 28.1896 6.93244 27.9265 6.6693C27.6634 6.40617 27.3065 6.25834 26.9343 6.25834H23.8488L22.3012 3.57976C22.1143 3.25833 21.8083 3.02343 21.4495 2.9259C21.2715 2.87766 21.0857 2.86522 20.9029 2.8893C20.7201 2.91339 20.5439 2.97352 20.3845 3.06622L17.7045 4.61527L15.0246 3.06481C14.7023 2.87875 14.3193 2.82833 13.9599 2.92464C13.6004 3.02095 13.2939 3.2561 13.1079 3.57836L11.5588 6.25834H8.47333C8.1012 6.25834 7.74431 6.40617 7.48117 6.6693C7.21803 6.93244 7.0702 7.28933 7.0702 7.66147V10.747L4.39022 12.296C4.23031 12.388 4.09015 12.5107 3.97779 12.657C3.86544 12.8033 3.7831 12.9704 3.73551 13.1486C3.68792 13.3268 3.67601 13.5127 3.70048 13.6956C3.72495 13.8784 3.7853 14.0546 3.87808 14.2141L5.42714 16.8913L3.87808 19.5684C3.69285 19.8908 3.6426 20.2734 3.73827 20.6327C3.83395 20.992 4.06779 21.2989 4.38882 21.4865L7.0688 23.0356V26.1211C7.0688 26.4932 7.21663 26.8501 7.47977 27.1132C7.74291 27.3764 8.0998 27.5242 8.47193 27.5242H11.5588L13.1079 30.2042C13.2321 30.4165 13.4095 30.5929 13.6225 30.7159C13.8356 30.8389 14.077 30.9043 14.323 30.9057C14.5671 30.9057 14.8099 30.8412 15.026 30.7163L17.7031 29.1673L20.3831 30.7163C20.7053 30.9021 21.088 30.9525 21.4473 30.8565C21.8066 30.7605 22.1132 30.5259 22.2998 30.2042L23.8474 27.5242H26.9329C27.3051 27.5242 27.6619 27.3764 27.9251 27.1132C28.1882 26.8501 28.3361 26.4932 28.3361 26.1211V23.0356L31.016 21.4865C31.1757 21.3943 31.3156 21.2715 31.4277 21.1251C31.5399 20.9788 31.6221 20.8117 31.6696 20.6336C31.7172 20.4555 31.7292 20.2697 31.7049 20.0869C31.6806 19.9042 31.6206 19.728 31.5282 19.5684L29.9805 16.8913ZM14.1953 9.86158C14.7537 9.86176 15.2891 10.0838 15.6838 10.4787C16.0785 10.8737 16.3002 11.4093 16.3 11.9677C16.2998 12.5261 16.0778 13.0615 15.6828 13.4562C15.2879 13.8509 14.7523 14.0726 14.1939 14.0724C13.6355 14.0722 13.1001 13.8502 12.7054 13.4552C12.3107 13.0602 12.089 12.5247 12.0892 11.9663C12.0894 11.4079 12.3114 10.8724 12.7064 10.4777C13.1013 10.083 13.6369 9.86139 14.1953 9.86158ZM14.6162 23.3316L12.3712 21.6493L20.79 10.4242L23.035 12.1066L14.6162 23.3316ZM21.211 23.8929C20.9345 23.8928 20.6607 23.8382 20.4053 23.7323C20.1499 23.6265 19.9179 23.4713 19.7224 23.2757C19.527 23.0802 19.372 22.848 19.2663 22.5925C19.1605 22.3371 19.1062 22.0633 19.1063 21.7868C19.1064 21.5103 19.1609 21.2365 19.2668 20.9811C19.3727 20.7257 19.5278 20.4937 19.7234 20.2982C19.919 20.1028 20.1511 19.9478 20.4066 19.8421C20.6621 19.7364 20.9359 19.682 21.2124 19.6821C21.7707 19.6823 22.3062 19.9043 22.7009 20.2992C23.0956 20.6942 23.3172 21.2298 23.3171 21.7882C23.3169 22.3466 23.0949 22.882 22.6999 23.2767C22.3049 23.6714 21.7693 23.8931 21.211 23.8929Z" fill="white"/>
                            </svg>
                            <p className="mt-2">Бесплатные</p>                            
                        </li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <h3 className="h3">Режим</h3>
                    <ul className="grid grid-cols-2 gap-3">
                        <li className="h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.625 8.5C10.625 6.80925 11.2966 5.18774 12.4922 3.99219C13.6877 2.79665 15.3092 2.125 17 2.125C18.6907 2.125 20.3122 2.79665 21.5078 3.99219C22.7033 5.18774 23.375 6.80925 23.375 8.5C23.375 10.1908 22.7033 11.8123 21.5078 13.0078C20.3122 14.2034 18.6907 14.875 17 14.875C15.3092 14.875 13.6877 14.2034 12.4922 13.0078C11.2966 11.8123 10.625 10.1908 10.625 8.5ZM5.31389 28.4821C5.36166 25.4143 6.61388 22.4882 8.80025 20.3357C10.9866 18.1831 13.9318 16.9766 17 16.9766C20.0682 16.9766 23.0133 18.1831 25.1997 20.3357C27.3861 22.4882 28.6383 25.4143 28.6861 28.4821C28.6897 28.6886 28.6331 28.8917 28.5232 29.0666C28.4132 29.2415 28.2547 29.3805 28.067 29.4667C24.595 31.0586 20.8195 31.8802 17 31.875C13.0531 31.875 9.30322 31.0137 5.93297 29.4667C5.74524 29.3805 5.5867 29.2415 5.47675 29.0666C5.3668 28.8917 5.3102 28.6886 5.31389 28.4821Z" fill="white"/>
                            </svg>
                            <p className="mt-2">Solo</p>
                        </li>
                        <li className="h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.375 9.03125C6.375 7.48139 6.99068 5.99501 8.0866 4.89909C9.18251 3.80318 10.6689 3.1875 12.2188 3.1875C13.7686 3.1875 15.255 3.80318 16.3509 4.89909C17.4468 5.99501 18.0625 7.48139 18.0625 9.03125C18.0625 10.5811 17.4468 12.0675 16.3509 13.1634C15.255 14.2593 13.7686 14.875 12.2188 14.875C10.6689 14.875 9.18251 14.2593 8.0866 13.1634C6.99068 12.0675 6.375 10.5811 6.375 9.03125ZM20.1875 12.2188C20.1875 11.5909 20.3112 10.9691 20.5515 10.389C20.7917 9.80896 21.1439 9.28188 21.5879 8.8379C22.0319 8.39392 22.559 8.04173 23.139 7.80145C23.7191 7.56117 24.3409 7.4375 24.9688 7.4375C25.5966 7.4375 26.2184 7.56117 26.7985 7.80145C27.3785 8.04173 27.9056 8.39392 28.3496 8.8379C28.7936 9.28188 29.1458 9.80896 29.3861 10.389C29.6263 10.9691 29.75 11.5909 29.75 12.2188C29.75 13.4868 29.2463 14.7029 28.3496 15.5996C27.4529 16.4963 26.2368 17 24.9688 17C23.7007 17 22.4846 16.4963 21.5879 15.5996C20.6912 14.7029 20.1875 13.4868 20.1875 12.2188ZM2.125 27.0938C2.125 24.4167 3.18845 21.8493 5.08139 19.9564C6.97434 18.0634 9.54172 17 12.2188 17C14.8958 17 17.4632 18.0634 19.3561 19.9564C21.2491 21.8493 22.3125 24.4167 22.3125 27.0938V27.098L22.3111 27.2666C22.3081 27.4467 22.2593 27.6232 22.1693 27.7793C22.0794 27.9354 21.9512 28.0661 21.7968 28.1591C18.9057 29.9001 15.5936 30.8177 12.2188 30.8125C8.71675 30.8125 5.43858 29.8435 2.64208 28.1591C2.48746 28.0663 2.35899 27.9357 2.26877 27.7796C2.17856 27.6234 2.12957 27.4469 2.12642 27.2666L2.125 27.0938ZM24.4375 27.098L24.4361 27.302C24.4282 27.7742 24.3154 28.2387 24.106 28.662C26.5791 28.8145 29.0493 28.3215 31.2743 27.2312C31.4464 27.1471 31.5925 27.018 31.6973 26.8576C31.802 26.6973 31.8615 26.5116 31.8693 26.3202C31.9193 25.132 31.6617 23.951 31.1212 22.8916C30.5808 21.8321 29.7759 20.9302 28.7846 20.2732C27.7933 19.6162 26.6491 19.2263 25.4628 19.1413C24.2766 19.0563 23.0885 19.279 22.0136 19.788C23.5906 21.8968 24.4407 24.4605 24.4361 27.0938V27.098H24.4375Z" fill="white"/>
                            </svg>
                            <p className="mt-2">Duo</p>                            
                        </li>
                        <li className="col-end-2 h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.6875 9.5625C11.6875 8.15354 12.2472 6.80228 13.2435 5.806C14.2398 4.80971 15.591 4.25 17 4.25C18.409 4.25 19.7602 4.80971 20.7565 5.806C21.7528 6.80228 22.3125 8.15354 22.3125 9.5625C22.3125 10.9715 21.7528 12.3227 20.7565 13.319C19.7602 14.3153 18.409 14.875 17 14.875C15.591 14.875 14.2398 14.3153 13.2435 13.319C12.2472 12.3227 11.6875 10.9715 11.6875 9.5625ZM22.3125 13.8125C22.3125 12.6853 22.7603 11.6043 23.5573 10.8073C24.3543 10.0103 25.4353 9.5625 26.5625 9.5625C27.6897 9.5625 28.7707 10.0103 29.5677 10.8073C30.3647 11.6043 30.8125 12.6853 30.8125 13.8125C30.8125 14.9397 30.3647 16.0207 29.5677 16.8177C28.7707 17.6147 27.6897 18.0625 26.5625 18.0625C25.4353 18.0625 24.3543 17.6147 23.5573 16.8177C22.7603 16.0207 22.3125 14.9397 22.3125 13.8125ZM3.1875 13.8125C3.1875 12.6853 3.63527 11.6043 4.4323 10.8073C5.22933 10.0103 6.31033 9.5625 7.4375 9.5625C8.56467 9.5625 9.64567 10.0103 10.4427 10.8073C11.2397 11.6043 11.6875 12.6853 11.6875 13.8125C11.6875 14.9397 11.2397 16.0207 10.4427 16.8177C9.64567 17.6147 8.56467 18.0625 7.4375 18.0625C6.31033 18.0625 5.22933 17.6147 4.4323 16.8177C3.63527 16.0207 3.1875 14.9397 3.1875 13.8125ZM8.93917 21.4157C9.80326 20.0614 10.9949 18.9469 12.4038 18.175C13.8127 17.4032 15.3935 16.9991 17 17C18.3456 16.9988 19.6762 17.2817 20.9049 17.8304C22.1335 18.379 23.2325 19.181 24.1297 20.1838C25.0269 21.1865 25.7023 22.3675 26.1115 23.6493C26.5207 24.9312 26.6546 26.285 26.5044 27.6222C26.4861 27.7883 26.4288 27.9477 26.3372 28.0876C26.2456 28.2274 26.1224 28.3436 25.9774 28.4268C23.2455 29.9944 20.1497 30.8171 17 30.8125C13.7346 30.8125 10.6675 29.9455 8.02258 28.4268C7.87764 28.3436 7.75438 28.2274 7.66281 28.0876C7.57124 27.9477 7.51395 27.7883 7.49558 27.6222C7.25766 25.4499 7.76682 23.2614 8.93917 21.4172V21.4157Z" fill="white"/>
                                <path d="M7.19949 20.1932C5.80231 22.3499 5.15135 24.9055 5.34649 27.4678C4.49579 27.3388 3.65911 27.1301 2.84749 26.8444L2.68458 26.7878C2.53922 26.7362 2.41194 26.6435 2.31815 26.5211C2.22437 26.3986 2.1681 26.2516 2.15616 26.0978L2.14199 25.9264C2.08477 25.2152 2.1714 24.4997 2.39671 23.8227C2.62203 23.1457 2.98142 22.5211 3.45343 21.986C3.92545 21.4509 4.50041 21.0164 5.14402 20.7084C5.78763 20.4003 6.48669 20.2251 7.19949 20.1932ZM28.6535 27.4678C28.8486 24.9055 28.1977 22.3499 26.8005 20.1932C27.5133 20.2251 28.2124 20.4003 28.856 20.7084C29.4996 21.0164 30.0745 21.4509 30.5465 21.986C31.0186 22.5211 31.3779 23.1457 31.6033 23.8227C31.8286 24.4997 31.9152 25.2152 31.858 25.9264L31.8438 26.0978C31.8316 26.2514 31.7752 26.3981 31.6815 26.5203C31.5877 26.6424 31.4606 26.7349 31.3154 26.7863L31.1525 26.843C30.3492 27.1263 29.5148 27.3374 28.6535 27.4678Z" fill="white"/>
                            </svg>
                            <p className="mt-2">Squad</p>                            
                        </li>
                    </ul>
                </div>
                <div  className="space-y-5">
                    <h3 className="h3">Вид</h3>
                    <ul className="grid grid-cols-2 gap-3">
                        <li className="w-[175px] h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.84 21.05C17.9566 21.05 19.0274 20.6065 19.8169 19.8169C20.6065 19.0274 21.05 17.9566 21.05 16.84C21.05 15.7234 20.6065 14.6526 19.8169 13.8631C19.0274 13.0736 17.9566 12.63 16.84 12.63C15.7234 12.63 14.6526 13.0736 13.8631 13.8631C13.0736 14.6526 12.63 15.7234 12.63 16.84C12.63 17.9566 13.0736 19.0274 13.8631 19.8169C14.6526 20.6065 15.7234 21.05 16.84 21.05Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.85661 16.064C3.94477 9.78965 9.86262 5.2625 16.8414 5.2625C23.816 5.2625 29.731 9.78544 31.822 16.0541C31.9904 16.5621 31.9904 17.1094 31.822 17.616C29.7352 23.8903 23.816 28.4175 16.8386 28.4175C9.86403 28.4175 3.94757 23.8946 1.85801 17.6259C1.68926 17.1189 1.68926 16.5709 1.85801 16.064H1.85661ZM24.2075 16.84C24.2075 18.794 23.4313 20.6679 22.0496 22.0496C20.6679 23.4313 18.794 24.2075 16.84 24.2075C14.886 24.2075 13.0121 23.4313 11.6304 22.0496C10.2487 20.6679 9.4725 18.794 9.4725 16.84C9.4725 14.886 10.2487 13.0121 11.6304 11.6304C13.0121 10.2487 14.886 9.4725 16.84 9.4725C18.794 9.4725 20.6679 10.2487 22.0496 11.6304C23.4313 13.0121 24.2075 14.886 24.2075 16.84Z" fill="white"/>
                            </svg>
                            <p className="mt-2">От 1 лица</p>
                        </li>
                        <li className="w-[175px] h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.84 8.42C18.3901 8.42 19.6467 7.16342 19.6467 5.61334C19.6467 4.06326 18.3901 2.80667 16.84 2.80667C15.2899 2.80667 14.0333 4.06326 14.0333 5.61334C14.0333 7.16342 15.2899 8.42 16.84 8.42Z" fill="white"/>
                                <path d="M16.84 25.26H19.6467V18.2433H22.4534V12.63C22.4534 11.0821 21.1946 9.82333 19.6467 9.82333H14.0334C12.4855 9.82333 11.2267 11.0821 11.2267 12.63V18.2433H14.0334V25.26H16.84Z" fill="white"/>
                                <path d="M25.8859 15.9784L24.6327 18.4889C26.8149 19.5765 28.0666 21.0219 28.0666 22.4533C28.0666 25.1084 23.4567 28.0667 16.84 28.0667C10.2233 28.0667 5.61331 25.1084 5.61331 22.4533C5.61331 21.0219 6.86508 19.5765 9.04586 18.4889L7.79268 15.9784C4.62396 17.5585 2.80664 19.9175 2.80664 22.4533C2.80664 27.1741 8.97148 30.8733 16.84 30.8733C24.7085 30.8733 30.8733 27.1741 30.8733 22.4533C30.8733 19.9175 29.056 17.5585 25.8859 15.9784Z" fill="white"/>
                            </svg>
                            <p className="mt-2">От 3 лица</p>                            
                        </li>
                    </ul>
                </div>
                <Button text="Применить"></Button>
            </form>
        </div>
    )
}