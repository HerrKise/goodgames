import { useState, useCallback } from 'react';
import {Collapse} from 'react-collapse';

export const CommandItem = ({command, i}) => {

    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const openInfo = useCallback(
        () => setIsInfoOpen(!isInfoOpen),
        [isInfoOpen]
    )

    const openTerms = useCallback(
        () => setIsTermsOpen(!isTermsOpen),
        [isTermsOpen]
    );

    return (
        <li className="bg-grey rounded-xl p-5 relative w-full">
            <div onClick={openInfo} className="flex items-center justify-between">
                <div className='flex items-center space-x-3'>
                    <div className="w-8 h-8 rounded-full bg-yellow"></div>
                    <h3 className="h3">{command.title}</h3>
                </div>
                {command.confirmed 
                    ?   <div className="bg-yellow flex items-center text-darkgrey px-3 py-1 rounded-full text-xs font-bold space-x-1">
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.72016 2.59328C4.91795 2.36511 5.16253 2.18217 5.43728 2.05688C5.71204 1.9316 6.01053 1.8669 6.3125 1.86719C6.94859 1.86719 7.51859 2.14844 7.90484 2.59328C8.20611 2.57177 8.50847 2.61535 8.7914 2.72107C9.07433 2.82678 9.33119 2.99215 9.54453 3.20594C9.75824 3.41925 9.92355 3.67604 10.0293 3.95887C10.135 4.24171 10.1786 4.54397 10.1572 4.84516C10.3853 5.04299 10.5681 5.28759 10.6933 5.56234C10.8185 5.83709 10.8832 6.13557 10.8828 6.4375C10.8831 6.73947 10.8184 7.03797 10.6931 7.31272C10.5678 7.58747 10.3849 7.83205 10.1567 8.02984C10.1781 8.33103 10.1345 8.6333 10.0288 8.91613C9.92308 9.19897 9.75777 9.45575 9.54406 9.66906C9.33075 9.88277 9.07397 10.0481 8.79113 10.1538C8.5083 10.2595 8.20603 10.3031 7.90484 10.2817C7.70705 10.5099 7.46247 10.6928 7.18772 10.8181C6.91297 10.9434 6.61447 11.0081 6.3125 11.0078C6.01053 11.0081 5.71204 10.9434 5.43728 10.8181C5.16253 10.6928 4.91795 10.5099 4.72016 10.2817C4.41893 10.3033 4.11658 10.2598 3.83366 10.1542C3.55074 10.0485 3.29386 9.88324 3.08047 9.66953C2.8667 9.45617 2.70135 9.19931 2.59564 8.91638C2.48993 8.63346 2.44633 8.33111 2.46781 8.02984C2.23972 7.83201 2.05687 7.58741 1.93167 7.31266C1.80647 7.03791 1.74184 6.73943 1.74219 6.4375C1.74219 5.80141 2.02344 5.23141 2.46828 4.84516C2.44684 4.54397 2.49046 4.24169 2.59617 3.95885C2.70188 3.67601 2.86721 3.41923 3.08094 3.20594C3.29423 2.99221 3.55101 2.82688 3.83385 2.72117C4.1167 2.61545 4.41897 2.57184 4.72016 2.59328ZM8.00469 5.58719C8.03281 5.54971 8.05316 5.50699 8.06454 5.46154C8.07592 5.41609 8.0781 5.36882 8.07095 5.32251C8.0638 5.2762 8.04746 5.23179 8.0229 5.19189C7.99834 5.15199 7.96605 5.1174 7.92793 5.09015C7.88981 5.0629 7.84663 5.04355 7.80093 5.03323C7.75522 5.02291 7.70792 5.02184 7.66179 5.03006C7.61566 5.03829 7.57164 5.05565 7.53232 5.08113C7.493 5.10661 7.45917 5.1397 7.43281 5.17844L5.91594 7.30188L5.15469 6.54063C5.08804 6.47853 4.9999 6.44472 4.90882 6.44632C4.81774 6.44793 4.73084 6.48483 4.66643 6.54924C4.60202 6.61365 4.56512 6.70055 4.56351 6.79163C4.56191 6.88271 4.59571 6.97086 4.65781 7.0375L5.7125 8.09219C5.74859 8.12825 5.79209 8.15602 5.84 8.17358C5.8879 8.19114 5.93904 8.19807 5.98989 8.19388C6.04074 8.18968 6.09006 8.17447 6.13444 8.14931C6.17881 8.12414 6.21718 8.08961 6.24688 8.04813L8.00469 5.58719Z" fill="#191919"/>
                            </svg>
                            <span>Одобрено</span>
                        </div>
                    :   <div className="bg-darkgrey flex items-center text-white px-2 py-1 rounded-full text-xs font-bold space-x-1">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 1.75C2.16848 1.75 1.85054 1.8817 1.61612 2.11612C1.3817 2.35054 1.25 2.66848 1.25 3V3.625C1.25 3.70788 1.28292 3.78737 1.34153 3.84597C1.40013 3.90458 1.47962 3.9375 1.5625 3.9375C1.64538 3.9375 1.72487 3.90458 1.78347 3.84597C1.84208 3.78737 1.875 3.70788 1.875 3.625V3C1.875 2.83424 1.94085 2.67527 2.05806 2.55806C2.17527 2.44085 2.33424 2.375 2.5 2.375H3.125C3.20788 2.375 3.28737 2.34208 3.34597 2.28347C3.40458 2.22487 3.4375 2.14538 3.4375 2.0625C3.4375 1.97962 3.40458 1.90013 3.34597 1.84153C3.28737 1.78292 3.20788 1.75 3.125 1.75H2.5ZM6.875 1.75C6.79212 1.75 6.71263 1.78292 6.65403 1.84153C6.59542 1.90013 6.5625 1.97962 6.5625 2.0625C6.5625 2.14538 6.59542 2.22487 6.65403 2.28347C6.71263 2.34208 6.79212 2.375 6.875 2.375H7.5C7.66576 2.375 7.82473 2.44085 7.94194 2.55806C8.05915 2.67527 8.125 2.83424 8.125 3V3.625C8.125 3.70788 8.15792 3.78737 8.21653 3.84597C8.27513 3.90458 8.35462 3.9375 8.4375 3.9375C8.52038 3.9375 8.59987 3.90458 8.65847 3.84597C8.71708 3.78737 8.75 3.70788 8.75 3.625V3C8.75 2.66848 8.6183 2.35054 8.38388 2.11612C8.14946 1.8817 7.83152 1.75 7.5 1.75H6.875ZM5 3.9375C4.5856 3.9375 4.18817 4.10212 3.89515 4.39515C3.60212 4.68817 3.4375 5.0856 3.4375 5.5C3.4375 5.9144 3.60212 6.31183 3.89515 6.60485C4.18817 6.89788 4.5856 7.0625 5 7.0625C5.4144 7.0625 5.81183 6.89788 6.10485 6.60485C6.39788 6.31183 6.5625 5.9144 6.5625 5.5C6.5625 5.0856 6.39788 4.68817 6.10485 4.39515C5.81183 4.10212 5.4144 3.9375 5 3.9375ZM1.875 7.375C1.875 7.29212 1.84208 7.21263 1.78347 7.15403C1.72487 7.09542 1.64538 7.0625 1.5625 7.0625C1.47962 7.0625 1.40013 7.09542 1.34153 7.15403C1.28292 7.21263 1.25 7.29212 1.25 7.375V8C1.25 8.33152 1.3817 8.64946 1.61612 8.88388C1.85054 9.1183 2.16848 9.25 2.5 9.25H3.125C3.20788 9.25 3.28737 9.21708 3.34597 9.15847C3.40458 9.09987 3.4375 9.02038 3.4375 8.9375C3.4375 8.85462 3.40458 8.77513 3.34597 8.71653C3.28737 8.65792 3.20788 8.625 3.125 8.625H2.5C2.33424 8.625 2.17527 8.55915 2.05806 8.44194C1.94085 8.32473 1.875 8.16576 1.875 8V7.375ZM8.75 7.375C8.75 7.29212 8.71708 7.21263 8.65847 7.15403C8.59987 7.09542 8.52038 7.0625 8.4375 7.0625C8.35462 7.0625 8.27513 7.09542 8.21653 7.15403C8.15792 7.21263 8.125 7.29212 8.125 7.375V8C8.125 8.16576 8.05915 8.32473 7.94194 8.44194C7.82473 8.55915 7.66576 8.625 7.5 8.625H6.875C6.79212 8.625 6.71263 8.65792 6.65403 8.71653C6.59542 8.77513 6.5625 8.85462 6.5625 8.9375C6.5625 9.02038 6.59542 9.09987 6.65403 9.15847C6.71263 9.21708 6.79212 9.25 6.875 9.25H7.5C7.83152 9.25 8.14946 9.1183 8.38388 8.88388C8.6183 8.64946 8.75 8.33152 8.75 8V7.375Z" fill="white"/>
                            </svg>
                            <span>На проверке</span>
                        </div>
                }
            </div>
            <Collapse isOpened={isInfoOpen}>
                <div className="bg-[#26262633] w-full rounded-xl py-4">
                    <div className='flex justify-between' onClick={openTerms}>
                        <h3 className='flex space-x-2 h3'>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.74979 2.83752C9.82864 2.8031 9.91375 2.78534 9.99979 2.78534C10.0858 2.78534 10.1709 2.8031 10.2498 2.83752C13.3315 4.18452 16.2711 5.83576 19.0248 7.76668C19.1218 7.83474 19.1975 7.92899 19.243 8.03843C19.2885 8.14788 19.302 8.268 19.2818 8.3848C19.2616 8.5016 19.2087 8.61026 19.1291 8.69809C19.0495 8.78592 18.9465 8.8493 18.8323 8.88085C15.9734 9.67043 13.2072 10.7633 10.5806 12.1409L10.5781 12.1425L10.2948 12.2925C10.2042 12.341 10.103 12.3663 10.0002 12.3663C9.89744 12.3663 9.79626 12.341 9.70562 12.2925C8.57952 11.6907 7.42636 11.141 6.24979 10.645V10.4584C6.24979 10.3492 6.30562 10.2517 6.39312 10.1992C7.65093 9.43694 8.94495 8.73612 10.2706 8.09918C10.42 8.02735 10.5348 7.89912 10.5896 7.74268C10.6445 7.58624 10.6349 7.41442 10.5631 7.26502C10.4913 7.11561 10.3631 7.00086 10.2066 6.94601C10.0502 6.89115 9.87836 6.90069 9.72895 6.97252C8.36711 7.62693 7.03777 8.34694 5.74562 9.13002C5.56179 9.24154 5.4032 9.39012 5.27995 9.56631C5.15671 9.7425 5.07151 9.94242 5.02979 10.1534C3.76413 9.66635 2.47536 9.24167 1.16812 8.88085C1.05387 8.8493 0.950939 8.78592 0.871347 8.69809C0.791754 8.61026 0.738778 8.5016 0.718598 8.3848C0.698418 8.268 0.711867 8.14788 0.757375 8.03843C0.802883 7.92899 0.878575 7.83474 0.97562 7.76668C3.72908 5.83582 6.66836 4.18458 9.74979 2.83752Z" fill="white"/>
                                <path d="M10.8833 13.3942C12.9302 12.3006 15.0675 11.3855 17.2716 10.6592C17.3833 11.8375 17.455 13.0283 17.4841 14.23C17.4872 14.3557 17.4522 14.4795 17.3839 14.585C17.3155 14.6906 17.2168 14.7731 17.1008 14.8217C14.7385 15.8083 12.4767 17.02 10.3466 18.44C10.244 18.5084 10.1234 18.5449 9.99997 18.5449C9.87659 18.5449 9.75596 18.5084 9.6533 18.44C7.52348 17.02 5.26194 15.8083 2.89997 14.8217C2.7838 14.7732 2.68498 14.6908 2.61643 14.5852C2.54788 14.4796 2.51281 14.3558 2.5158 14.23C2.54497 13.0283 2.61663 11.8383 2.7283 10.6583C3.49359 10.9106 4.25116 11.1857 4.99997 11.4833V12.5417C4.81991 12.6454 4.66856 12.7924 4.55961 12.9693C4.45065 13.1463 4.38752 13.3476 4.37594 13.5551C4.36436 13.7626 4.40469 13.9697 4.49327 14.1576C4.58186 14.3456 4.71591 14.5085 4.8833 14.6317C4.8083 14.9483 4.6983 15.2592 4.55247 15.5567C4.92913 15.7342 5.3033 15.9183 5.67413 16.1075C5.88322 15.682 6.0375 15.2318 6.1333 14.7675C6.34404 14.6738 6.52475 14.5236 6.65543 14.3336C6.78611 14.1436 6.86166 13.9211 6.87374 13.6908C6.88582 13.4604 6.83394 13.2313 6.72385 13.0286C6.61376 12.826 6.44975 12.6577 6.24997 12.5425V12.005C7.2234 12.4305 8.1797 12.8942 9.11663 13.395C9.38844 13.5402 9.69183 13.6161 9.99997 13.6161C10.3081 13.6161 10.6115 13.5402 10.8833 13.395V13.3942Z" fill="white"/>
                                <path d="M3.71811 16.7183C4.06811 16.3691 4.34561 15.9766 4.55144 15.5566C4.92894 15.7341 5.30311 15.9183 5.67394 16.1075C5.40126 16.6613 5.03919 17.1664 4.60228 17.6025C4.54506 17.6639 4.47606 17.7131 4.39939 17.7473C4.32273 17.7815 4.23996 17.7998 4.15605 17.8013C4.07213 17.8028 3.98877 17.7873 3.91094 17.7559C3.83312 17.7245 3.76243 17.6777 3.70308 17.6183C3.64373 17.559 3.59694 17.4883 3.56551 17.4105C3.53407 17.3326 3.51864 17.2493 3.52012 17.1654C3.5216 17.0815 3.53997 16.9987 3.57413 16.922C3.60829 16.8454 3.65754 16.7764 3.71894 16.7191L3.71811 16.7183Z" fill="white"/>
                            </svg>
                            <span>Условия участия</span>
                        </h3>
                        <button
                            className={isTermsOpen ? "duration-300 rotate-90" : "rotate-0 duration-300"}
                            aria-expanded={isTermsOpen}
                            type="button">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.964 14.245C10.8409 14.3679 10.6741 14.4369 10.5002 14.4369C10.3263 14.4369 10.1595 14.3679 10.0365 14.245L3.47398 7.68251C3.35806 7.55811 3.29495 7.39357 3.29795 7.22356C3.30095 7.05354 3.36983 6.89133 3.49006 6.77109C3.6103 6.65086 3.77251 6.58198 3.94252 6.57898C4.11254 6.57598 4.27708 6.63909 4.40148 6.75501L10.5002 12.8538L16.599 6.75501C16.6591 6.69054 16.7315 6.63882 16.812 6.60295C16.8925 6.56709 16.9794 6.5478 17.0675 6.54624C17.1556 6.54469 17.2432 6.5609 17.3249 6.5939C17.4066 6.62691 17.4808 6.67604 17.5431 6.73835C17.6055 6.80067 17.6546 6.8749 17.6876 6.95661C17.7206 7.03833 17.7368 7.12585 17.7352 7.21397C17.7337 7.30208 17.7144 7.38898 17.6785 7.46948C17.6427 7.54998 17.591 7.62243 17.5265 7.68251L10.964 14.245Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <Collapse
                        isOpened={isTermsOpen}>
                        <div className="p py-5 break-words">
                        Каждый участник команды обязан прочесть, понять и принять и соблюдать данный регламент, а в противном случае команад не будет допущена к учатию на турнире. Участие на турнире означает согласие со всеми правилами, инструкциями и их изменениями. 1.2 Регистрация и участие Регистрация на турнир происходит на  <a href="http://www.tournamentsoftware.com/ru/tournaments/index.html" className='underline'>сайте</a>. Регистрация команд возможна только при наличии у них не менее 2-х игроков. За регистрацию каждой команды вносится взнос в размере 100 рублей, который засчитывается при оплате турнира. Для регистрации команды необходимо заполнить анкету. В случае если вы зарегистрировались командой, но у вас нет игроков, необходимо связаться с Организатором для решения данного вопроса.
                        </div>
                        <button className='w-full rounded-lg bg-yellow py-2 text-darkgrey text-sm font-bold flex items-center justify-center space-x-2'>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.09375 8.5C2.09375 4.68562 5.18562 1.59375 9 1.59375C12.8144 1.59375 15.9062 4.68562 15.9062 8.5C15.9062 12.3144 12.8144 15.4062 9 15.4062C5.18562 15.4062 2.09375 12.3144 2.09375 8.5ZM8.2605 7.47858C9.07225 7.07271 9.98671 7.80654 9.76642 8.687L9.26421 10.6958L9.29396 10.6817C9.41878 10.6268 9.55992 10.622 9.68816 10.6683C9.81641 10.7146 9.92194 10.8085 9.98292 10.9304C10.0439 11.0524 10.0557 11.1931 10.0157 11.3235C9.97584 11.4539 9.88733 11.5639 9.76854 11.6308L9.74021 11.6464C8.92775 12.0523 8.01329 11.3185 8.23358 10.438L8.7365 8.42917L8.70675 8.44333C8.64409 8.47816 8.57503 8.49994 8.50373 8.50737C8.43242 8.51479 8.36036 8.50771 8.29186 8.48655C8.22337 8.46539 8.15987 8.43059 8.10518 8.38424C8.0505 8.33788 8.00576 8.28094 7.97366 8.21684C7.94156 8.15274 7.92277 8.08281 7.91841 8.01125C7.91406 7.9397 7.92423 7.868 7.94831 7.80048C7.9724 7.73296 8.0099 7.67101 8.05857 7.61837C8.10723 7.56573 8.16604 7.52348 8.23146 7.49417L8.2605 7.47858ZM9 6.375C9.1409 6.375 9.27602 6.31903 9.37565 6.2194C9.47528 6.11977 9.53125 5.98465 9.53125 5.84375C9.53125 5.70285 9.47528 5.56773 9.37565 5.4681C9.27602 5.36847 9.1409 5.3125 9 5.3125C8.8591 5.3125 8.72398 5.36847 8.62435 5.4681C8.52472 5.56773 8.46875 5.70285 8.46875 5.84375C8.46875 5.98465 8.52472 6.11977 8.62435 6.2194C8.72398 6.31903 8.8591 6.375 9 6.375Z" fill="black"/>
                            </svg>
                            <span>Выполнить условия</span>
                        </button>
                    </Collapse>
                    
                </div>
                <div>
                    <h3 className='h3'>Этапы</h3>
                    <ul className='flex flex-wrap gap-1 text-sm font-bold pt-3'>
                        <li className='w-[106px] text-center bg-yellow rounded text-darkgrey py-1'>1</li>
                        <li className='w-[106px] text-center bg-yellow rounded text-darkgrey py-1'>2</li>
                        <li className='w-[106px] text-center bg-yellow rounded text-darkgrey py-1'>3</li>
                        <li className='w-[78px] text-center bg-darkgrey rounded py-1'>4</li>
                        <li className='w-[78px] text-center bg-darkgrey rounded py-1'>5</li>
                        <li className='w-[78px] text-center bg-darkgrey rounded py-1'>6</li>
                        <li className='w-[78px] text-center bg-darkgrey rounded py-1'>7</li>
                    </ul>
                </div>
            </Collapse>
        </li>
    )
}