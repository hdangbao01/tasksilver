import classNames from 'classnames/bind'
import styles from './Hiring.module.scss'
import { IoSend } from 'react-icons/io5'
import { MdOutlineFactCheck } from 'react-icons/md'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Hiring() {
    return (
        <div className={cx('hiring-wrapper')}>
            <div className={cx('hiring-header')}>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step', 'active')}></span>
                    <p>Nhập thông tin</p>
                </div>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step', 'active')}></span>
                    <p>Đang thuê</p>
                </div>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step')}></span>
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
                <div className={cx('hiring-start')}>
                    <h2>Nhập yêu cầu đối với người giúp việc (Nếu có)</h2>
                    <div className={cx('wrapper')}>
                        <div className={cx('block')}>
                            <label className={cx('label-info')}>Ghi chú:</label>
                            <textarea className={cx('input-info')} placeholder='Nhập ghi chú...' rows='5' />
                        </div>
                    </div>
                    <div className={cx('btn-block')}>
                        <button className={cx('btn-hiring')}>Bắt đầu thuê</button>
                    </div>
                </div>
                {/* <div className={cx('hiring-mess')}>
                    <div className={cx('hiring-tasker')}>
                        <img  className={cx('hiring-tasker-img')} src={images.background} alt='avatar tasker' />
                        <h2>Ho Bao</h2>
                        <p>Nguoi giup viec cua ban</p>
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
                </div> */}
                {/* <div className={cx('hiring-done')}>
                    <MdOutlineFactCheck  className={cx('hiring-done-icon')} />
                    <h2>Kết thúc thuê, vui lòng thanh toán cho người giúp việc</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Hiring;