import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('menu-bar')}>
                <div>Home</div>
                <div>
                    <img className={cx('header-logo')} src={images.logo} alt='logo' />
                </div>
                <div>Login</div>
            </div>
        </header>
    )
}

export default Header