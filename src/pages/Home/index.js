import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import images from '~/assets/images'
import { IoPricetagOutline } from "react-icons/io5"
import { HiStar } from "react-icons/hi"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Dọn dẹp nhà</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Bưng vác</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 150.000đ - 300.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Vận chuyển đồ đạc</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Dọn dẹp vườn</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Sửa điện</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Lắp ráp đồ đạc</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Giặt ủi</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 50.000đ - 150.000đ</p>
                        </li>
                        <li className={cx('body-content-item')}>
                            <div className={cx('body-content-img')}>
                                <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                            </div>
                            <h2 className={cx('body-content-item-title')}>Tỉa cây</h2>
                            <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.00đ</p>
                        </li>
                    </ul>
                </div>
                <div className={cx('body-bridge-wrapper')}>
                    <div className={cx('body-bridge')}>
                        <div className={cx('bridge-desc')}>
                            <h1 className={cx('bridge-title')}>Everyday life made easier</h1>
                            <p>When life gets busy, you don’t have to tackle it alone. Get time back for what you love without breaking the bank.</p>
                            <ul>
                                <li>Choose your Tasker by reviews, skills, and price</li>
                                <li>Schedule when it works for you — as early as today</li>
                                <li>Chat, pay, tip, and review all through one platform</li>
                            </ul>
                        </div>
                        <img className={cx('bridge-img')} src={images.task1Desktop} alt='Task1 Desktop' />
                    </div>
                </div>
                <div className={cx('body-content')}>
                    <p className={cx('body-content-title')}>Featured Taskers</p>
                    <div className={cx('slide-taskers')}>
                        <Splide
                            options={{
                                rewind: true,
                                perPage: 3,
                            }}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className={cx('taskers-item')}>
                                    <img src={images.tasker} alt='Tasker' />
                                    <h2>Ho Bao 1</h2>
                                    <div className={cx('taskers-star')}>
                                        <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                    </div>
                                    <div className={cx('taskers-skill')}>
                                        <p>Help Moving: <span>100.000đ/h</span></p>
                                    </div>
                                    <div className={cx('taskers-desc')}>
                                        <p>Thích màu hồng cánh sen</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className={cx('taskers-item')}>
                                    <img src={images.tasker} alt='Tasker' />
                                    <h2>Ho Bao 2</h2>
                                    <div className={cx('taskers-star')}>
                                        <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                    </div>
                                    <div className={cx('taskers-skill')}>
                                        <p>Help Moving: <span>100.000đ/h</span></p>
                                    </div>
                                    <div className={cx('taskers-desc')}>
                                        <p>Thích màu hồng cánh sen</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className={cx('taskers-item')}>
                                    <img src={images.tasker} alt='Tasker' />
                                    <h2>Ho Bao 3</h2>
                                    <div className={cx('taskers-star')}>
                                        <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                    </div>
                                    <div className={cx('taskers-skill')}>
                                        <p>Help Moving: <span>100.000đ/h</span></p>
                                    </div>
                                    <div className={cx('taskers-desc')}>
                                        <p>Thích màu hồng cánh sen</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className={cx('taskers-item')}>
                                    <img src={images.tasker} alt='Tasker' />
                                    <h2>Ho Bao 4</h2>
                                    <div className={cx('taskers-star')}>
                                        <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                    </div>
                                    <div className={cx('taskers-skill')}>
                                        <p>Help Moving: <span>100.000đ/h</span></p>
                                    </div>
                                    <div className={cx('taskers-desc')}>
                                        <p>Thích màu hồng cánh sen</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className={cx('taskers-item')}>
                                    <img src={images.tasker} alt='Tasker' />
                                    <h2>Ho Bao 5</h2>
                                    <div className={cx('taskers-star')}>
                                        <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                    </div>
                                    <div className={cx('taskers-skill')}>
                                        <p>Help Moving: <span>100.000đ/h</span></p>
                                    </div>
                                    <div className={cx('taskers-desc')}>
                                        <p>Thích màu hồng cánh sen</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className={cx('taskers-item')}>
                                    <img src={images.tasker} alt='Tasker' />
                                    <h2>Ho Bao 6</h2>
                                    <div className={cx('taskers-star')}>
                                        <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                    </div>
                                    <div className={cx('taskers-skill')}>
                                        <p>Help Moving: <span>100.000đ/h</span></p>
                                    </div>
                                    <div className={cx('taskers-desc')}>
                                        <p>Thích màu hồng cánh sen</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div className={cx('body-bridge-wrapper')}>
                    <div className={cx('body-bridge-2')}>
                        <div className={cx('bridge-desc')}>
                            <h1 className={cx('bridge-title')}>A go-to team at your fingertips</h1>
                            <p>Build your team of local, background-checked Taskers to help with — and for — life. Whatever you need, they’ve got it covered.</p>
                            <ul>
                                <li>Compare Tasker reviews, ratings, and prices</li>
                                <li>Compare Tasker reviews, ratings, and prices</li>
                                <li>Save your favorites to book again and again</li>
                            </ul>
                        </div>
                        <img className={cx('bridge-img')} src={images.task2Desktop} alt='Task2 Desktop' />
                    </div>
                </div>
                <div className={cx('end-page-wrapper')}>
                    <h1>Ready to get started?</h1>
                    <div className={cx('end-page-body')}>
                        <div className={cx('end-con')}>
                            <img className={cx('end-img')} src={images.signUp} alt='Sign-Up png' />
                            <p>Hear that? The sweet sigh of relief. Start getting more done.</p>
                            <button>Sign up</button>
                        </div>
                        <div className={cx('end-con')}>
                            <img className={cx('end-img')} src={images.become} alt='Sign-Up png' />
                            <p>Grow your own business while saving the day for busy neighbors.</p>
                            <button>Become a tasker</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;