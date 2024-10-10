import SecitonTitle from '../../ui/SectionTitle/SecitonTitle'
import s from './Featured.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/scrollbar';

import FeaturedData from './FeaturedData.js'
import FeaturedCard from '../FeaturedCard/FeaturedCard.jsx';

const Featured = () => {
    return (
        <section className={s.featured}>
            <div className="container">
                <div className={s.top}>
                    <SecitonTitle>Featured works</SecitonTitle>
                    <a href="">
                        View all
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.645 9.39502L30.75 18.5L21.645 27.605" stroke="#156AD4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.25 18.5H30.495" stroke="#156AD4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className={`${s.container} container`}>
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    slidesPerView={1.4}
                    spaceBetween={16}
                    modules={[Scrollbar]}
                    className={s.feat_swiper}
                    breakpoints={{
                        900: {
                            slidesPerView: 2.6,
                            spaceBetween: 32
                        },
                        500: {
                            slidesPerView: 2.1,
                            spaceBetween: 16

                        }
                    }}
                >

                    {FeaturedData.map(card => (
                        <SwiperSlide key={card.id}>
                            <FeaturedCard data={card} />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    )
}

export default Featured