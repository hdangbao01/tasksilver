import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import images from '~/assets/images'
import { useEffect, useState } from 'react'
import { IoPricetagOutline } from "react-icons/io5"
import { HiStar } from "react-icons/hi"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const cx = classNames.bind(styles)

function Home() {
    const [listServices, setListServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/service`)
            .then((res) => res.json())
            .then((res) => {
                setListServices(res)
            })
    }, [])

    return (
        <div className={cx('content')}>
            <div className={cx('header-content')}>
                <p className={cx('header-content-title')}>Chúng tôi có thể giúp gì cho bạn?</p>
                <div className={cx('header-content-body')}>
                    <input className={cx('header-content-input')} placeholder='Nhập công việc...' />
                    <button className={cx('header-content-btn')}>Nhận giúp đỡ ngay</button>
                </div>
            </div>
            <div className={cx('body-content-wrapper')}>
                <div className={cx('body-content')}>
                    <p className={cx('body-content-title')}>Dịch vụ phổ biến</p>
                    <ul className={cx('body-content-list')}>
                        {listServices.map(itemServices => (
                            <li className={cx('body-content-item')} key={itemServices.id}>
                                <div className={cx('body-content-img')}>
                                    <Link to={`/tasks/${itemServices.id}`} >
                                        <img className={cx('body-content-item-img')} src={images.background} alt='service' />
                                    </Link>
                                </div>
                                <Link to={`/tasks/${itemServices.id}`} className={cx('link')} >
                                    <h2 className={cx('body-content-item-title')}>{itemServices.name}</h2>
                                </Link>
                                <p className={cx('body-content-item-price')}><IoPricetagOutline /> Giá: 100.000đ - 200.000đ</p>
                            </li>
                        ))}
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
                    <p className={cx('body-content-title')}>Người giúp việc nổi bậc</p>
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
                <div className={cx('location-wrapper')}>
                    <p className={cx('location-title')}>Địa điểm chúng tôi làm việc - tasksilver</p>
                    <img className={cx('earth')} src={images.earth} alt='earth' />
                    <div className={cx('location-city')}>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Da Nang</h3>
                            <p>Ngu Hanh Son</p>
                            <p>Lien Chieu</p>
                            <p>Son Tra</p>
                        </div>
                    </div>
                </div>
                <div className={cx('end-page-wrapper')}>
                    <h1>Bắt đầu ngay?</h1>
                    <div className={cx('end-page-body')}>
                        <div className={cx('end-con')}>
                            <img className={cx('end-img')} src={images.signUp} alt='Sign-Up png' />
                            <p>Bạn muốn cuộc sống nhẹ nhàng hơn. Đăng ký để thuê người giúp việc.</p>
                            <Link to={`/login`} ><button>Đăng ký ngay</button></Link>
                        </div>
                        <div className={cx('end-con')}>
                            <img className={cx('end-img')} src={images.become} alt='Sign-Up png' />
                            <p>Đăng ký công việc của riêng bạn để trở thành người giúp việc của chúng tôi.</p>
                            <button>Nhận công việc</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;