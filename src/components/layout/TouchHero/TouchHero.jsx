import s from './TouchHero.module.scss'


const TouchHero = () => {
    return (
        <>
            <section className={s.touchHero}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.box}>
                            <h3>GET IN TOUCH</h3>
                            <div className={s.titles}>
                                <h1>Ready to take your digital presence to the next level? <span></span></h1>
                            </div>
                        </div>

                        <div className={s.content}>
                            <img src="/touch-img.png" alt="img" />
                        </div>
                    </div>

                    <div className={s.inner}>
                        <p>Whether you have questions, want to discuss your project, or simply want to say hello, we'd love to hear from you. Contact our team of experts today, and let's start crafting your digital success story.</p>

                        <div className={s.menu}>
                            <div>
                                <b><p>JAKARTA, id</p></b>
                                <p>Jl.Jend Soedirman <br />
                                blok 1 kav 2. 11220</p>
                            </div>

                            <div>
                                <b><p>Contact information</p></b>
                                <p>INFO@PIXELMAGNET.COM <br /> 011-123-456</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TouchHero