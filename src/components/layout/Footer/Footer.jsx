import s from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.box}>
                        <img src="/logo-2.svg" alt="logo" />
                        <div className={s.row}>
                            <div className={s.col}>
                                <h4>JAKARTA, id</h4>
                                <a href="">Jl.Jend Soedirman
                                    blok 1 kav 2. 11220</a>
                            </div>
                            <div className={s.col}>
                                <h4>Contact information</h4>
                                <a href="">INFO@PIXELMAGNET.COM</a>
                                <a href="">011-123-456</a>
                            </div>
                        </div>

                    </div>

                    <span className={s.none}></span>

                    <div className={s.menu}>
                        <div className={s.col}>
                            <a href="/service">Service</a>
                            <a href="/about">about</a>
                            <a href="/projects">Projects</a>
                            <a href="/blog">BLOG</a>
                        </div>
                        <div className={s.col}>
                            <a href="">instagram</a>
                            <a href="">x</a>
                            <a href="">facebook</a>
                            <a href="">youtube</a>
                        </div>
                    </div>
                </div>

                <div className={s.inner}>
                    <p>© 2023 Pixelmagnet.agency ALL RIGHTS RESERVED.</p>

                    <div>

                        <a href="">Terms of service</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer