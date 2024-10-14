import s from './ServiceHero.module.scss'

const ServiceHero = () => {
    return (
        <section className={s.serviceHero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        <h3>Service</h3>
                        <h1>empower your brand to shine in the digital realm</h1>
                    </div>

                    <div className={s.content}>
                        {/* <img src="/about-hero-img.png" alt="img" /> */}
                        <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                    </div>
                </div>

                <div className={s.grid}>
                    <img className={`${s.card} ${s.card_1}`} src='/service-hero-1.svg' alt='img' />
                    <img className={`${s.card} ${s.card_2}`} src='/service-hero-2.jpg' alt='img' />
                    <img className={`${s.card} ${s.card_3}`} src='/service-hero-3.jpg' alt='img' />
                    <img className={`${s.card} ${s.card_4}`} src='/service-hero-4.jpg' alt='img' />
                    <img className={`${s.card} ${s.card_5}`} src='/service-hero-5.jpg' alt='img' />
                    <div className={`${s.card} ${s.card_6}`}>
                        <p>Branding</p>
                        <p>UX/UI Design </p>
                        <p>App Development</p>
                        <p>Web Development</p>
                        <p>Digital Transformation</p>
                        <p>Technological Advancement</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServiceHero