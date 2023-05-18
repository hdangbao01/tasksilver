import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import images from '~/assets/images'
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('wrap-footer')}>
            <div className={cx('footer-body')}>
                <div className={cx('footer-logo')}>
                    <img className={cx('footer-logo-img')} src={images.logo} alt='logo' />
                    <p className={cx('footer-logo-title')}>tasksilver - 2023</p>
                    <p className={cx('footer-social-title')}>Find someone to work for you!</p>
                </div>
                <div className={cx('footer-logo')}>
                    <ul className={cx('footer-contact-list')}>
                        <li className={cx('footer-contact-item')}>Home</li>
                        <li className={cx('footer-contact-item')}>Services</li>
                        <li className={cx('footer-contact-item')}>Location</li>
                        <li className={cx('footer-contact-item')}>Contact</li>
                        <li className={cx('footer-contact-item')}>About</li>
                        <li className={cx('footer-contact-item')}>Log in</li>
                    </ul>
                </div>
                <div className={cx('footer-logo')}>
                    <ul className={cx('footer-contact-list')}>
                        <li className={cx('footer-contact-icon')}><BsInstagram /></li>
                        <li className={cx('footer-contact-icon')}><ImFacebook /></li>
                        <li className={cx('footer-contact-icon')}><FaLinkedinIn /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer