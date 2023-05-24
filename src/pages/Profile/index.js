import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import images from '~/assets/images'
import { useState, useEffect, useRef, useContext } from 'react'
import { UserContext } from '~/App';

const cx = classNames.bind(styles)

function Profile() {
    const userData = useContext(UserContext)

    const user = localStorage.getItem("user")

    const [index, setIndex] = useState(0)
    const [upImg, setUpImg] = useState('')
    const [viewImg, setViewImg] = useState('')
    const [inforAccount, setInforAccount] = useState({})

    // infor Update Profile
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [desc, setDesc] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [card, setCard] = useState('')
    const [pass, setPass] = useState('')
    const [updateInfor, setUpdateInfor] = useState('')
    const [updateAccount, setUpdateAccount] = useState('')

    const refImg = useRef('')
    const viwImg = useRef('')
    const tabBar0 = useRef()
    const tabBar1 = useRef()
    const tabBar2 = useRef()
    const tabLine = useRef()

    const getInforUser = () => {
        fetch(`http://localhost:8000/account`)
            .then((res) => res.json())
            .then((res) => {
                setInforAccount(res.find(iA => iA.username === user.toString()))
            })
    }

    useEffect(() => {
        user ? getInforUser() : window.location.href = '/'
    }, [user])

    useEffect(() => {
        if (upImg) {
            const formData = new FormData()

            formData.append("file", upImg)

            const options = {
                method: 'POST',
                body: formData,
            }

            fetch(`http://127.0.0.1:8000/service/savefile`, options)
                .then((res) => res.json())
                .then((res) => {
                    console.log('Upload image success!')
                })
                .catch((res) => {
                    console.log('Upload image fail!');
                })
        }

        if (updateInfor) {
            const optionsUser = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateInfor)
            }

            const optionsAccount = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateAccount)
            }

            fetch(`http://localhost:8000/user`, optionsUser)
                .then((res) => res.json())
                .then(() => {
                    console.log("Sửa thông tin thành công!")
                })
                .catch(() => {
                    console.log("Sửa thông tin thất bại!")
                })

            fetch(`http://localhost:8000/account`, optionsAccount)
                .then((res) => res.json())
                .then(() => {
                    alert("Sửa thông tin thành công!")
                    localStorage.removeItem("user")
                    localStorage.setItem("user", email ? email : inforAccount.username)
                    window.location = '/profile'
                })
                .catch(() => {
                    console.log("Sửa account thất bại!")
                })
        }
    }, [upImg, updateInfor])

    const priviewImg = () => {
        setViewImg(URL.createObjectURL(refImg.current.files[0]))
    }

    useEffect(() => {
        if (index === 0) {
            tabLine.current.style.left = tabBar0.current.offsetLeft + "px"
            tabLine.current.style.width = tabBar0.current.offsetWidth + "px"
        } else if (index === 1) {
            tabLine.current.style.left = tabBar1.current.offsetLeft + "px"
            tabLine.current.style.width = tabBar1.current.offsetWidth + "px"
        } else if (index === 2) {
            tabLine.current.style.left = tabBar2.current.offsetLeft + "px"
            tabLine.current.style.width = tabBar2.current.offsetWidth + "px"
        }
    }, [index])

    const handleUpdate = () => {
        setUpImg(refImg.current.files[0])
        setUpdateInfor({
            id: userData.id,
            role: userData.role,
            name: name ? name : userData.name,
            gender: gender ? gender : userData.gender,
            description: desc ? desc : userData.description,
            phone: phone ? phone : userData.phone,
            address: address ? address : userData.address,
            creditcard: card ? card : userData.creditcard,
            price: userData.price,
            taskId: userData.taskId,
            image: refImg.current.files[0] ? refImg.current.files[0].name : userData.image
        })
        setUpdateAccount({
            id: inforAccount.id,
            username: email ? email : inforAccount.username,
            password: pass ? pass : inforAccount.password,
            userId: inforAccount.userId
        })
    }

    return (
        <div className={cx('profile-wrapper')}>
            {user ? <div className={cx('profile-first')}>
                <div className={cx('profile-main')}>
                    <div className={cx('profile-header')}>
                        <img ref={viwImg} className={cx('profile-avatar')}
                            // src={viewImg ? viewImg : images.background}
                            // src={`../../../api-tasksilver/Photos/${userData.image}`}
                            src={viewImg
                                ? viewImg : (userData?.image
                                    ? (userData?.image === null ? '' : require(`../../api-tasksilver/Photos/${userData?.image}`))
                                    : require(`../../api-tasksilver/Photos/user1.jpg`))}
                            alt='avatarUser' />
                        <div>
                            <h1>{userData ? userData.name : ''}</h1>
                            <input ref={refImg} className={cx('file-img')} type='file' onChange={(e) => priviewImg()} />
                        </div>
                    </div>
                    <div className={cx('profile-bar')}>
                        <ul>
                            <li ref={tabBar0} className={cx(`${index === 0 ? 'active' : null}`)} onClick={() => { setIndex(0) }}>
                                Tổng quan
                            </li>
                            <li ref={tabBar1} className={cx(`${index === 1 ? 'active' : null}`)} onClick={() => { setIndex(1) }}>
                                Thông tin cá nhân
                            </li>
                            <li ref={tabBar2} className={cx(`${index === 2 ? 'active' : null}`)} onClick={() => { setIndex(2) }}>
                                {userData?.role === 0 ? "Thuê" : "Công việc"}
                            </li>
                        </ul>
                        <div ref={tabLine} className={cx('profile-bar-line')}></div>
                    </div>
                    <div className={cx('profile-content')}>
                        <div className={cx('profile-block', `${index === 1 ? 'active' : null}`)}>
                            <div className={cx('content-pro5')} >
                                <div className={cx('mana')}>
                                    <div className={cx('contact-info')}>
                                        <h3>Thông tin cá nhân</h3>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Họ tên:</label>
                                            <input className={cx('input-info')} defaultValue={userData ? userData.name : ''}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Giới tính:</label>
                                            <input className={cx('input-info')} defaultValue={userData ? userData.gender : ''}
                                                onChange={e => setGender(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Giới thiệu:</label>
                                            <input className={cx('input-info')} defaultValue={userData ? userData.description : ''}
                                                onChange={e => setDesc(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('contact-info')}>
                                        <h3>Liên lạc</h3>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Tài khoản (Email):</label>
                                            <input className={cx('input-info')} defaultValue={inforAccount.username}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Điện thoại:</label>
                                            <input className={cx('input-info')} defaultValue={userData ? userData.phone : ''}
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Địa chỉ:</label>
                                            <input className={cx('input-info')} defaultValue={userData ? userData.address : ''}
                                                onChange={e => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('contact-info')}>
                                        <h3>Thanh toán</h3>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Credit card:</label>
                                            <input className={cx('input-info')} defaultValue={userData ? userData.creditcard : ''}
                                                onChange={e => setCard(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('contact-info')}>
                                        <h3>Bảo mật</h3>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Mật khẩu:</label>
                                            <input className={cx('input-info')} defaultValue={inforAccount.password} type='password'
                                                onChange={e => setPass(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button className={cx('btn-pro5')}
                                        onClick={handleUpdate}
                                    >Lưu</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('profile-block', `${index === 2 ? 'active' : null}`)}>
                            <h3>Đang thuê</h3>
                            <div className={cx('hiried')}>
                                <img src={images.tasker} alt='avatar' />
                                <div>
                                    <h2 className={cx('hiried-name')}>Ho Bao</h2>
                                    <p>Công việc: Dọn nhà</p>
                                    {userData?.role === 0 ? <></> : <p>Địa chỉ:</p>}
                                    <button>Kết nối</button>
                                </div>
                            </div>

                            {/* <h3>Lịch sử thuê</h3>
                            <div className={cx('hiried')}>
                                <img src={images.tasker} alt='avatar' />
                                <div>
                                    <h2 className={cx('hiried-name')}>Ho Bao</h2>
                                    <p>Công việc: Dọn nhà</p>
                                    <p>Thời gian: 1h30p</p>
                                    <p>Tổng phí: 60.000đ</p>
                                </div>
                                <div className={cx('hiried-time')}>
                                    05/05/2023
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
                : <></>
            }
        </div>
    )
}

export default Profile;