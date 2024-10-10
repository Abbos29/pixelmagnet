import s from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.titles}>
                        <h1>Begin your <span></span>  Digital Odyssey</h1>
                        <p>We're the explorers of the digital frontier. Join us on an epic odyssey to discover the uncharted territories of online success.</p>
                    </div>

                    <div className={s.list}>
                        <p>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.97" d="M24.285 3H11.715C6.255 3 3 6.255 3 11.715V24.27C3 29.745 6.255 33 11.715 33H24.27C29.73 33 32.985 29.745 32.985 24.285V11.715C33 6.255 29.745 3 24.285 3ZM12.465 24.465C11.385 24.465 10.5 23.58 10.5 22.5C10.5 21.42 11.385 20.535 12.465 20.535C13.545 20.535 14.43 21.42 14.43 22.5C14.43 23.58 13.545 24.465 12.465 24.465ZM18 15.465C16.92 15.465 16.035 14.58 16.035 13.5C16.035 12.42 16.92 11.535 18 11.535C19.08 11.535 19.965 12.42 19.965 13.5C19.965 14.58 19.08 15.465 18 15.465ZM23.535 24.465C22.455 24.465 21.57 23.58 21.57 22.5C21.57 21.42 22.455 20.535 23.535 20.535C24.615 20.535 25.5 21.42 25.5 22.5C25.5 23.58 24.615 24.465 23.535 24.465Z" fill="#FF772A" />
                            </svg>
                            Our service
                        </p>

                        <p>Branding</p>
                        <p>UX/UI Design </p>
                        <p>App Development</p>
                        <p>Web Development</p>
                        <p>Digital Transformation</p>
                        <p>
                            Explore more
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18H27" stroke="#156AD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 27V9" stroke="#156AD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </p>
                    </div>
                </div>

                <div className={s.wrap}>
                    <div className={s.num}>
                        <div>
                            <h2>1200+</h2>
                            <h3>Companies <br />
                                were helped</h3>
                        </div>
                    </div>

                    <div className={s.quote}>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8765 27.1366H7.93317C8.11984 16.24 10.2665 14.4433 16.9632 10.4766C17.7332 10.01 17.9898 9.02997 17.5232 8.23664C17.0798 7.46664 16.0765 7.20997 15.3065 7.67664C7.41984 12.3433 4.6665 15.19 4.6665 28.7466V41.3233C4.6665 45.3133 7.90984 48.5333 11.8765 48.5333H18.8765C22.9832 48.5333 26.0865 45.43 26.0865 41.3233V34.3233C26.0865 30.24 22.9832 27.1366 18.8765 27.1366Z" fill="#FF772A" />
                            <path d="M44.1235 27.1366H33.1801C33.3668 16.24 35.5135 14.4433 42.2101 10.4766C42.9801 10.01 43.2368 9.02997 42.7701 8.23664C42.3035 7.46664 41.3235 7.20997 40.5301 7.67664C32.6435 12.3433 29.8901 15.19 29.8901 28.77V41.3466C29.8901 45.3366 33.1335 48.5566 37.1001 48.5566H44.1001C48.2068 48.5566 51.3101 45.4533 51.3101 41.3466V34.3466C51.3335 30.24 48.2301 27.1366 44.1235 27.1366Z" fill="#FF772A" />
                        </svg>

                        <p>PixelMagnet has earned its place as a digital marketing frontrunner. Their innovative strategies and creative prowess make them a force to be reckoned with in the industry.</p>
                        <b>- Digital Marketing Magazine</b>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero