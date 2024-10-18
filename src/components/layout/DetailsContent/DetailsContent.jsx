import s from './DetailsContent.module.scss'

const DetailsContent = () => {
    return (
        <>
            <section className={s.detailsContent}>
                <div className="container">
                    <div className={s.box}>
                        <h3>BAckground</h3>
                        <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                    </div>

                    <div className={s.wrap}>
                        <h3>Design process</h3>

                        <div>
                            <h5>Parallax Scrolling</h5>
                            <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                        </div>
                        <div>
                            <h5>Parallax Scrolling</h5>
                            <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                        </div>
                        <div>
                            <h5>Parallax Scrolling</h5>
                            <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                        </div>
                    </div>

                    <div className={s.grid}>
                        <img className={s.img1} src="/details-content-1.jpg" alt="img" />
                        <img className={s.img2} src="/details-content-2.jpg" alt="img" />
                        <img className={s.img3} src="/details-content-3.jpg" alt="img" />
                        <img className={s.img4} src="/details-content-4.jpg" alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailsContent