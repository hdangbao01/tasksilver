import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Services.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Services() {
    return (
        <>
            <div className={cx('service-wrapper')}>
                <div className={cx('service-content')}>
                    <p className={cx('service-content-title')}>Your to-do list is on us.</p>
                </div>
                <div className={cx('service')}>
                    <p className={cx('service-body-title')}>All services</p>
                </div>
            </div>
            <div className={cx('service-body')}>
                <ul className={cx('service-body-list')}>
                    <li className={cx('service-body-item')}>
                        <div className={cx('service-body-img')}>
                            <Link to='/tasks' >
                                <img className={cx('service-body-item-img')} src={images.background} alt='service' />
                            </Link>
                        </div>
                        <div className={cx('service-body-task')}>
                            <Link to='/tasks' className={cx('link-service-task')}>
                                <h2 className={cx('service-body-task-title')}>Cleaning</h2>
                            </Link>
                            <h3 className={cx('service-body-task-decs')}>Taskers will make your home sparkle!</h3>
                            <ul className={cx('service-body-task-list')}>
                                <li className={cx('service-body-task-item')}>House Cleaning</li>
                                <li className={cx('service-body-task-item')}>Window Cleaning</li>
                                <li className={cx('service-body-task-item')}>Car Washing</li>
                            </ul>
                        </div>
                    </li>
                    <li className={cx('service-body-item')}>
                        <div className={cx('service-body-img')}>
                            <Link to='/tasks' >
                                <img className={cx('service-body-item-img')} src={images.background} alt='service' />
                            </Link>
                        </div>
                        <div className={cx('service-body-task')}>
                            <Link to='/tasks' className={cx('link-service-task')}>
                                <h2 className={cx('service-body-task-title')}>Handyman</h2>
                            </Link>
                            <h3 className={cx('service-body-task-decs')}>Hire a Tasker for help around the house</h3>
                            <ul className={cx('service-body-task-list')}>
                                <li className={cx('service-body-task-item')}>TV Mouting</li>
                                <li className={cx('service-body-task-item')}>Home Repairs</li>
                                <li className={cx('service-body-task-item')}>Furniture Assembly</li>
                            </ul>
                        </div>
                    </li>
                    <li className={cx('service-body-item')}>
                        <div className={cx('service-body-img')}>
                            <Link to='/tasks' >
                                <img className={cx('service-body-item-img')} src={images.background} alt='service' />
                            </Link>
                        </div>
                        <div className={cx('service-body-task')}>
                            <Link to='/tasks' className={cx('link-service-task')}>
                                <h2 className={cx('service-body-task-title')}>Shopping + Delivery</h2>
                            </Link>
                            <h3 className={cx('service-body-task-decs')}>Get anything from groceries to furniture</h3>
                            <ul className={cx('service-body-task-list')}>
                                <li className={cx('service-body-task-item')}>Delivery Service</li>
                                <li className={cx('service-body-task-item')}>Grocery Shopping & Delivery</li>
                                <li className={cx('service-body-task-item')}>Return Items</li>
                            </ul>
                        </div>
                    </li>
                    <li className={cx('service-body-item')}>
                        <div className={cx('service-body-img')}>
                            <Link to='/tasks' >
                                <img className={cx('service-body-item-img')} src={images.background} alt='service' />
                            </Link>
                        </div>
                        <div className={cx('service-body-task')}>
                            <Link to='/tasks' className={cx('link-service-task')}>
                                <h2 className={cx('service-body-task-title')}>Featured Tasks</h2>
                            </Link>
                            <h3 className={cx('service-body-task-decs')}>Let Taskers help tackle your to-do list.</h3>
                            <ul className={cx('service-body-task-list')}>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                            </ul>
                        </div>
                    </li>
                    <li className={cx('service-body-item')}>
                        <div className={cx('service-body-img')}>
                            <Link to='/tasks' >
                                <img className={cx('service-body-item-img')} src={images.background} alt='service' />
                            </Link>
                        </div>
                        <div className={cx('service-body-task')}>
                            <Link to='/tasks' className={cx('link-service-task')}>
                                <h2 className={cx('service-body-task-title')}>Featured Tasks</h2>
                            </Link>
                            <h3 className={cx('service-body-task-decs')}>Let Taskers help tackle your to-do list.</h3>
                            <ul className={cx('service-body-task-list')}>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                            </ul>
                        </div>
                    </li>
                    <li className={cx('service-body-item')}>
                        <div className={cx('service-body-img')}>
                            <Link to='/tasks' >
                                <img className={cx('service-body-item-img')} src={images.background} alt='service' />
                            </Link>
                        </div>
                        <div className={cx('service-body-task')}>
                            <Link to='/tasks' className={cx('link-service-task')}>
                                <h2 className={cx('service-body-task-title')}>Featured Tasks</h2>
                            </Link>
                            <h3 className={cx('service-body-task-decs')}>Let Taskers help tackle your to-do list.</h3>
                            <ul className={cx('service-body-task-list')}>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                                <li className={cx('service-body-task-item')}>Home Cleaning</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Services;