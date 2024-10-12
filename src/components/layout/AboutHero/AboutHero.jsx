import s from './AboutHero.module.scss'

const AboutHero = () => {
    return (
        <section className={s.aboutHero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        <h3>ABOUT</h3>
                        <h1>dedicated to helping your brand thrive in the ever-evolving digital landscape.</h1>
                    </div>

                    <div className={s.content}>
                        <img src="/about-hero-img.png" alt="img" />
                        <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                    </div>


                </div>

                <div className={s.inner}>
                    <div className={s.card}>
                        <h3>1200+</h3>
                        <p>Companies
                            were helped</p>
                    </div>
                    <div className={s.card}>
                        <h3>400+</h3>
                        <p>Companies
                            were helped</p>
                    </div>
                    <div className={s.card}>
                        <h3>150+</h3>
                        <p>Companies
                            were helped</p>
                    </div>
                </div>


            </div>
            <div className={s.bottom}>
                <div className="container">
                    <div className={s.our}>
                        <h2>OUR <br /> MISSION</h2>
                        <p>We are committed to delivering exceptional results for our clients through a combination of creativity, data-driven strategies, and unwavering dedication.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutHero