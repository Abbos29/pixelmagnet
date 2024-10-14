import s from './BlogList.module.scss'

const BlogList = () => {
    return (
        <div className={s.blogList}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        <h1>Blog</h1>
                    </div>

                    <div className={s.content}>
                        <p>Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                    </div>
                </div>

                <div className={s.first}>
                    <img src="/blog-first.jpg" alt="blog" />

                    <div className={s.inner}>
                        <div>
                            <h3>Introducing: A brand new Dribbble for your portfolio social media</h3>
                            <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                            <span>2023 - UX/UI & App Development</span>
                        </div>

                        <svg width="167" height="167" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M115.597 98.7009C114.937 99.3615 114.033 99.7787 112.99 99.7787C110.974 99.7787 109.305 98.1099 109.305 96.0935L109.305 57.5727L70.784 57.5727C68.7675 57.5727 67.0988 55.9039 67.0988 53.8875C67.0988 51.871 68.7675 50.2022 70.784 50.2022L112.99 50.2022C115.006 50.2022 116.675 51.871 116.675 53.8874L116.675 96.0935C116.675 97.1365 116.258 98.0404 115.597 98.7009Z" fill="white" />
                            <path d="M115.006 57.0859L56.4947 115.597C55.0693 117.023 52.7052 117.023 51.2798 115.597C49.8544 114.172 49.8544 111.808 51.2798 110.382L109.791 51.871C111.217 50.4456 113.581 50.4456 115.006 51.871C116.431 53.2964 116.431 55.6605 115.006 57.0859Z" fill="white" />
                        </svg>
                    </div>

                </div>

                <div className={s.blog_row}>
                    <div className={s.blog_card}>
                        <img src="/blog-1.jpg" alt="blog" />
                        <div>

                            <h4>Email Love - Email Inspiration, Templates and Discovery</h4>
                            <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                        </div>
                    </div>
                    <div className={s.blog_card}>
                        <img src="/blog-2.jpg" alt="blog" />
                        <div>

                            <h4>What makes your design awesome?</h4>
                            <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                        </div>
                    </div>
                </div>

                <div className={s.first}>
                    <img src="/blog-first-2.jpg" alt="blog" />

                    <div className={s.inner}>
                        <div>
                            <h3>Blueprint fidelity: between paper prototype and finished product</h3>
                            <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                            <span>2023 - UX/UI & App Development</span>
                        </div>

                        <svg width="167" height="167" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M115.597 98.7009C114.937 99.3615 114.033 99.7787 112.99 99.7787C110.974 99.7787 109.305 98.1099 109.305 96.0935L109.305 57.5727L70.784 57.5727C68.7675 57.5727 67.0988 55.9039 67.0988 53.8875C67.0988 51.871 68.7675 50.2022 70.784 50.2022L112.99 50.2022C115.006 50.2022 116.675 51.871 116.675 53.8874L116.675 96.0935C116.675 97.1365 116.258 98.0404 115.597 98.7009Z" fill="white" />
                            <path d="M115.006 57.0859L56.4947 115.597C55.0693 117.023 52.7052 117.023 51.2798 115.597C49.8544 114.172 49.8544 111.808 51.2798 110.382L109.791 51.871C111.217 50.4456 113.581 50.4456 115.006 51.871C116.431 53.2964 116.431 55.6605 115.006 57.0859Z" fill="white" />
                        </svg>
                    </div>

                </div>


                <div className={s.blog_row}>
                    <div className={s.blog_card}>
                        <img src="/blog-3.jpg" alt="blog" />
                        <div>

                            <h4>How to create SVG-ready icon symbols in Sketch</h4>
                            <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                        </div>
                    </div>
                    <div className={s.blog_card}>
                        <img src="/blog-4.jpg" alt="blog" />
                        <div>

                            <h4>Designers and statisticians disagree on what makes a good information graphic</h4>
                            <p>Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.</p>
                        </div>
                    </div>
                </div>

                <button className={s.btn}>Load more</button>

            </div>
        </div>
    )
}

export default BlogList