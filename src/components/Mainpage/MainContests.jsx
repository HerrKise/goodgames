import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

import placeholder from "../../assets/Main/placeholder.jfif"

export const MainContests = ({offers}) => {
    return (
        <section className="py-5 wrap">
            <h1 className="h1">Конкурсы и розыгрыши</h1>
            <Swiper
                spaceBetween={12}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                modules={[Autoplay]}
                className="h-[230px] my-5 "
            >
                {offers.map((offer, i) => {
                    return (
                        <SwiperSlide key={i} className="w-[170px] h-full bg-gray-800 rounded-2xl px-2 py-3  relative overflow-clip">
                            <img src={placeholder} alt="placeholder" className="absolute top-0 left-0 h-full w-full object-top object-cover" />
                            <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#191919] to-0'></div>
                            <div className='w-full h-full flex flex-col justify-between items-start relative z-10'>
                                <h3 className='h3 mb-3'>{offer.title}</h3>
                                <p className='text-[10px] leading-3'>{offer.description}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}