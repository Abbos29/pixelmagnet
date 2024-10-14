import s from './ProjectHero.module.scss'

const ProjectHero = () => {
    return (
        <>
            <section className={s.projectHero}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.box}>
                            {/* <h3>Service</h3> */}
                            <h1>Projects</h1>
                            <h4>1200+</h4>
                        </div>

                        <div className={s.content}>
                            {/* <img src="/about-hero-img.png" alt="img" /> */}
                            <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                        </div>
                    </div>

                    <div className={s.grid}>
                        <img className={`${s.card} ${s.card_1}`} src="/proj-1.jpg" alt="img" />
                        <img className={`${s.card} ${s.card_2}`} src="/proj-2.jpg" alt="img" />
                        <img className={`${s.card} ${s.card_3}`} src="/proj-3.jpg" alt="img" />
                        <img className={`${s.card} ${s.card_4}`} src="/proj-4.jpg" alt="img" />
                        <img className={`${s.card} ${s.card_5}`} src="/proj-5.jpg" alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectHero