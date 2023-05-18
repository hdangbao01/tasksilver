import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import images from '~/assets/images'
import { useEffect, useRef } from 'react'

const cx = classNames.bind(styles)

function Profile() {
    return (
        <div className={cx('profile-wrapper')}>
            <div className={cx('profile-first')}>
                <div className={cx('profile-main')}>
                    <div className={cx('profile-header')}>
                        <img className={cx('profile-avatar')} src={images.background} alt='avatarUser' />
                        <h1>Ho Bao</h1>
                    </div>
                    <div className={cx('profile-bar')}>
                        <ul>
                            <li>Tổng quan</li>
                            <li className={cx('active')}>Thông tin cá nhân</li>
                            <li>Thuê</li>
                        </ul>
                        <div className={cx('profile-bar-line')}></div>
                    </div>
                    <div className={cx('profile-content')}>
                        <div className={cx('profile-block', 'active')}>
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
                                    <button className={cx('btn-pro5')}>Lưu</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('profile-block')}>
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
        </div>
    )
}

export default Profile;