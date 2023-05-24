import { BrowserRouter as Router, Link } from 'react-router-dom'
import React from 'react';
import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '~/App';
import { IoIosArrowBack } from 'react-icons/io';

const cx = classNames.bind(styles)

const Register = () => {
    const userData = useContext(UserContext)

    const user = localStorage.getItem("user")


    const [listServices, setListServices] = useState([])
    const [listTasks, setListTasks] = useState([])
    const [selectService, setSelectService] = useState('')
    const [idService, setIdService] = useState('')
    const [idTask, setIdTask] = useState('')
    const [getTask, setGetTask] = useState('')
    const [registerTask, setRegisterTask] = useState('')

    const getInforUser = () => {
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
    }

    useEffect(() => {
        userData?.role === 1 ? getInforUser() : (window.location.href = '/')
    }, [userData])

    // useEffect(() => {
    //     fetch(`http://localhost:8000/service`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setListServices(res)
    //         })
    //     fetch(`http://localhost:8000/task`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setListTasks(res)
    //         })
    // }, [])

    useEffect(() => {
        if (registerTask) {
            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerTask)
            }

            fetch(`http://localhost:8000/user`, options)
                .then((res) => res.json())
                .then(() => {
                    alert("Đăng ký thành công!")
                    window.location.href = '/'
                })
                .catch(() => {
                    alert("Đăng ký thất bại!")
                })
        }
    }, [registerTask])

    useEffect(() => {
        setIdService(listServices.find(itemService => (
            itemService.name === selectService
        )))
    }, [selectService])

    useEffect(() => {
        setIdTask(listTasks.filter(itemTask => (
            itemTask.serviceId === idService?.id
        )))
    }, [idService])

    const handleRegister = () => {
        setRegisterTask({
            id: userData.id,
            role: 1,
            name: userData.name,
            gender: userData.gender,
            description: userData.description,
            phone: userData.phone,
            address: userData.address,
            creditcard: userData.creditcard,
            price: userData.price,
            taskId: getTask,
            image: userData.image
        })
    }

    return (
        <div className={cx('mainer')}>
            <Link to={'/'} className={cx('link-back')}>
                <div className={cx('back')}>
                    <IoIosArrowBack />Trang chủ
                </div>
            </Link>
            <div className={cx('form-block')}>
                <h1>Đăng ký trở thành người giúp việc của chúng tôi!</h1>
                <div className={cx('form')}>
                    <label className={cx('label')}>Chọn dịch vụ</label>
                    <select className={cx('select')} value={selectService} onChange={e => setSelectService(e.target.value)}>
                        <option value=''>-- Tất cả dịch vụ --</option>
                        {listServices.map(itemService => (
                            <option key={itemService?.id}>{itemService.name}</option>
                        ))}
                    </select>
                </div>
                <div className={cx('form')}>
                    <label className={cx('label')}>Chọn công việc</label>
                    <select className={cx('select')} value={getTask} onChange={e => setGetTask(e.target.value)}>
                        <option value=''>-- Tất cả công việc --</option>
                        {idTask && idTask.map(taskItem => (
                            <option value={taskItem.id} key={taskItem.id}>{taskItem?.name}</option>
                        ))}
                    </select>
                </div>
                <button className={cx('btn')} onClick={handleRegister}>Đăng ký</button>
            </div>
        </div>
    );
};

export default Register;