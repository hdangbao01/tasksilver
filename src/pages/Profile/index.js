import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import images from '~/assets/images'
import { useState, useEffect, useRef } from 'react'

const cx = classNames.bind(styles)

function Profile() {
    const user = localStorage.getItem("user")
    const [index, setIndex] = useState(0)
    const [upImg, setUpImg] = useState('')
    const [viewImg, setViewImg] = useState('')

    const refImg = useRef('')
    const viwImg = useRef('')
    const tabBar0 = useRef()
    const tabBar1 = useRef()
    const tabBar2 = useRef()
    const tabLine = useRef()

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
                    alert('thanh cong')
                })
                .catch((res) => {
                    alert('thai bai');
                })

            console.log(formData);
        }
    }, [upImg])

    useEffect(() => {
        if (!user) {
            window.location.href = '/'
        }
    }, [])

    const handleUpImage = () => {
        setUpImg(refImg.current.files[0])
    }

    const priviewImg = () => {
        setViewImg(URL.createObjectURL(refImg.current.files[0]))
    }

    return (
        <div className={cx('profile-wrapper')}>
            {user ? <div className={cx('profile-first')}>
                <div className={cx('profile-main')}>
                    <div className={cx('profile-header')}>
                        <img ref={viwImg} className={cx('profile-avatar')}
                            src={viewImg ? viewImg : images.background}
                            alt='avatarUser' />
                        <div>
                            <h1>Ho Bao</h1>
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
                                Thuê
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
                                            <input className={cx('input-info')} />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Ngày sinh:</label>
                                            <input className={cx('input-info')} />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Giới tính:</label>
                                            <input className={cx('input-info')} />
                                        </div>
                                    </div>
                                    <div className={cx('contact-info')}>
                                        <h3>Liên lạc</h3>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Email:</label>
                                            <input className={cx('input-info')} />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Điện thoại:</label>
                                            <input className={cx('input-info')} />
                                        </div>
                                        <div className={cx('block')}>
                                            <label className={cx('label-info')}>Địa chỉ:</label>
                                            <input className={cx('input-info')} />
                                        </div>
                                    </div>
                                    <button className={cx('btn-pro5')}
                                        onClick={handleUpImage}
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
                                    <button>Nhắn tin</button>
                                </div>
                            </div>

                            <h3>Lịch sử thuê</h3>
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
                            </div>
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
                            </div>
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