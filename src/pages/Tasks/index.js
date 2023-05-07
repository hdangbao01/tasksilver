import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Tasks.module.scss'
import { MdNavigateNext } from "react-icons/md";
import images from '~/assets/images';

const cx = classNames.bind(styles)

function Tasks() {
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
                    <Link className={cx('link-service-task')} to='/'><span className={cx('tasks-body-title')}>Home <MdNavigateNext /></span></Link>
                    <Link className={cx('link-service-task')} to='/services'><span className={cx('tasks-body-title')}>Services <MdNavigateNext /></span></Link>
                    <span className={cx('tasks-body-title')}>Tasks</span>
                </p>
                <div className={cx('tasks-body')}>
                    <div className={cx('tasks-content')}>
                        <ul className={cx('tasks-content-list')}>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
                            <li className={cx('tasks-content-item')}>
                                <img className={cx('tasks-content-img')} src={images.background} alt='task' />
                                <div className={cx('tasks-content-desc')}>
                                    <h2>
                                        <Link className={cx('link-service-task')} to='/tasker'>
                                            Furniture Assembly
                                        </Link>
                                    </h2>
                                    <p>Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently.</p>
                                    <Link className={cx('link-service-task')} to='/tasker'>
                                        <button className={cx('tasks-content-btn')}>Book Now</button>
                                    </Link>
                                </div>
                            </li>
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
                    <li className={cx('other-service-item')}>
                        Furniture Assembly
                    </li>
                    <li className={cx('other-service-item')}>
                        Furniture Assembly
                    </li>
                    <li className={cx('other-service-item')}>
                        Furniture Assembly
                    </li>
                    <li className={cx('other-service-item')}>
                        Furniture Assembly
                    </li>
                    <li className={cx('other-service-item')}>
                        Furniture Assembly
                    </li>
                    <li className={cx('other-service-item')}>
                        Furniture Assembly
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Tasks;