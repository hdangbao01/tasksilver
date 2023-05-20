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

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [phone, setPhone] = useState('')
    const [quan, setQuan] = useState('')
    const [city, setCity] = useState('')

    const [userSignUp, setUserSignUp] = useState('')
    const [accSignUp, setAccSignUp] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8000/account`)
            .then((res) => res.json())
            .then((res) => {
                setListAccount(res)
            })

        if (user) {
            window.location.href = '/'
        }
    }, [])

    useEffect(() => {
        const optionsUser = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSignUp)
        }

        const optionsAcc = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accSignUp)
        }

        if (accSignUp) {
            fetch(`http://localhost:8000/user`, optionsUser)
                .then((res) => res.json())
                .then((res) => {
                    fetch(`http://localhost:8000/account`, optionsAcc)
                        .then((res) => res.json())
                        .then((res) => {
                            alert("Đăng ký thành công!")
                            window.location.reload()
                        })
                        .catch((res) => {
                            alert("Đăng ký thất bại, vui lòng thử lại!")
                        })
                })
                .catch((res) => {
                    alert("Đăng ký thất bại, vui lòng thử lại!")
                })


        }
    }, [accSignUp])

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
                localStorage.setItem("user", itemAccount.username);
            }
        })
    }
    const handleSignup = () => {
        setUserSignUp({
            name: `${firstName} ${lastName}`,
            phone: phone,
            address: `${quan}, ${city}`,
            gender: null,
            creditcard: null,
            role: 0,
            price: null,
            description: null,
            taskId: null,
            image: null
        })
        setAccSignUp({
            username: email,
            password: pass,
            userId: 10
        })
    }

    return (
        <div className={cx('login')}>
            {user ? <></> :
                <div className={cx('login-body')}>
                    <div className={cx('left-login-body')}>
                        <p className={cx('left-login-title')}>Chào mừng đến với tasksilver!</p>
                        <button className={cx('left-login-btn-login', switchLoginForm ? 'active' : '')} onClick={switchLogin} >Đăng nhập</button>
                        <button className={cx('left-login-btn-signup', switchLoginForm ? '' : 'active')} onClick={switchRegister} >Đăng ký</button>
                    </div>
                    {switchLoginForm ? <div className={cx('right-login-body')}>
                        <div className={cx('right-login-form')}>
                            <label className={cx('right-login-label')}>Tài khoản</label>
                            <input className={cx('right-login-input')} placeholder='Nhập tài khoản...' value={username} onChange={e => setUsername(e.target.value)} />
                            <label className={cx('right-login-label')}>Mật khẩu</label>
                            <input className={cx('right-login-input')} type='password' placeholder='Nhập mật khẩu...' value={password} onChange={e => setPassword(e.target.value)} />
                            <div className={cx('right-login-remember')}>
                                <input className={cx('right-login-input-remember')} type='checkbox' /><label className={cx('right-login-label')}>Ghi nhớ đăng nhập</label>
                            </div>
                            <button className={cx('right-login-btn-login')} onClick={handleLogin}>Đăng nhập</button>
                        </div>
                    </div>
                        : <></>}
                    {switchLoginForm ? <></>
                        : <div className={cx('right-login-body')}>
                            <div className={cx('right-login-form')}>
                                <div className={cx('right-login-form-name')}>
                                    <div>
                                        <label className={cx('right-login-label')}>Họ</label>
                                        <input className={cx('right-login-input')} placeholder='Nhập họ...'
                                            value={firstName} onChange={e => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className={cx('right-login-label')}>Tên</label>
                                        <input className={cx('right-login-input')} placeholder='Nhập tên...'
                                            value={lastName} onChange={e => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <label className={cx('right-login-label')}>Tài khoản (Email)</label>
                                <input className={cx('right-login-input')} placeholder='Nhập email...'
                                    value={email} onChange={e => setEmail(e.target.value)}
                                />
                                <label className={cx('right-login-label')}>Mật khẩu</label>
                                <input className={cx('right-login-input')} placeholder='Nhập mật khẩu...'
                                    value={pass} onChange={e => setPass(e.target.value)}
                                />
                                <label className={cx('right-login-label')}>Điện thoại</label>
                                <input className={cx('right-login-input')} placeholder='Nhập số điện thoại...'
                                    value={phone} onChange={e => setPhone(e.target.value)}
                                />
                                <div className={cx('right-login-form-name')}>
                                    <div>
                                        <label className={cx('right-login-label')}>Quận</label>
                                        <input className={cx('right-login-input')} placeholder='Nhập quận...'
                                            value={quan} onChange={e => setQuan(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className={cx('right-login-label')}>Thành phố</label>
                                        <input className={cx('right-login-input')} placeholder='Nhập thành phố...'
                                            value={city} onChange={e => setCity(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button className={cx('right-login-btn-login')} onClick={handleSignup}>Đăng ký</button>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Login;