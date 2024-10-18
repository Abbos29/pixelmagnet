import s from './DetailsHero.module.scss'

const DetailsHero = () => {
    return (
        <section className={s.detailsHero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        {/* <h3>Service</h3> */}
                        <h3>Project details</h3>

                        <h1>Mindmate - AI chat web & app</h1>
                    </div>

                    <div className={s.content}>
                        {/* <img src="/about-hero-img.png" alt="img" /> */}
                        <p>UX/UI & App Development</p>
                        <p>2022</p>
                    </div>
                </div>

                <img className={s.poster} src="/details-1.jpg" alt="img" />
            </div>
        </section>
    )
}

export default DetailsHero