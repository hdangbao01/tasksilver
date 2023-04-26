import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import images from '~/assets/images'
import { IoPricetagOutline } from "react-icons/io5";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('content')}>
            <div className={cx('header-content')}>
                <p className={cx('header-content-title')}>How can we help?</p>
                <div className={cx('header-content-body')}>
                    <input className={cx('header-content-input')} placeholder='Enter task for help...' />
                    <button className={cx('header-content-btn')}>Get help today</button>
                </div>
            </div>
            <div className={cx('body-content-wrapper')}>
                <div className={cx('body-content')}>
                    <p className={cx('body-content-title')}>Popular services</p>
                    <ul className={cx('body-content-list')}>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                    </ul>
                    <ul className={cx('body-content-list')}>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            <h2 className={cx('body-content-item-title')}>Home Cleaning</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Price: $10 - $50</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;