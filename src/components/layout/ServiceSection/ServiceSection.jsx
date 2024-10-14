import Slider from '../Slider/Slider'
import s from './ServiceSection.module.scss'

import FeaturedData from '../Featured/FeaturedData.js'

import ServiceSectionData from './ServiceSectionData.js'

const ServiceSection = () => {
    return (
        <>
            <section className={s.serviceSection}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.box}>
                            <h3>Service</h3>
                            <h1>BRANDING & <br />
                                UX/UI</h1>
                        </div>

                        <div className={s.content}>
                            {/* <img src="/about-hero-img.png" alt="img" /> */}
                            {/* <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p> */}
                        </div>
                    </div>

                    <div className={s.menu}>
                        <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>

                        <ul>
                            {ServiceSectionData.map(item => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    <Slider data={FeaturedData} variant={'mini'} />

                    
                    <div className={s.wrap}>
                        <div className={s.box}>
                            <h3>Service</h3>
                            <h1>App & Web development</h1>
                        </div>

                        <div className={s.content}>
                            {/* <img src="/about-hero-img.png" alt="img" /> */}
                            {/* <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p> */}
                        </div>
                    </div>

                    <div className={s.menu}>
                        <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>

                        <ul>
                            {ServiceSectionData.map(item => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    <Slider data={FeaturedData} variant={'mini'} />

                    <div className={s.wrap}>
                        <div className={s.box}>
                            <h3>Service</h3>
                            <h1>digital transformation</h1>
                        </div>

                        <div className={s.content}>
                            {/* <img src="/about-hero-img.png" alt="img" /> */}
                            {/* <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p> */}
                        </div>
                    </div>

                    <div className={s.menu}>
                        <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>

                        <ul>
                            {ServiceSectionData.map(item => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    <Slider data={FeaturedData} variant={'mini'} />

                    <div className={s.wrap}>
                        <div className={s.box}>
                            <h3>Service</h3>
                            <h1>technological <br />
                            Advancement</h1>
                        </div>

                        <div className={s.content}>
                            {/* <img src="/about-hero-img.png" alt="img" /> */}
                            {/* <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p> */}
                        </div>
                    </div>

                    <div className={s.menu}>
                        <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>

                        <ul>
                            {ServiceSectionData.map(item => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    <Slider data={FeaturedData} variant={'mini'} />



                </div>
            </section>
        </>
    )
}

export default ServiceSection