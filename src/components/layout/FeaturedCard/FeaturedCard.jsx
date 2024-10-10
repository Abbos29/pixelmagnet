
import s from './FeaturedCard.module.scss'

const FeaturedCard = ({ data }) => {
    return (
        <>
            <div className={s.card}>
                <img src={data.img} alt={data.title} />
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
        </>
    )
}

export default FeaturedCard