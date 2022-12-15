import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import placeholder from "../../assets/Main/placeholder.jfif"

export const MainServices = ({offers}) => {
    return (
        <section className="py-10">
            <h1 className="h1 wrap">Сервисы</h1>
            <Swiper
                spaceBetween={12}
                loop={true}
                slidesPerView={"auto"}
                className="h-[230px] my-5 px-3"
            >
                {offers.map((offer, i) => {
                    return (
                        <SwiperSlide key={i} className="w-[170px] h-full bg-gray-800 rounded-2xl px-2 py-3  relative overflow-clip">
                            <img src={placeholder} alt="placeholder" className="absolute top-0 left-0 h-full w-full object-top object-cover" />
                            <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#191919] to-0'></div>
                            <div className='w-full h-full flex flex-col justify-end items-center relative z-10'>
                                <h3 className='h3 mb-3 text-center'>{offer.title}</h3>
                                <p className='text-[10px] leading-3 text-center'>{offer.description}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}