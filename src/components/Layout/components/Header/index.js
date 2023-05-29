import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '~/components/AppContext';
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";

const cx = classNames.bind(styles)

function Header() {
    const {userLogin, userData} = useContext(AppContext)

    const [index, setIndex] = useState(window.location.pathname.split('/')[1])
    const [offset, setOffset] = useState(0)
    const [isMenu, setIsMenu] = useState(false)

    // Window Scroll
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)

        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, []);
    // Active Backgound Menu
    useEffect(() => {
        if (offset > 1) {
            setIsMenu(true)
        } else {
            setIsMenu(false)
        }
    }, [offset]);

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.reload()
    }

    return (
        <header className={cx('wrapper', { 'fixed': isMenu })}>
            <div className={cx('menu-bar')}>
                <div className={cx('menu-nav')}>
                    <ul className={cx('menu-list')}>
                        <Link to='/' className={cx('router-item')}>
                            <li className={cx('menu-item', `${index === '' ? 'active' : null}`)} onClick={() => { setIndex('') }}>
                                Trang chủ
                            </li>
                        </Link>
                        <Link to='/services' className={cx('router-item')}>
                            <li className={cx('menu-item', `${index === 'services' ? 'active' : null}`)} onClick={() => { setIndex('services') }}>
                                Dịch vụ
                            </li>
                        </Link>
                        <Link to='/location' className={cx('router-item')}>
                            <li className={cx('menu-item', `${index === "location" ? 'active' : null}`)} onClick={() => { setIndex("location") }}>
                                Vị trí
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className={cx('logo')}>
                    <img className={cx('header-logo')} src={images.logo} alt='logo' />
                    <p className={cx('header-title-logo')}>tasksilver</p>
                </div>
                <div className={cx('menu-contact')}>
                    <div>
                        {userLogin ? <div className={cx('menu-profile')}>
                            <p className={cx('menu-profile-name')}>{userData?.name}</p>
                            <BiChevronDown className={cx('menu-profile-btn')} />
                            <div className={cx('menu-profile-drop')}>
                                <ul>
                                    <Link to='/profile' className={cx('router-item')}>
                                        <li>
                                            <AiOutlineUser className={cx('menu-profile-drop-icon')} />Tài khoản
                                        </li>
                                    </Link>
                                    <li onClick={handleLogout}>
                                        <HiOutlineLogout className={cx('menu-profile-drop-icon')} />Thoát
                                    </li>
                                </ul>
                            </div>
                        </div>
                            : <Link to='/login'>
                                <button className={cx('menu-btn-contact')}>Đăng nhập</button>
                            </Link>
                        }
                    </div>
                    <div className={cx('menu-contact-icon')}>
                        {userData?.role === 0
                            ? <Link to='/register'>
                                <button className={cx('menu-btn-contact')}>Nhận công việc</button>
                            </Link>
                            : <ul className={cx('menu-contact-icon-list')}>
                                <li className={cx('menu-contact-icon-item')}><BsInstagram /></li>
                                <li className={cx('menu-contact-icon-item')}><ImFacebook /></li>
                                <li className={cx('menu-contact-icon-item')}><FaLinkedinIn /></li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header