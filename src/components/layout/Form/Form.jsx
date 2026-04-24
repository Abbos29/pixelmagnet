import s from './Form.module.scss'
import { Link } from 'react-router-dom';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:info@pixelmagnet.com?subject=New%20Project%20Request';
    };

    return (
        <section className={s.form}>
            <div className="container">
                <form onSubmit={handleSubmit}>
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

                        <b>By clicking the submit button you agree to our <Link to="/privacy">Privacy Policy</Link> terms.</b>
                    </div>

                    <button type="submit" className={s.btn}>Submit</button>
                </form>

            </div>
        </section>
    )
}

export default Form
