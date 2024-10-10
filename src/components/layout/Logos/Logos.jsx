// import Marquee from 'react-marquee-slider'
import s from './Logos.module.scss'

const companyNames = [
    "Richemont", "HBO Max", "META", "Modelo",
    "Dropbox", "Millennium", "Richemont",
    "HBO Max", "META", "Modelo", "Dropbox", "Millennium"
];

const Logos = () => {


    return (
        <section className={s.logos}>
            <div className="container" style={{ maxWidth: '1900px', padding: '0' }}>

                <h3 className={s.title}>TRUSTED BY THE WORLD’S LEADING COMPANIES</h3>


                <div className={s.wrap}>

                    <div className={s.marquee}>
                        {companyNames.map((name, index) => (
                            <h2 key={index} className={index % 2 === 1 ? s.orange : ''}>
                                {name}
                            </h2>
                        ))}
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Logos