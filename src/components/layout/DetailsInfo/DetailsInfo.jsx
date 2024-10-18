import s from './DetailsInfo.module.scss'

const DetailsInfo = () => {
    return (
        <>
            <section className={s.detailsInfo}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.card}>
                            <h3>The client</h3>
                            <div className={s.list}>
                                <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                            </div>
                        </div>
                        <div className={s.card}>
                            <h3>DICIPLINE USED</h3>
                            <div className={s.list}>
                                <ul>
                                    <li>UX/UI Design</li>
                                    <li>Micro-animations</li>
                                    <li>WordPress Development</li>
                                    <li>Guttenberg Block Development</li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.card}>
                            <h3>PROJECT TYPE</h3>
                            <div className={s.list}>
                                <p>UX/UI & App Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailsInfo