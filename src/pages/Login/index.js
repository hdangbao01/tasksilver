import classNames from 'classnames/bind'
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('login-body')}>
                <div className={cx('left-login-body')}>
                    <p className={cx('left-login-title')}>Welcome to tasksilver!</p>
                    <button className={cx('left-login-btn-login')}>Log in</button>
                    <button className={cx('left-login-btn-signup')}>Sign up</button>
                </div>
                <div className={cx('right-login-body')}>
                    <div className={cx('right-login-form')}>
                        <label className={cx('right-login-label')}>Username</label>
                        <input className={cx('right-login-input')} placeholder='Username...' />
                        <label className={cx('right-login-label')}>Password</label>
                        <input className={cx('right-login-input')} placeholder='Password...' />
                        <div className={cx('right-login-remember')}>
                            <input className={cx('right-login-input-remember')} type='checkbox' /><label className={cx('right-login-label')}>Remember</label>
                        </div>
                        <button className={cx('right-login-btn-login')}>Log in</button>
                    </div>
                </div>
                {/* <div className={cx('right-login-body')}>
                    <div className={cx('right-login-form')}>
                        <div className={cx('right-login-form-name')}>
                            <div>
                                <label className={cx('right-login-label')}>First Name</label>
                                <input className={cx('right-login-input')} placeholder='First Name...' />
                            </div>
                            <div>
                                <label className={cx('right-login-label')}>Last Name</label>
                                <input className={cx('right-login-input')} placeholder='Last Name...' />
                            </div>
                        </div>
                        <label className={cx('right-login-label')}>Email</label>
                        <input className={cx('right-login-input')} placeholder='Email...' />
                        <label className={cx('right-login-label')}>Password</label>
                        <input className={cx('right-login-input')} placeholder='Password...' />
                        <label className={cx('right-login-label')}>Phone</label>
                        <input className={cx('right-login-input')} placeholder='Phone...' />
                        <button className={cx('right-login-btn-login')}>Sign up</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Login;