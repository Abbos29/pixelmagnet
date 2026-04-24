import s from './Footer.module.scss'
import { Link } from 'react-router-dom';

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
                                <a href="https://maps.google.com/?q=Jl.Jend+Soedirman+blok+1+kav+2+Jakarta" target="_blank" rel="noreferrer">Jl.Jend Soedirman
                                    blok 1 kav 2. 11220</a>
                            </div>
                            <div className={s.col}>
                                <h4>Contact information</h4>
                                <a href="mailto:info@pixelmagnet.com">INFO@PIXELMAGNET.COM</a>
                                <a href="tel:+011123456">011-123-456</a>
                            </div>
                        </div>

                    </div>

                    <span className={s.none}></span>

                    <div className={s.menu}>
                        <div className={s.col}>
                            <Link to="/service">Service</Link>
                            <Link to="/about">about</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/blog">BLOG</Link>
                        </div>
                        <div className={s.col}>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer">instagram</a>
                            <a href="https://x.com/" target="_blank" rel="noreferrer">x</a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer">facebook</a>
                            <a href="https://youtube.com/" target="_blank" rel="noreferrer">youtube</a>
                        </div>
                    </div>
                </div>

                <div className={s.inner}>
                    <p>© 2023 Pixelmagnet.agency ALL RIGHTS RESERVED.</p>

                    <div>

                        <Link to="/terms">Terms of service</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
