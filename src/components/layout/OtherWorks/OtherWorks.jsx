import SecitonTitle from '../../ui/SectionTitle/SecitonTitle'
import Slider from '../Slider/Slider'
import s from './OtherWorks.module.scss'

import FeaturedData from '/src/components/layout/Featured/FeaturedData.js'

const OtherWorks = () => {
    return (
        <>
            <section className={s.otherWorks}>
                <div className="container">
                    <SecitonTitle>OTHER works</SecitonTitle>

                    <Slider data={FeaturedData} />
                </div>
            </section>
        </>
    )
}

export default OtherWorks