import promobg from "../../assets/Main/gg-bg.png"

export const TournamentPromo = ({tournament}) => {

    console.log(tournament)
    return (
        <section className="w-full h-[450px] relative">
            <img src={promobg} alt="promopic" className="absolute top-0 h-full w-full object-top object-cover"/>
            <div className="wrap relative z-20 h-full flex flex-col items-start justify-end space-y-3">
                <div className="flex items-center space-x-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" clipPath="url(#clip0_366_441)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.01372 1.5295V2.03C2.40997 2.11633 1.81264 2.2225 1.2223 2.34675C1.11183 2.37016 1.01468 2.43538 0.951186 2.52877C0.887693 2.62216 0.862772 2.73649 0.881638 2.84783C1.02897 3.71352 1.46132 4.50515 2.11003 5.097C2.75874 5.68885 3.58661 6.04698 4.46214 6.1145C4.92825 6.49544 5.47572 6.76408 6.06222 6.89967C6.00648 7.56176 5.78304 8.19875 5.41297 8.75058H4.98189C4.37755 8.75058 3.88814 9.24058 3.88814 9.84433V11.3756H3.45064C3.10254 11.3756 2.7687 11.5139 2.52256 11.76C2.27642 12.0061 2.13814 12.34 2.13814 12.6881C2.13814 12.9296 2.33414 13.1256 2.57564 13.1256H11.3256C11.4417 13.1256 11.5529 13.0795 11.635 12.9974C11.717 12.9154 11.7631 12.8041 11.7631 12.6881C11.7631 12.34 11.6249 12.0061 11.3787 11.76C11.1326 11.5139 10.7987 11.3756 10.4506 11.3756H10.0131V9.84433C10.0131 9.24 9.52314 8.75058 8.91939 8.75058H8.4883C8.11841 8.19871 7.89517 7.56171 7.83964 6.89967C8.42619 6.76391 8.97367 6.49506 9.43972 6.11392C10.3154 6.04652 11.1434 5.68845 11.7922 5.09659C12.441 4.50473 12.8734 3.71302 13.0208 2.84725C13.0395 2.73591 13.0144 2.62166 12.9508 2.52839C12.8872 2.43511 12.79 2.37003 12.6796 2.34675C12.0863 2.22142 11.489 2.11578 10.8887 2.03V1.52892C10.8887 1.42221 10.8496 1.31921 10.7789 1.23928C10.7083 1.15935 10.6108 1.10801 10.5049 1.09492C9.32583 0.948141 8.1388 0.874694 6.95064 0.875001C5.74722 0.875001 4.5613 0.949668 3.39639 1.09492C3.29059 1.10814 3.19327 1.15953 3.1227 1.23945C3.05213 1.31937 3.01317 1.4223 3.01314 1.52892L3.01372 1.5295ZM3.01372 3.06308C3.01372 3.76075 3.19572 4.41642 3.51364 4.98458C3.11934 4.80777 2.76678 4.54976 2.479 4.2274C2.19122 3.90504 1.97469 3.52559 1.84355 3.11383C2.23207 3.03844 2.62223 2.97173 3.01372 2.91375V3.06308ZM10.8887 3.06308V2.91375C11.2819 2.97208 11.6721 3.03858 12.0589 3.11383C11.9278 3.5256 11.7113 3.90507 11.4235 4.22743C11.1357 4.5498 10.7831 4.8078 10.3888 4.98458C10.7176 4.3976 10.8897 3.73587 10.8887 3.06308Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_366_441">
                        <rect width="14" height="14" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p className="text-xs opacity-50">{tournament.eventType}</p>
                </div>
                <h1 className="h1">{tournament.title}</h1>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-yellow"></div>
                    <p className="p">{tournament.organizer.profile.name}</p>
                </div>
                <div className="flex flex-wrap items-center text-[11px] leading-3 gap-3">
                    <div className="bg-[#FFFFFF23] p-2 pr-4 rounded-xl space-x-2 flex items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.56464 6.82683C7.72874 6.6967 7.92393 6.602 8.13286 6.54199V8.56257C7.92663 8.5061 7.73355 8.40956 7.56464 8.27846C7.27981 8.05218 7.16992 7.78615 7.16992 7.55264C7.16992 7.31914 7.27981 7.0531 7.56464 6.82683ZM9.21725 11.8266V9.78504C9.4681 9.84649 9.69727 9.94987 9.88306 10.0894C10.1918 10.3207 10.3016 10.5853 10.3016 10.8058C10.3016 11.0263 10.1918 11.2909 9.88306 11.5222C9.6838 11.6672 9.45735 11.7705 9.21725 11.8259V11.8266Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.67548 2.12903C4.78252 2.12903 1.62695 5.2846 1.62695 9.17756C1.62695 13.0705 4.78252 16.2261 8.67548 16.2261C12.5684 16.2261 15.724 13.0705 15.724 9.17756C15.724 5.2846 12.5684 2.12903 8.67548 2.12903ZM9.21768 4.84C9.21768 4.6962 9.16055 4.55829 9.05887 4.45661C8.95719 4.35493 8.81928 4.29781 8.67548 4.29781C8.53168 4.29781 8.39377 4.35493 8.29209 4.45661C8.19041 4.55829 8.13329 4.6962 8.13329 4.84V5.42991C7.67991 5.5062 7.25262 5.69401 6.88985 5.97644C6.37513 6.38562 6.08596 6.95239 6.08596 7.55097C6.08596 8.15028 6.37513 8.71633 6.89058 9.12551C7.25349 9.41468 7.68724 9.59324 8.13329 9.67204V11.8249C7.89314 11.7693 7.66669 11.6657 7.46747 11.5206L6.83202 11.0434C6.77506 11.0007 6.71024 10.9696 6.64126 10.952C6.57229 10.9343 6.50051 10.9304 6.43003 10.9404C6.28767 10.9608 6.15923 11.0368 6.07295 11.1519C5.98667 11.2669 5.94962 11.4115 5.96996 11.5539C5.99029 11.6962 6.06635 11.8247 6.18139 11.9109L6.81684 12.3881C7.20216 12.6772 7.66194 12.8544 8.13329 12.9303V13.5151C8.13329 13.6589 8.19041 13.7968 8.29209 13.8985C8.39377 14.0002 8.53168 14.0573 8.67548 14.0573C8.81928 14.0573 8.95719 14.0002 9.05887 13.8985C9.16055 13.7968 9.21768 13.6589 9.21768 13.5151V12.9295C9.69377 12.858 10.1455 12.6722 10.5341 12.3881C11.0727 11.984 11.3865 11.4165 11.3865 10.8041C11.3865 10.1918 11.0727 9.62432 10.5341 9.22021C10.1456 8.93576 9.69385 8.74972 9.21768 8.67801V6.54177C9.42732 6.60105 9.62179 6.69575 9.7859 6.82588L10.0859 7.06444C10.1986 7.15389 10.3421 7.19492 10.485 7.17851C10.6279 7.16211 10.7584 7.08961 10.8479 6.97697C10.9373 6.86433 10.9783 6.72077 10.9619 6.57787C10.9455 6.43498 10.873 6.30445 10.7604 6.21501L10.4604 5.97644C10.0978 5.69438 9.67073 5.50682 9.21768 5.43063V4.84Z" fill="white"/>
                        </svg>
                        <span>{!tournament.isPaid ? "Бесплатные" : "Платные"}</span>
                    </div>
                    <div className="bg-[#FFFFFF23] p-2 pr-4 rounded-xl space-x-2 flex items-center">
                        <div className="w-4 h-4">
                            {(() => {
                                switch(tournament.regime) {
                                    case "Solo":
                                        return (
                                            <svg className="w-full h-auto" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.625 8.5C10.625 6.80925 11.2966 5.18774 12.4922 3.99219C13.6877 2.79665 15.3092 2.125 17 2.125C18.6907 2.125 20.3122 2.79665 21.5078 3.99219C22.7033 5.18774 23.375 6.80925 23.375 8.5C23.375 10.1908 22.7033 11.8123 21.5078 13.0078C20.3122 14.2034 18.6907 14.875 17 14.875C15.3092 14.875 13.6877 14.2034 12.4922 13.0078C11.2966 11.8123 10.625 10.1908 10.625 8.5ZM5.31389 28.4821C5.36166 25.4143 6.61388 22.4882 8.80025 20.3357C10.9866 18.1831 13.9318 16.9766 17 16.9766C20.0682 16.9766 23.0133 18.1831 25.1997 20.3357C27.3861 22.4882 28.6383 25.4143 28.6861 28.4821C28.6897 28.6886 28.6331 28.8917 28.5232 29.0666C28.4132 29.2415 28.2547 29.3805 28.067 29.4667C24.595 31.0586 20.8195 31.8802 17 31.875C13.0531 31.875 9.30322 31.0137 5.93297 29.4667C5.74524 29.3805 5.5867 29.2415 5.47675 29.0666C5.3668 28.8917 5.3102 28.6886 5.31389 28.4821Z" fill="white"/>
                                            </svg>
                                        )
                                    case "Duo":
                                        return (
                                            <svg className="w-full h-auto" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.375 9.03125C6.375 7.48139 6.99068 5.99501 8.0866 4.89909C9.18251 3.80318 10.6689 3.1875 12.2188 3.1875C13.7686 3.1875 15.255 3.80318 16.3509 4.89909C17.4468 5.99501 18.0625 7.48139 18.0625 9.03125C18.0625 10.5811 17.4468 12.0675 16.3509 13.1634C15.255 14.2593 13.7686 14.875 12.2188 14.875C10.6689 14.875 9.18251 14.2593 8.0866 13.1634C6.99068 12.0675 6.375 10.5811 6.375 9.03125ZM20.1875 12.2188C20.1875 11.5909 20.3112 10.9691 20.5515 10.389C20.7917 9.80896 21.1439 9.28188 21.5879 8.8379C22.0319 8.39392 22.559 8.04173 23.139 7.80145C23.7191 7.56117 24.3409 7.4375 24.9688 7.4375C25.5966 7.4375 26.2184 7.56117 26.7985 7.80145C27.3785 8.04173 27.9056 8.39392 28.3496 8.8379C28.7936 9.28188 29.1458 9.80896 29.3861 10.389C29.6263 10.9691 29.75 11.5909 29.75 12.2188C29.75 13.4868 29.2463 14.7029 28.3496 15.5996C27.4529 16.4963 26.2368 17 24.9688 17C23.7007 17 22.4846 16.4963 21.5879 15.5996C20.6912 14.7029 20.1875 13.4868 20.1875 12.2188ZM2.125 27.0938C2.125 24.4167 3.18845 21.8493 5.08139 19.9564C6.97434 18.0634 9.54172 17 12.2188 17C14.8958 17 17.4632 18.0634 19.3561 19.9564C21.2491 21.8493 22.3125 24.4167 22.3125 27.0938V27.098L22.3111 27.2666C22.3081 27.4467 22.2593 27.6232 22.1693 27.7793C22.0794 27.9354 21.9512 28.0661 21.7968 28.1591C18.9057 29.9001 15.5936 30.8177 12.2188 30.8125C8.71675 30.8125 5.43858 29.8435 2.64208 28.1591C2.48746 28.0663 2.35899 27.9357 2.26877 27.7796C2.17856 27.6234 2.12957 27.4469 2.12642 27.2666L2.125 27.0938ZM24.4375 27.098L24.4361 27.302C24.4282 27.7742 24.3154 28.2387 24.106 28.662C26.5791 28.8145 29.0493 28.3215 31.2743 27.2312C31.4464 27.1471 31.5925 27.018 31.6973 26.8576C31.802 26.6973 31.8615 26.5116 31.8693 26.3202C31.9193 25.132 31.6617 23.951 31.1212 22.8916C30.5808 21.8321 29.7759 20.9302 28.7846 20.2732C27.7933 19.6162 26.6491 19.2263 25.4628 19.1413C24.2766 19.0563 23.0885 19.279 22.0136 19.788C23.5906 21.8968 24.4407 24.4605 24.4361 27.0938V27.098H24.4375Z" fill="white"/>
                                            </svg>
                                        )
                                    case "Squad": 
                                        return (
                                            <svg className="w-full h-auto" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.6875 9.5625C11.6875 8.15354 12.2472 6.80228 13.2435 5.806C14.2398 4.80971 15.591 4.25 17 4.25C18.409 4.25 19.7602 4.80971 20.7565 5.806C21.7528 6.80228 22.3125 8.15354 22.3125 9.5625C22.3125 10.9715 21.7528 12.3227 20.7565 13.319C19.7602 14.3153 18.409 14.875 17 14.875C15.591 14.875 14.2398 14.3153 13.2435 13.319C12.2472 12.3227 11.6875 10.9715 11.6875 9.5625ZM22.3125 13.8125C22.3125 12.6853 22.7603 11.6043 23.5573 10.8073C24.3543 10.0103 25.4353 9.5625 26.5625 9.5625C27.6897 9.5625 28.7707 10.0103 29.5677 10.8073C30.3647 11.6043 30.8125 12.6853 30.8125 13.8125C30.8125 14.9397 30.3647 16.0207 29.5677 16.8177C28.7707 17.6147 27.6897 18.0625 26.5625 18.0625C25.4353 18.0625 24.3543 17.6147 23.5573 16.8177C22.7603 16.0207 22.3125 14.9397 22.3125 13.8125ZM3.1875 13.8125C3.1875 12.6853 3.63527 11.6043 4.4323 10.8073C5.22933 10.0103 6.31033 9.5625 7.4375 9.5625C8.56467 9.5625 9.64567 10.0103 10.4427 10.8073C11.2397 11.6043 11.6875 12.6853 11.6875 13.8125C11.6875 14.9397 11.2397 16.0207 10.4427 16.8177C9.64567 17.6147 8.56467 18.0625 7.4375 18.0625C6.31033 18.0625 5.22933 17.6147 4.4323 16.8177C3.63527 16.0207 3.1875 14.9397 3.1875 13.8125ZM8.93917 21.4157C9.80326 20.0614 10.9949 18.9469 12.4038 18.175C13.8127 17.4032 15.3935 16.9991 17 17C18.3456 16.9988 19.6762 17.2817 20.9049 17.8304C22.1335 18.379 23.2325 19.181 24.1297 20.1838C25.0269 21.1865 25.7023 22.3675 26.1115 23.6493C26.5207 24.9312 26.6546 26.285 26.5044 27.6222C26.4861 27.7883 26.4288 27.9477 26.3372 28.0876C26.2456 28.2274 26.1224 28.3436 25.9774 28.4268C23.2455 29.9944 20.1497 30.8171 17 30.8125C13.7346 30.8125 10.6675 29.9455 8.02258 28.4268C7.87764 28.3436 7.75438 28.2274 7.66281 28.0876C7.57124 27.9477 7.51395 27.7883 7.49558 27.6222C7.25766 25.4499 7.76682 23.2614 8.93917 21.4172V21.4157Z" fill="white"/>
                                                <path d="M7.19949 20.1932C5.80231 22.3499 5.15135 24.9055 5.34649 27.4678C4.49579 27.3388 3.65911 27.1301 2.84749 26.8444L2.68458 26.7878C2.53922 26.7362 2.41194 26.6435 2.31815 26.5211C2.22437 26.3986 2.1681 26.2516 2.15616 26.0978L2.14199 25.9264C2.08477 25.2152 2.1714 24.4997 2.39671 23.8227C2.62203 23.1457 2.98142 22.5211 3.45343 21.986C3.92545 21.4509 4.50041 21.0164 5.14402 20.7084C5.78763 20.4003 6.48669 20.2251 7.19949 20.1932ZM28.6535 27.4678C28.8486 24.9055 28.1977 22.3499 26.8005 20.1932C27.5133 20.2251 28.2124 20.4003 28.856 20.7084C29.4996 21.0164 30.0745 21.4509 30.5465 21.986C31.0186 22.5211 31.3779 23.1457 31.6033 23.8227C31.8286 24.4997 31.9152 25.2152 31.858 25.9264L31.8438 26.0978C31.8316 26.2514 31.7752 26.3981 31.6815 26.5203C31.5877 26.6424 31.4606 26.7349 31.3154 26.7863L31.1525 26.843C30.3492 27.1263 29.5148 27.3374 28.6535 27.4678Z" fill="white"/>
                                            </svg>
                                        )
                                }
                            })()}
                        </div>
                        <span>{tournament.regime}</span>
                    </div>
                    <div className="bg-[#FFFFFF23] p-2 pr-4 rounded-xl space-x-2 flex items-center">
                        <div className="w-4 h-4">
                            {tournament.view == 1 
                                ?   <svg className="w-full h-auto" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.84 21.05C17.9566 21.05 19.0274 20.6065 19.8169 19.8169C20.6065 19.0274 21.05 17.9566 21.05 16.84C21.05 15.7234 20.6065 14.6526 19.8169 13.8631C19.0274 13.0736 17.9566 12.63 16.84 12.63C15.7234 12.63 14.6526 13.0736 13.8631 13.8631C13.0736 14.6526 12.63 15.7234 12.63 16.84C12.63 17.9566 13.0736 19.0274 13.8631 19.8169C14.6526 20.6065 15.7234 21.05 16.84 21.05Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.85661 16.064C3.94477 9.78965 9.86262 5.2625 16.8414 5.2625C23.816 5.2625 29.731 9.78544 31.822 16.0541C31.9904 16.5621 31.9904 17.1094 31.822 17.616C29.7352 23.8903 23.816 28.4175 16.8386 28.4175C9.86403 28.4175 3.94757 23.8946 1.85801 17.6259C1.68926 17.1189 1.68926 16.5709 1.85801 16.064H1.85661ZM24.2075 16.84C24.2075 18.794 23.4313 20.6679 22.0496 22.0496C20.6679 23.4313 18.794 24.2075 16.84 24.2075C14.886 24.2075 13.0121 23.4313 11.6304 22.0496C10.2487 20.6679 9.4725 18.794 9.4725 16.84C9.4725 14.886 10.2487 13.0121 11.6304 11.6304C13.0121 10.2487 14.886 9.4725 16.84 9.4725C18.794 9.4725 20.6679 10.2487 22.0496 11.6304C23.4313 13.0121 24.2075 14.886 24.2075 16.84Z" fill="white"/>
                                    </svg>
                                :   <svg className="w-full h-auto" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.84 8.42C18.3901 8.42 19.6467 7.16342 19.6467 5.61334C19.6467 4.06326 18.3901 2.80667 16.84 2.80667C15.2899 2.80667 14.0333 4.06326 14.0333 5.61334C14.0333 7.16342 15.2899 8.42 16.84 8.42Z" fill="white"/>
                                        <path d="M16.84 25.26H19.6467V18.2433H22.4534V12.63C22.4534 11.0821 21.1946 9.82333 19.6467 9.82333H14.0334C12.4855 9.82333 11.2267 11.0821 11.2267 12.63V18.2433H14.0334V25.26H16.84Z" fill="white"/>
                                        <path d="M25.8859 15.9784L24.6327 18.4889C26.8149 19.5765 28.0666 21.0219 28.0666 22.4533C28.0666 25.1084 23.4567 28.0667 16.84 28.0667C10.2233 28.0667 5.61331 25.1084 5.61331 22.4533C5.61331 21.0219 6.86508 19.5765 9.04586 18.4889L7.79268 15.9784C4.62396 17.5585 2.80664 19.9175 2.80664 22.4533C2.80664 27.1741 8.97148 30.8733 16.84 30.8733C24.7085 30.8733 30.8733 27.1741 30.8733 22.4533C30.8733 19.9175 29.056 17.5585 25.8859 15.9784Z" fill="white"/>
                                    </svg>
                            }
                        </div>
                        <span>От {tournament.view} лица</span>
                    </div>
                    <div className="bg-[#FFFFFF23] p-2 pr-4 rounded-xl space-x-2 flex items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.6749 5.92188C8.24351 5.92188 7.82979 6.09324 7.52475 6.39828C7.21971 6.70332 7.04834 7.11705 7.04834 7.54844C7.04834 7.97983 7.21971 8.39355 7.52475 8.69859C7.82979 9.00363 8.24351 9.175 8.6749 9.175C9.10629 9.175 9.52002 9.00363 9.82506 8.69859C10.1301 8.39355 10.3015 7.97983 10.3015 7.54844C10.3015 7.11705 10.1301 6.70332 9.82506 6.39828C9.52002 6.09324 9.10629 5.92188 8.6749 5.92188Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.08447 4.02417C1.08447 3.27523 1.69172 2.6687 2.43994 2.6687H14.9103C15.6585 2.6687 16.2657 3.27595 16.2657 4.02417V11.0726C16.2657 11.8215 15.6585 12.4281 14.9103 12.4281H2.43994C2.26194 12.4281 2.08568 12.393 1.92123 12.3249C1.75677 12.2568 1.60735 12.1569 1.48148 12.0311C1.35561 11.9052 1.25577 11.7558 1.18765 11.5913C1.11953 11.4269 1.08447 11.2506 1.08447 11.0726V4.02417ZM5.96416 7.54839C5.96416 6.8294 6.24978 6.13987 6.75818 5.63147C7.26658 5.12307 7.95611 4.83745 8.6751 4.83745C9.39408 4.83745 10.0836 5.12307 10.592 5.63147C11.1004 6.13987 11.386 6.8294 11.386 7.54839C11.386 8.26737 11.1004 8.95691 10.592 9.46531C10.0836 9.97371 9.39408 10.2593 8.6751 10.2593C7.95611 10.2593 7.26658 9.97371 6.75818 9.46531C6.24978 8.95691 5.96416 8.26737 5.96416 7.54839ZM13.5548 7.0062C13.411 7.0062 13.2731 7.06332 13.1714 7.165C13.0697 7.26668 13.0126 7.40459 13.0126 7.54839V7.55417C13.0126 7.85346 13.2555 8.09636 13.5548 8.09636H13.5606C13.7044 8.09636 13.8423 8.03924 13.944 7.93756C14.0456 7.83588 14.1028 7.69797 14.1028 7.55417V7.54839C14.1028 7.40459 14.0456 7.26668 13.944 7.165C13.8423 7.06332 13.7044 7.0062 13.5606 7.0062H13.5548ZM3.25322 7.54839C3.25322 7.40459 3.31035 7.26668 3.41203 7.165C3.51371 7.06332 3.65161 7.0062 3.79541 7.0062H3.80119C3.94499 7.0062 4.0829 7.06332 4.18458 7.165C4.28626 7.26668 4.34338 7.40459 4.34338 7.54839V7.55417C4.34338 7.69797 4.28626 7.83588 4.18458 7.93756C4.0829 8.03924 3.94499 8.09636 3.80119 8.09636H3.79541C3.65161 8.09636 3.51371 8.03924 3.41203 7.93756C3.31035 7.83588 3.25322 7.69797 3.25322 7.55417V7.54839Z" fill="white"/>
                            <path d="M1.62666 13.5125C1.48286 13.5125 1.34496 13.5696 1.24328 13.6713C1.1416 13.7729 1.08447 13.9108 1.08447 14.0546C1.08447 14.1984 1.1416 14.3363 1.24328 14.438C1.34496 14.5397 1.48286 14.5968 1.62666 14.5968C5.53041 14.5968 9.31126 15.1188 12.9042 16.0969C13.7644 16.3311 14.6392 15.6935 14.6392 14.7812V14.0546C14.6392 13.9108 14.582 13.7729 14.4804 13.6713C14.3787 13.5696 14.2408 13.5125 14.097 13.5125H1.62666Z" fill="white"/>
                        </svg>
                        <span>{tournament.prize.pool}</span>
                    </div>
                    {/* <div className="bg-[#FFFFFF23] p-2 pr-4 rounded-xl space-x-2 flex items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.02497 12.7896L9.74788 11.3437V7.62648C10.992 7.30334 11.9166 6.18065 11.9166 4.83747C11.9166 3.24271 10.6197 1.9458 9.02497 1.9458C7.43021 1.9458 6.1333 3.24271 6.1333 4.83747C6.1333 6.18065 7.05791 7.30334 8.30205 7.62648V11.3437L9.02497 12.7896Z" fill="white"/>
                            <path d="M12.1098 8.13622L11.7244 9.53C13.5975 10.0476 14.8084 11.0431 14.8084 12.0667C14.8084 13.4345 12.4336 14.9584 9.02507 14.9584C5.61651 14.9584 3.24173 13.4345 3.24173 12.0667C3.24173 11.0431 4.45262 10.0476 6.32642 9.52928L5.9411 8.1355C3.38415 8.84251 1.7959 10.3483 1.7959 12.0667C1.7959 14.4986 4.97167 16.4042 9.02507 16.4042C13.0785 16.4042 16.2542 14.4986 16.2542 12.0667C16.2542 10.3483 14.666 8.84251 12.1098 8.13622Z" fill="white"/>
                        </svg>
                        <span>{tournament.maps.join([', '])}</span>
                    </div> */}
                    {/* <div className="bg-[#FFFFFF23] p-2 pr-4 rounded-xl space-x-2 flex items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.21916 3.24639C6.5242 2.89449 6.90139 2.61236 7.32512 2.41914C7.74885 2.22592 8.2092 2.12615 8.6749 2.12659C9.6559 2.12659 10.535 2.56034 11.1307 3.24639C11.5953 3.21321 12.0616 3.28042 12.4979 3.44346C12.9343 3.60649 13.3304 3.86153 13.6594 4.19124C13.989 4.52021 14.2439 4.91623 14.407 5.35243C14.57 5.78862 14.6373 6.25478 14.6043 6.71928C14.956 7.02439 15.238 7.40161 15.4311 7.82534C15.6242 8.24906 15.7239 8.70938 15.7233 9.17503C15.7238 9.64073 15.624 10.1011 15.4308 10.5248C15.2376 10.9485 14.9554 11.3257 14.6035 11.6308C14.6366 12.0953 14.5693 12.5614 14.4063 12.9976C14.2432 13.4338 13.9883 13.8298 13.6587 14.1588C13.3297 14.4884 12.9337 14.7433 12.4975 14.9064C12.0613 15.0694 11.5951 15.1367 11.1307 15.1037C10.8256 15.4556 10.4484 15.7377 10.0247 15.9309C9.60096 16.1241 9.14061 16.2239 8.6749 16.2235C8.2092 16.2239 7.74885 16.1241 7.32512 15.9309C6.90139 15.7377 6.5242 15.4556 6.21916 15.1037C5.75459 15.1369 5.28831 15.0698 4.85198 14.9069C4.41565 14.744 4.01948 14.4891 3.69039 14.1595C3.36072 13.8305 3.10571 13.4343 2.94268 12.998C2.77965 12.5617 2.71242 12.0954 2.74554 11.6308C2.39378 11.3257 2.11178 10.9484 1.91869 10.5247C1.7256 10.101 1.62593 9.64067 1.62647 9.17503C1.62647 8.19403 2.06022 7.31496 2.74626 6.71928C2.7132 6.25478 2.78046 5.7886 2.94349 5.3524C3.10652 4.9162 3.3615 4.52018 3.69112 4.19124C4.02006 3.86162 4.41608 3.60664 4.85228 3.44361C5.28848 3.28058 5.75466 3.21332 6.21916 3.24639ZM11.2846 7.86365C11.328 7.80586 11.3594 7.73997 11.3769 7.66988C11.3945 7.59978 11.3978 7.52688 11.3868 7.45546C11.3758 7.38405 11.3506 7.31556 11.3127 7.25402C11.2748 7.19248 11.225 7.13913 11.1663 7.09711C11.1075 7.05509 11.0409 7.02525 10.9704 7.00933C10.8999 6.99342 10.8269 6.99176 10.7558 7.00444C10.6847 7.01713 10.6168 7.04391 10.5561 7.0832C10.4955 7.1225 10.4433 7.17352 10.4027 7.23327L8.06332 10.5081L6.8893 9.33407C6.78652 9.2383 6.65058 9.18616 6.51011 9.18863C6.36965 9.19111 6.23563 9.24802 6.13629 9.34735C6.03696 9.44669 5.98005 9.58071 5.97758 9.72117C5.9751 9.86164 6.02724 9.99758 6.12301 10.1004L7.74957 11.7269C7.80523 11.7825 7.87232 11.8254 7.9462 11.8525C8.02007 11.8795 8.09895 11.8902 8.17737 11.8837C8.25578 11.8773 8.33185 11.8538 8.40029 11.815C8.46873 11.7762 8.5279 11.7229 8.5737 11.659L11.2846 7.86365Z" fill="white"/>
                        </svg>
                        <span>От {tournament.league} лиги</span>
                    </div> */}
                </div>
            </div>
            <div className="absolute z-10 w-full h-full top-0" style={{background: "radial-gradient(#00000000, #19191980)"}}></div>
            <div className="bg-gradient-to-t from-[#191919] to-[#1919198F] absolute z-10 w-full h-full top-0"></div>
        </section>
    )
}
