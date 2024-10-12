import s from './Who.module.scss'
import WhoData from './WhoData.js'

const Who = () => {
    return (
        <section className={s.who}>
            <div className="container">
                <div className={s.wrap}>
                    <h3>Who we are</h3>

                    <div>
                        <p>Our journey began with a simple idea: to make the digital world accessible and profitable for businesses of all sizes. Founded in [Year of Establishment], we set out to bridge the gap between creativity and strategy, between technology and human connection.</p>
                        <p>Over the years, we've grown from a small team with big dreams to a dynamic agency that's making waves in the industry.</p>
                    </div>
                </div>

                <div className={s.wrapper}>
                    <h3>Our principles</h3>

                    <div className={s.grid}>

                        {WhoData.map((item) => (
                            <div key={item.id} className={s.card}>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Who