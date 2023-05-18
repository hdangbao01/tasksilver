import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Tasks.module.scss'
import { MdNavigateNext } from "react-icons/md"
import images from '~/assets/images'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Tasks() {
    const [listTasks, setListTasks] = useState([])
    const [listServices, setListServices] = useState([])
    const [taskOfService, setTaskOfService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/tasks`)
            .then((res) => res.json())
            .then((res) => {
                setListTasks(res)
            })

        fetch(`http://localhost:3000/services`)
            .then((res) => res.json())
            .then((res) => {
                setListServices(res)
            })

        const idTask = window.location.pathname.split('/')

        setTaskOfService(idTask[2])
    }, [])

    return (
        <>
            <div className={cx('tasks-wrapper')}>
                <div className={cx('tasks-header')}>
                    <p className={cx('tasks-header-title')}>Featured Tasks</p>
                    <p className={cx('tasks-header-desc')}>Any of these popular tasks on your to-do list? Choose from rated and reviewed Taskers to help you get them done.</p>
                </div>
            </div>
            <div className={cx('tasks')}>
                <p className={cx('tasks-title')}>
                    <Link className={cx('link-service-task')} to='/'>
                        <span className={cx('tasks-body-title')}>Home</span>
                    </Link>
                    <MdNavigateNext />
                    <Link className={cx('link-service-task')} to='/services'>
                        <span className={cx('tasks-body-title')}>Services</span>
                    </Link>
                    <MdNavigateNext />
                    <span className={cx('tasks-body-title')}>Tasks</span>
                </p>
                <div className={cx('tasks-body')}>
                    <div className={cx('tasks-content')}>
                        <ul className={cx('tasks-content-list')}>
                            {listTasks.map(itemTaskOfService => (
                                itemTaskOfService.servicesId == taskOfService ?
                                    <li className={cx('tasks-content-item')} key={itemTaskOfService.id}>
                                        <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                        <div className={cx('tasks-content-desc')}>
                                            <h2>{itemTaskOfService.name}</h2>
                                            <p>{itemTaskOfService.desc}</p>
                                            <Link className={cx('link-service-task')} to={`/tasker/${itemTaskOfService.id}`} >
                                                <button className={cx('tasks-content-btn')}>Book Now</button>
                                            </Link>
                                        </div>
                                    </li> : <></>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('tasks-step')}>
                        <h2>Cross off that to-do</h2>
                        <div>
                            <h3 className={cx('tasks-step-title')}>Select your Tasker</h3>
                            <p>Describe your task and choose a background checked and client-reviewed Tasker for the job</p>
                            <h3 className={cx('tasks-step-title')}>Schedule a time</h3>
                            <p>Get your task done — on your time</p>
                            <h3 className={cx('tasks-step-title')}>Pay when it’s done</h3>
                            <p>Pay seamlessly through the TaskRabbit platform only after your task is complete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tasks-footer')}>
                <h1 className={cx('tasks-footer-title')}>Choose other services</h1>
                <ul className={cx('other-service-list')}>
                    {listServices.map(listServices => (
                        <li className={cx('other-service-item')}>
                            <a href={`/tasks/${listServices.id}`}>
                                {listServices.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Tasks;