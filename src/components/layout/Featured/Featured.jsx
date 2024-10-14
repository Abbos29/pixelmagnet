import SecitonTitle from '../../ui/SectionTitle/SecitonTitle'
import s from './Featured.module.scss'

import Slider from '../Slider/Slider.jsx';

import FeaturedData from './FeaturedData.js'

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
                <Slider data={FeaturedData} />
            </div>
        </section>
    )
}

export default Featured