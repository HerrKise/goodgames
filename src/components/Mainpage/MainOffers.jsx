import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

export const MainOffers = ({offers}) => {

    return (
        <section className="py-10 wrap">
            <h1 className="h1">Предложения</h1>
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
                        <SwiperSlide key={i} className="w-[170px] h-full bg-gray-800 rounded-2xl px-2 py-3">
                            <div className='w-full h-full flex flex-col justify-between items-start'>
                                <h3 className='h3'>{offer.title}</h3>
                                <div className='space-y-2'>
                                    <p className='p'>{offer.description}</p>
                                    <p className='text-[10px] leading-2'>{offer.date}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}