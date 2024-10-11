import SecitonTitle from '../../ui/SectionTitle/SecitonTitle'
import s from './What.module.scss'

const What = () => {
    return (
        <section className={s.what}>
            <div className="container">
                <div className={s.top}>
                    <SecitonTitle>What we do</SecitonTitle>
                    <a href="">
                        View all
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.645 9.39502L30.75 18.5L21.645 27.605" stroke="#156AD4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.25 18.5H30.495" stroke="#156AD4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                <div className={s.wrapper}>
                    <img src="/what-img.png" alt="img" />

                    <h3>We're not your average marketing agency. We're a bunch of digital nomads on a mission to make your brand shine.</h3>
                </div>

                <div className={s.grid}>
                    <div className={s.card}>
                        <h4>Branding design</h4>
                    </div>
                    <div className={s.card}>
                        <h4>UX/UI design</h4>
                    </div>
                    <div className={s.card}>
                        <h4>App development</h4>
                    </div>
                    <div className={s.card}>
                        <h4>WEB development</h4>
                    </div>
                    <div className={s.card}>
                        <h4>Digital transformation</h4>
                    </div>
                    <div className={s.card}>
                        <h4>technological Advancement</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default What