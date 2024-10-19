import s from './Quote.module.scss'

const Quote = () => {
    return (
        <>
            <section className={s.quote}>
                <div className="container">
                    <div className={s.card}>
                        
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8766 27.1366H7.93329C8.11996 16.24 10.2666 14.4433 16.9633 10.4766C17.7333 10.01 17.99 9.02997 17.5233 8.23664C17.08 7.46664 16.0766 7.20997 15.3066 7.67664C7.41996 12.3433 4.66663 15.19 4.66663 28.7466V41.3233C4.66663 45.3133 7.90996 48.5333 11.8766 48.5333H18.8766C22.9833 48.5333 26.0866 45.43 26.0866 41.3233V34.3233C26.0866 30.24 22.9833 27.1366 18.8766 27.1366Z" fill="#FF772A" />
                            <path d="M44.1233 27.1366H33.18C33.3667 16.24 35.5133 14.4433 42.21 10.4766C42.98 10.01 43.2367 9.02997 42.77 8.23664C42.3033 7.46664 41.3233 7.20997 40.53 7.67664C32.6433 12.3433 29.89 15.19 29.89 28.77V41.3466C29.89 45.3366 33.1333 48.5566 37.1 48.5566H44.1C48.2067 48.5566 51.31 45.4533 51.31 41.3466V34.3466C51.3333 30.24 48.23 27.1366 44.1233 27.1366Z" fill="#FF772A" />
                        </svg>
                        
                        <h2>PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them.</h2>

                        <div className={s.user}>
                            <img src="/user-1.png" alt="img" />
                            <div>
                                <h4>Adam Freeman</h4>
                                <p>Startup owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quote