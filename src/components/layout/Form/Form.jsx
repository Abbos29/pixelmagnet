import s from './Form.module.scss'

const Form = () => {
    return (
        <section className={s.form}>
            <div className="container">
                <form action="">
                    <div className={s.row}>
                        <div className={s.col}>
                            <div>
                                <p>Name*</p>
                                <input type="text" placeholder='Your number' />
                            </div>
                            <div>
                                <p>Phone number*</p>
                                <input type="text" placeholder='Your number' />
                            </div>
                            <div>
                                <p>Email*</p>
                                <input type="text" placeholder='Your email' />
                            </div>
                            <div>
                                <p>Company*</p>
                                <input type="text" placeholder='Company name' />
                            </div>
                            <div>
                                <p>Website*</p>
                                <input type="text" placeholder='Company location' />
                            </div>

                        </div>

                        <div className={s.col}>
                            <div>
                                <p>Category*</p>
                                <input type="text" placeholder='Select below' />
                            </div>
                            <div>
                                <p>Location*</p>
                                <input type="text" placeholder='Company location' />
                            </div>
                            <div>
                                <p>Budget</p>
                                <div className={s.btns}>
                                    <span>$400</span>
                                    <span>$500</span>
                                    <span>$750</span>
                                    <span>$1000</span>
                                    <span>$1500</span>
                                    <span>$2000</span>
                                    <span>$3000</span>
                                </div>
                                <input type="text" placeholder='Or type the amount' />
                            </div>
                        </div>
                    </div>
                    <div className={s.col}>
                        <p>Summary*</p>
                        <textarea name="" id="" placeholder='Briefly tell us about your projects'></textarea>

                        <b>By clicking the submit button you agree to our <a href="">Privacy Policy</a> terms.</b>
                    </div>

                    <button className={s.btn}>Submit</button>
                </form>

            </div>
        </section>
    )
}

export default Form