import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Tasker.module.scss'
import images from '~/assets/images'
import { HiStar } from "react-icons/hi"
import { BiCheckShield, BiCheckCircle } from "react-icons/bi"
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Tasker() {
    const [slider, setSlider] = useState('100')
    const [listTaskers, setListTaskers] = useState([])
    const [taskerOfTask, setTaskerOfTask] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/user`)
            .then((res) => res.json())
            .then((res) => {
                setListTaskers(res)
            })

        const idTasker = window.location.pathname.split('/')

        setTaskerOfTask(idTasker[2])
    }, [])

    return (
        <div className={cx('tasker-wrapper')}>
            <div className={cx('tasks')}>
                <div className={cx('tasks-body')}>
                    <div className={cx('tasks-content')}>
                        <ul className={cx('tasks-content-list')}>
                            {listTaskers.map(itemTaskerOfTasks => (
                                itemTaskerOfTasks.taskId == taskerOfTask ?
                                    <li className={cx('tasks-content-item')} key={itemTaskerOfTasks.id}>
                                        <div className={cx('tasker-info')}>
                                            <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                            <p>50.000đ/h</p>
                                            <Link to='/hiring'>
                                                <button className={cx('tasks-content-btn')}>Thuê ngay</button>
                                            </Link>
                                        </div>
                                        <div className={cx('tasks-content-desc')}>
                                            <h2>{itemTaskerOfTasks.name} <span className={cx('tasker-activity')}>Chưa được thuê</span></h2>
                                            <div className={cx('taskers-star')}>
                                                <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /> <span>5 / 5</span>
                                            </div>
                                            <p><span><BiCheckShield /></span>Kỹ năng: Thành thạo Tiếng Anh</p>
                                            <p><span><BiCheckCircle /></span>Đã hoàn thành: 200 công việc</p>
                                            <h3>Giới thiệu:</h3>
                                            <p>{itemTaskerOfTasks.description}</p>
                                        </div>
                                    </li> : <></>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('tasks-step')}>
                        <div>
                            <h3 className={cx('tasks-step-title')}>Giá</h3>
                            <div className={cx('slidecontainer')}>
                                <div className={cx('slider-arr')}>
                                    <span>1.000đ</span><span>100.000đ</span>
                                </div>
                                <input type="range" min="1" max="100" value={slider} className={cx('slider')} onChange={(e) => { setSlider(e.target.value) }} />
                                <p>Value: <span>{slider}.000đ</span></p>
                            </div>
                        </div>
                        <div>
                            <h3 className={cx('tasks-step-title')}>Số sao</h3>
                            <div className={cx('star-container')}>
                                <input type="checkbox" />
                                <label>1</label>
                                <input type="checkbox" />
                                <label>2</label>
                                <input type="checkbox" />
                                <label>3</label>
                                <input type="checkbox" />
                                <label>4</label>
                                <input type="checkbox" />
                                <label>5</label>
                            </div>
                        </div>
                        <div>
                            <h3 className={cx('tasks-step-title')}>Giới tính</h3>
                            <div className={cx('star-container')}>
                                <input type="checkbox" />
                                <label>Nam</label>
                                <input type="checkbox" />
                                <label>Nữ</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasker;