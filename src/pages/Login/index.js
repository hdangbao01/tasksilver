import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function Login() {
    const user = localStorage.getItem("user")
    const [switchLoginForm, setSwitchLoginForm] = useState(true)
    const [listAccount, setListAccount] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((res) => {
                setListAccount(res)
            })

        if (user) {
            window.location.href = '/'
        }
    }, [])

    const switchLogin = () => {
        setSwitchLoginForm(true)
    }

    const switchRegister = () => {
        setSwitchLoginForm(false)
    }
    const handleLogin = () => {
        listAccount.find(itemAccount => {
            if (itemAccount.username === username && itemAccount.password === password) {
                window.location.href = '/'
                localStorage.setItem("user", itemAccount.name);
            }
        })
    }

    return (
        <div className={cx('login')}>
            {user ? <></> :
                <div className={cx('login-body')}>
                    <div className={cx('left-login-body')}>
                        <p className={cx('left-login-title')}>Welcome to tasksilver!</p>
                        <button className={cx('left-login-btn-login', switchLoginForm ? 'active' : '')} onClick={switchLogin} >Log in</button>
                        <button className={cx('left-login-btn-signup', switchLoginForm ? '' : 'active')} onClick={switchRegister} >Sign up</button>
                    </div>
                    {switchLoginForm ? <div className={cx('right-login-body')}>
                        <div className={cx('right-login-form')}>
                            <label className={cx('right-login-label')}>Username</label>
                            <input className={cx('right-login-input')} placeholder='Username...' value={username} onChange={e => setUsername(e.target.value)} />
                            <label className={cx('right-login-label')}>Password</label>
                            <input className={cx('right-login-input')} type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)} />
                            <div className={cx('right-login-remember')}>
                                <input className={cx('right-login-input-remember')} type='checkbox' /><label className={cx('right-login-label')}>Remember</label>
                            </div>
                            <button className={cx('right-login-btn-login')} onClick={handleLogin}>Log in</button>
                        </div>
                    </div>
                        : <></>}
                    {switchLoginForm ? <></>
                        : <div className={cx('right-login-body')}>
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
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Login;