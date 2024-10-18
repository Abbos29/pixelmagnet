import Related from '../Related/Related.jsx'
import s from './ArticleHero.module.scss'

import ArticleHeroData from './ArticleHeroData.js'

const ArticleHero = () => {
    return (
        <section className={s.articleHero}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.titles}>
                        <h3>ARTICLE</h3>
                        <h2>Introducing: A brand new Dribbble for designers</h2>
                        <p>Sept, 24 2023 • 3 min read</p>
                    </div>

                    <div className={s.list}>
                        <p>instagram</p>
                        <p>x</p>
                        <p>facebook</p>
                        <p>youtube</p>
                    </div>
                </div>

                <div className={s.wrap}>
                    <img className={s.wrap_img} src="/blog-first.jpg" alt="img" />

                    <div className={s.content}>
                        {ArticleHeroData.map((item, index) => (
                            <div key={index}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <Related/>

                </div>
            </div>
        </section>
    )
}

export default ArticleHero