import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import images from '~/assets/images';

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
                            <li className={cx('active')}>Tổng quan</li>
                            <li>Thông tin cá nhân</li>
                        </ul>
                    </div>
                    <div className={cx('profile-bar')}>
                        <h3>Lịch sử thuê</h3>
                        {/* <p>Bạn chưa thuê người giúp việc nào</p> */}
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
    )
}

export default Profile;