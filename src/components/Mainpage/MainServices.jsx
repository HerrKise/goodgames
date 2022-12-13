import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

export const MainServices = ({offers}) => {
    return (
        <section className="py-10 wrap">
            <h1 className="h1">Сервисы</h1>
            <Swiper
                spaceBetween={12}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                modules={[Autoplay]}
                className="h-[230px] my-5"
            >
                {offers.map((offer, i) => {
                    return (
                        <SwiperSlide key={i} className="w-[170px] h-full bg-gray-800 rounded-2xl px-2 py-3">
                            <div className='w-full h-full flex flex-col justify-end items-center'>
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