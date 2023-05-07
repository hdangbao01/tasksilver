import classNames from 'classnames/bind'
import styles from './Hiring.module.scss'

const cx = classNames.bind(styles)

function Hiring() {
    return (
        <div className={cx('hiring-wrapper')}>
            <div className={cx('hiring-header')}>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step')}></span>
                    <p>Nhập thông tin</p>
                </div>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step')}></span>
                    <p>Đang thuê</p>
                </div>
                <div className={cx('hiring-process')}>
                    <span className={cx('hiring-process-step')}></span>
                    <p>Hoàn thành</p>
                </div>
            </div>
            <div className={cx('hiring-activity')}>
                <div className={cx('hiring-activity-info')}>
                    <p>Giá dự kiến: 50.000đ</p>
                    <p>Trạng thái: Đang kết nối</p>
                </div>
                <div className={cx('hiring-activity-info')}>
                    <button>Thoát</button>
                </div>
            </div>
            <div className={cx('hiring-conect')}>
                <div className={cx('hiring-mess')}>
                    <h2>Vui lòng nhập thông tin để người giúp việc có thể liên lạc với bạn</h2>
                    <div className={cx('wrapper')}>
                        <div className={cx('block')}>
                            <label className={cx('label-info')}>Họ tên:</label>
                            <input className={cx('input-info')} placeholder='Nhập họ tên...' />
                        </div>
                        <div className={cx('block')}>
                            <label className={cx('label-info')}>Số điện thoại:</label>
                            <input className={cx('input-info')} placeholder='Nhập số điện thoại...' />
                        </div>
                        <div className={cx('block')}>
                            <label className={cx('label-info')}>Địa chỉ:</label>
                            <input className={cx('input-info')} placeholder='Nhập địa chỉ...' />
                        </div>
                        <div className={cx('block')}>
                            <label className={cx('label-info')}>Ghi chú:</label>
                            <input className={cx('input-info')} placeholder='Nhập ghi chú...' />
                        </div>
                    </div>
                    <button className={cx('btn-hiring')}>Bắt đầu thuê</button>
                </div>
            </div>
        </div>
    )
}

export default Hiring;