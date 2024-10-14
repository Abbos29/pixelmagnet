import FeaturedCard from '../FeaturedCard/FeaturedCard.jsx'
import s from './Catalog.module.scss'

import CatalogData from './CatalogData.js'


const Catalog = () => {
    return (
        <section className={s.catalog}>
            <div className="container">

                <div className={s.filter}>
                    <p>All</p>
                    <p>Branding</p>
                    <p>UX/UI Design </p>
                    <p>App Development</p>
                    <p>Web Development</p>
                    <p>Digital Transformation</p>
                </div>

                <div className={s.cards}>
                    {CatalogData.map((card) => (
                        <FeaturedCard key={card.id} data={card} />
                    ))}
                </div>

                <button className={s.btn}>Load more</button>
            </div>
        </section>
    )
}

export default Catalog