import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import images from '~/assets/images'
import { useState, useContext } from 'react'
import { AppContext } from '~/components/AppContext';
import { BiInfoCircle } from "react-icons/bi"
import { HiStar } from "react-icons/hi"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const cx = classNames.bind(styles)

function Home() {
    const {listServices, listTasks} = useContext(AppContext)

    const [search, setSearch] = useState('')
    const [checkSVAvailbe, setCheckSVAvailbe] = useState(true)
    const [checkTAvailbe, setCheckTAvailbe] = useState(true)

    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, "");
        str = str.replace(/ + /g, " ");
        str = str.trim();
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str;
    }

    const handleSearch = () => {
        setCheckSVAvailbe(listServices.some(service => (
            removeVietnameseTones(service.name).toLowerCase().includes(removeVietnameseTones(search.toLowerCase()))
        )))
        setCheckTAvailbe(listTasks.some(task => (
            removeVietnameseTones(task.name).toLowerCase().includes(removeVietnameseTones(search.toLowerCase()))
        )))

        const resultSV = listServices.find(service => (
            removeVietnameseTones(service.name).toLowerCase().includes(removeVietnameseTones(search.toLowerCase()))
        ))

        const resultT = listTasks.find(task => (
            removeVietnameseTones(task.name).toLowerCase().includes(removeVietnameseTones(search.toLowerCase()))
        ))

        if (resultSV) {
            window.location.href = `/tasks/${resultSV.id}`
        } else if (resultT) {
            window.location.href = `/tasks/${resultT.serviceId}`
        }
    }

    return (
        <div className={cx('content')}>
            <div className={cx('header-content')}>
                <p className={cx('header-content-title')}>Chúng tôi có thể giúp gì cho bạn?</p>
                <div className={cx('header-content-body')}>
                    <input className={cx('header-content-input')} placeholder='Nhập công việc...'
                        value={search} onChange={e => setSearch(e.target.value)}
                    />
                    <button className={cx('header-content-btn')} onClick={handleSearch}>Nhận giúp đỡ ngay</button>
                </div>
                {!checkSVAvailbe && !checkTAvailbe && <p className={cx('result-search')}>Không có công việc bạn muốn tìm!</p>}
            </div>
            <div className={cx('body-content-wrapper')}>
                <div className={cx('body-content')}>
                    <p className={cx('body-content-title')}>Dịch vụ phổ biến</p>
                    <ul className={cx('body-content-list')}>
                        {listServices.map(itemServices => (
                            <li className={cx('body-content-item')} key={itemServices.id}>
                                <div className={cx('body-content-img')}>
                                    <Link to={`/tasks/${itemServices.id}`} >
                                        <img className={cx('body-content-item-img')} src={require(`../../api-tasksilver/Photos/${itemServices?.image}`)} alt='service' />
                                    </Link>
                                </div>
                                <Link to={`/tasks/${itemServices.id}`} className={cx('link')} >
                                    <h2 className={cx('body-content-item-title')}>{itemServices.name}</h2>
                                </Link>
                                <p className={cx('body-content-item-price')}><BiInfoCircle /> Xem các công việc</p>
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
                            <h3>Đà Nẵng</h3>
                            <p>Ngũ Hành Sơn</p>
                            <p>Sơn Trà</p>
                            <p>Thanh Khê</p>
                            <p>Cẩm Lệ</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Đà Nẵng</h3>
                            <p>Ngũ Hành Sơn</p>
                            <p>Sơn Trà</p>
                            <p>Thanh Khê</p>
                            <p>Cẩm Lệ</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Đà Nẵng</h3>
                            <p>Ngũ Hành Sơn</p>
                            <p>Sơn Trà</p>
                            <p>Thanh Khê</p>
                            <p>Cẩm Lệ</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Đà Nẵng</h3>
                            <p>Ngũ Hành Sơn</p>
                            <p>Sơn Trà</p>
                            <p>Thanh Khê</p>
                            <p>Cẩm Lệ</p>
                        </div>
                        <div className={cx('location-city-item')}>
                            <h3>Đà Nẵng</h3>
                            <p>Ngũ Hành Sơn</p>
                            <p>Sơn Trà</p>
                            <p>Thanh Khê</p>
                            <p>Cẩm Lệ</p>
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
                            <Link to={`/register`} ><button>Nhận công việc</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;