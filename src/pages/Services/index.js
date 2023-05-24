import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Services.module.scss'
import images from '~/assets/images'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Services() {
    const [listServices, setListServices] = useState([])
    const [listTasks, setListTasks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/service`)
            .then((res) => res.json())
            .then((res) => {
                setListServices(res)
            })
        fetch(`http://localhost:8000/task`)
            .then((res) => res.json())
            .then((res) => {
                setListTasks(res)
            })
    }, [])

    return (
        <>
            <div className={cx('service-wrapper')}>
                <div className={cx('service-content')}>
                    <p className={cx('service-content-title')}>Danh sách việc cần làm của bạn là của chúng tôi.</p>
                </div>
                <div className={cx('service')}>
                    <p className={cx('service-body-title')}>Tất cả dịch vụ</p>
                </div>
            </div>
            <div className={cx('service-body')}>
                <ul className={cx('service-body-list')}>
                    {listServices.map(itemService => (
                        <li className={cx('service-body-item')} key={itemService.id}>
                            <div className={cx('service-body-img')}>
                                <Link to={`/tasks/${itemService.id}`} >
                                    <img className={cx('service-body-item-img')} src={require(`../../api-tasksilver/Photos/${itemService?.image}`)} alt='service' />
                                </Link>
                            </div>
                            <div className={cx('service-body-task')}>
                                <Link to={`/tasks/${itemService.id}`} className={cx('link-service-task')}>
                                    <h2 className={cx('service-body-task-title')}>{itemService.name}</h2>
                                </Link>
                                <h3 className={cx('service-body-task-decs')}>{itemService.description}</h3>
                                <ul className={cx('service-body-task-list')}>
                                    {listTasks.map(itemTask => (
                                        itemTask.serviceId === itemService.id
                                            ? <Link to={`/tasker/${itemTask.id}`} className={cx('link-service-task')}>
                                                <li className={cx('service-body-task-item')}>
                                                    {itemTask.name}
                                                </li>
                                            </Link>
                                            : <></>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Services;