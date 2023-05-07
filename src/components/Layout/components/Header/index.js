import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const cx = classNames.bind(styles)

function Header() {
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

    return (
        <header className={cx('wrapper', { 'fixed': isMenu })}>
            <div className={cx('menu-bar')}>
                <div className={cx('menu-nav')}>
                    <ul className={cx('menu-list')}>
                        <Link to='/' className={cx('router-item')}>
                            <li className={cx('menu-item', { 'active': true })}>Home</li>
                        </Link>
                        <Link to='/services' className={cx('router-item')}>
                            <li className={cx('menu-item')}>Services</li>
                        </Link>
                        <Link to='/location' className={cx('router-item')}>
                            <li className={cx('menu-item')}>Location</li>
                        </Link>
                    </ul>
                </div>

                <div className={cx('logo')}>
                    <img className={cx('header-logo')} src={images.logo} alt='logo' />
                    <p className={cx('header-title-logo')}>tasksilver</p>
                </div>
                <div className={cx('menu-contact')}>
                    <div>
                        <Link to='/login'>
                            <button className={cx('menu-btn-contact')}>Log in</button>
                        </Link>
                        {/* <div className={cx('menu-profile')}>
                            <p className={cx('menu-profile-name')}>Ho Bao</p><span><BiChevronDown className={cx('menu-profile-btn')} /></span>
                        </div> */}
                    </div>
                    <div className={cx('menu-contact-icon')}>
                        <ul className={cx('menu-contact-icon-list')}>
                            <li className={cx('menu-contact-icon-item')}><BsInstagram /></li>
                            <li className={cx('menu-contact-icon-item')}><ImFacebook /></li>
                            <li className={cx('menu-contact-icon-item')}><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header