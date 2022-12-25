import { Swiper, SwiperSlide } from "swiper/react"
import placeholder from "../../assets/Main/placeholder.jfif";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export const TournamentTop = ({results}) => {
    return (
        <section className="">
            <h1 className="h1">Топ-5</h1>
            <Swiper
                spaceBetween={12}
                className="px-3 py-3 relative pb-12"
                pagination={true}
                modules={[Pagination]}
            >
                {results.map((result, i) => {
                    return (
                        <SwiperSlide key={i} className="w-full">
                            <div className="space-y-4 flex flex-col items-center">
                                <div className="-ml-20 relative">
                                    <img src={placeholder} alt="placeholder" className="w-52 h-52 md:w-60 md:h-60 rounded-full"/>
                                    <p className="absolute h-max z-10 top-4 text-[170px] -right-20 md:text-[200px] text-white font-semibold">{i+1}</p>
                                </div>
                                <ul className="flex items-center space-x-3 font-medium">
                                    <li className="bg-grey p-4 rounded-xl flex items-center space-x-2">
                                        <svg width="37" height="23" viewBox="0 0 37 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4743 10.9633L21.7182 18.3857L32.0534 7.79575L36.206 12.0507V0.916992H25.3401L29.4927 5.17191L21.7182 13.1381L14.4743 5.71561L0.51709 20.0168L3.07781 22.6407L14.4743 10.9633Z" fill="#FFE800"/>
                                        </svg>
                                        <span>{result.total}</span>
                                    </li>
                                    <li className="bg-grey p-4 rounded-xl flex items-center space-x-2">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.0138 3.0898H17.7545V2.0034C17.7545 1.71526 17.6401 1.43893 17.4363 1.23519C17.2326 1.03145 16.9563 0.916992 16.6681 0.916992H5.80409C5.51596 0.916992 5.23963 1.03145 5.03589 1.23519C4.83215 1.43893 4.71769 1.71526 4.71769 2.0034V3.0898H1.45848C1.17034 3.0898 0.894011 3.20426 0.690271 3.408C0.48653 3.61174 0.37207 3.88807 0.37207 4.17621V7.43542C0.37207 12.1178 2.3276 14.9425 5.60854 15.0403C6.08725 15.868 6.74223 16.5804 7.52703 17.1267C8.31183 17.6731 9.20722 18.0401 10.1497 18.2017V20.4723H7.9769V22.6451H14.4953V20.4723H12.3225V18.2017C13.265 18.0401 14.1604 17.6731 14.9452 17.1267C15.73 16.5804 16.385 15.868 16.8637 15.0403C20.1229 14.9316 22.1002 12.107 22.1002 7.43542V4.17621C22.1002 3.88807 21.9857 3.61174 21.782 3.408C21.5782 3.20426 21.3019 3.0898 21.0138 3.0898V3.0898ZM2.54488 7.43542V5.26261H4.71769V12.6828C2.78389 11.868 2.54488 8.84775 2.54488 7.43542ZM17.7545 12.6828V5.26261H19.9274V7.43542C19.9274 8.84775 19.6883 11.868 17.7545 12.6828Z" fill="#FFE800"/>
                                        </svg>
                                        <span>{result.wins}</span>
                                    </li>
                                    <li className="bg-grey p-4 rounded-xl flex items-center space-x-2">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.702 0.916992C4.27437 0.916992 0.266113 6.21979 0.266113 11.2092C0.266113 13.6439 1.41999 15.7596 3.69687 17.5081V22.6451H7.12762V19.2143H9.41478V22.6451H13.9891V19.2143H16.2763V22.6451H19.707V17.507C21.9839 15.7596 23.1378 13.6428 23.1378 11.2092C23.1378 6.21979 19.1295 0.916992 11.702 0.916992ZM7.12762 13.4964C5.84566 13.4964 4.84045 12.2408 4.84045 10.6375C4.84045 9.03415 5.84566 7.7785 7.12762 7.7785C8.40957 7.7785 9.41478 9.03415 9.41478 10.6375C9.41478 12.2408 8.40957 13.4964 7.12762 13.4964ZM16.2763 13.4964C14.9943 13.4964 13.9891 12.2408 13.9891 10.6375C13.9891 9.03415 14.9943 7.7785 16.2763 7.7785C17.5582 7.7785 18.5635 9.03415 18.5635 10.6375C18.5635 12.2408 17.5582 13.4964 16.2763 13.4964Z" fill="#FFE800"/>
                                        </svg>
                                        <span>{result.kills}</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}