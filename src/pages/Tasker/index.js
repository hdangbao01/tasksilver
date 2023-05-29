import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Tasker.module.scss'
import images from '~/assets/images'
import { HiStar } from "react-icons/hi"
import { BiCheckShield, BiCheckCircle } from "react-icons/bi"
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Tasker() {
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [slider, setSlider] = useState('')
    const [listTaskers, setListTaskers] = useState([])
    const [taskerOfTask, setTaskerOfTask] = useState([])
    const [taskerOfPrice, setTaskerOfPrice] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/user`)
            .then((res) => res.json())
            .then((res) => {
                setListTaskers(res)
            })

        const idTasker = window.location.pathname.split('/')

        setTaskerOfTask(idTasker[2])
    }, [])

    useEffect(() => {
        let priceArr = []
        listTaskers.forEach(itemTasker => {
            if (itemTasker.price) {
                priceArr.push(itemTasker.price)
            }
        })
        setMinPrice(Math.min(...priceArr))
        setMaxPrice(Math.max(...priceArr))
        setSlider(Math.max(...priceArr))
    }, [listTaskers])

    useEffect(() => {
        const taskPrice = listTaskers.filter(itemTask => (
            itemTask.price <= slider
        ))
        const findTasker = () => {
            setTaskerOfPrice(taskPrice)
        }
        const myTimeout = setTimeout(findTasker, 500);

        return clearTimeout(myTimeout);
    }, [slider])

    return (
        <div className={cx('tasker-wrapper')}>
            <div className={cx('tasks')}>
                <div className={cx('tasks-body')}>
                    <div className={cx('tasks-content')}>
                        <ul className={cx('tasks-content-list')}>
                            {taskerOfPrice.map(itemTaskerOfTasks => (
                                itemTaskerOfTasks.taskId == taskerOfTask &&
                                <li className={cx('tasks-content-item')} key={itemTaskerOfTasks.id}>
                                    <div className={cx('tasker-info')}>
                                        <img className={cx('tasks-content-img')}
                                            src={itemTaskerOfTasks?.image === null
                                                ? require(`../../api-tasksilver/Photos/user1.jpg`)
                                                : require(`../../api-tasksilver/Photos/${itemTaskerOfTasks?.image}`)}
                                            // src={require(`../../api-tasksilver/Photos/${itemTaskerOfTasks?.image}`)} 
                                            alt='task' />
                                        <p>{itemTaskerOfTasks?.price}đ/h</p>
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
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('tasks-step')}>
                        <div>
                            <h3 className={cx('tasks-step-title')}>Giá</h3>
                            <div className={cx('slidecontainer')}>
                                <div className={cx('slider-arr')}>
                                    <span>{minPrice}đ</span><span>{maxPrice}đ</span>
                                </div>
                                <input type="range" min={minPrice} max={maxPrice} className={cx('slider')}
                                    value={slider} onChange={(e) => { setSlider(e.target.value) }} />
                                <p>Value: <span>{slider}đ</span></p>
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