import SecitonTitle from '../../ui/SectionTitle/SecitonTitle'
import Slider from '../Slider/Slider'
import s from './Related.module.scss'

import RelatedData from './RelatedData.js'

const Related = () => {
    return (
        <div className={s.related}>
            <div className="container">
                <SecitonTitle>Related articles</SecitonTitle>
                <Slider data={RelatedData} />
            </div>
        </div>
    )
}

export default Related