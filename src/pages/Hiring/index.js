import classNames from 'classnames/bind'
import styles from './Hiring.module.scss'
import { IoSend } from 'react-icons/io5'
import { MdOutlineFactCheck } from 'react-icons/md'
import { useState, useContext } from 'react'
import { AppContext } from '~/components/AppContext'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Hiring() {
    const {userData} = useContext(AppContext)

    const [activity, setActivity] = useState(1)

    return (
        <div className={cx('hiring-wrapper')}>
            <div className={cx('hiring-header')}>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step', activity === 1 || activity === 2 || activity === 3 ? 'active' : '')}></span>
                    <p>Nhập thông tin</p>
                </div>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step', activity === 2 || activity === 3 ? 'active' : '')}></span>
                    <p>Đang thuê</p>
                </div>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step', activity === 3 ? 'active' : '')}></span>
                    <p>Hoàn thành</p>
                </div>
            </div>
            <div className={cx('hiring-activity')}>
                <div className={cx('hiring-activity-info')}>
                    <p>Giá dự kiến: 50.000đ/h</p>
                    <p>Trạng thái: Đang đợi</p>
                </div>
                <div className={cx('hiring-activity-info')}>
                    <button>Thoát</button>
                </div>
            </div>
            <div className={cx('hiring-conect')}>
                {activity === 1 &&
                    <div className={cx('hiring-start')}>
                        <h2>Nhập yêu cầu đối với người giúp việc (Nếu có)</h2>
                        <div className={cx('wrapper')}>
                            <div className={cx('block')}>
                                <label className={cx('label-info')}>Ghi chú:</label>
                                <textarea className={cx('input-info')} placeholder='Nhập ghi chú...' rows='5' />
                            </div>
                        </div>
                        <div className={cx('btn-block')}>
                            <button className={cx('btn-hiring')} onClick={() => setActivity(2)}>Bắt đầu thuê</button>
                        </div>
                    </div>
                }
                {activity === 2 &&
                    <div className={cx('hiring-mess')}>
                        <div className={cx('hiring-tasker')}>
                            <img className={cx('hiring-tasker-img')} src={images.background} alt='avatar tasker' />
                            <h2>Ho Bao</h2>
                            {userData?.role === 0 ? <p>Địa chỉ:</p> : <p>Công việc:</p>}
                        </div>
                        <div className={cx('hiring-ib')}>
                            <div className={cx('hiring-ib-content')}>
                                <div className={cx('hiring-get-mess-wrap')}>
                                    <div className={cx('hiring-get-mess')}>
                                        <p>Chào bạn</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-send-mess-wrap')}>
                                    <div className={cx('hiring-send-mess')}>
                                        <p>anh đến chưa ạ</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-get-mess-wrap')}>
                                    <div className={cx('hiring-get-mess')}>
                                        <p>bạn gửi địa chỉ đi</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-send-mess-wrap')}>
                                    <div className={cx('hiring-send-mess')}>
                                        <p>470 Tran Dai Nghia, Hoa Quy, Ngu Hanh Son, Da Nang</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-send-mess-wrap')}>
                                    <div className={cx('hiring-send-mess')}>
                                        <p>em gửi địa chỉ</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-get-mess-wrap')}>
                                    <div className={cx('hiring-get-mess')}>
                                        <p>mình nhận địa chỉ của bạn</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-get-mess-wrap')}>
                                    <div className={cx('hiring-get-mess')}>
                                        <p>mình sẽ tới nhanh nhất có thể</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-get-mess-wrap')}>
                                    <div className={cx('hiring-get-mess')}>
                                        <p>bạn chờ mình tí nhé</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-send-mess-wrap')}>
                                    <div className={cx('hiring-send-mess')}>
                                        <p>okay</p>
                                    </div>
                                </div>
                                <div className={cx('hiring-get-mess-wrap')}>
                                    <div className={cx('hiring-get-mess')}>
                                        <p>thanks</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('hiring-ib-type')}>
                                <input type='text' /> <IoSend className={cx('icon-send')} />
                            </div>
                        </div>
                    </div>
                }
                {activity === 3 &&
                    <div className={cx('hiring-done')}>
                        <MdOutlineFactCheck className={cx('hiring-done-icon')} />
                        <div>
                        <input type='checkbox' />
                        <input type='checkbox' />
                        <input type='checkbox' />
                        <input type='checkbox' />
                        <input type='checkbox' />
                        </div>
                        <input placeholder=''/>
                        <h2>Kết thúc thuê, đánh giá người giúp việc!</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default Hiring;