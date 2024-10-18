import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import s from './Slider.module.scss';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const Slider = ({ data, variant }) => {
    // Условное добавление класса для варианта mini
    const sliderClass = variant === 'mini' ? `${s.feat_swiper} ${s.mini}` : s.feat_swiper;

    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                slidesPerView={1.4}
                spaceBetween={16}
                modules={[Scrollbar]}
                className={sliderClass} // Используем условный класс
                breakpoints={{
                    900: {
                        slidesPerView: 2.3,
                        spaceBetween: 32,
                    },
                    500: {
                        slidesPerView: 2.1,
                        spaceBetween: 16,
                    },
                }}
            >
                {data.map((card) => (
                    <SwiperSlide key={card.id}>
                        <FeaturedCard data={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;
