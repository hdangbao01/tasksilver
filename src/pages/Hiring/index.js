import classNames from 'classnames/bind'
import styles from './Hiring.module.scss'
import { IoSend } from 'react-icons/io5'
import { MdOutlineFactCheck } from 'react-icons/md'
import { useState, useEffect, useContext, useMemo } from 'react'
import { AppContext } from '~/components/AppContext'
// import images from '~/assets/images'
import { db } from '~/firebase/config'
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import useFirestore from '~/hooks/useFirestore'

const cx = classNames.bind(styles)

function Hiring() {
    const { userData, listUser, listTasks, listContract, contract, contract2, selectedRoom } = useContext(AppContext)
    const [comment, setComment] = useState('')
    const [taskOfTasker, setTaskOfTasker] = useState([])
    const [idRoom, setIdRoom] = useState([])
    const [activity, setActivity] = useState(1)
    const [text, setText] = useState('')

    useEffect(() => {
        const idTasker = window.location.pathname.split('/')

        setTaskOfTasker(idTasker[2])
        setIdRoom(idTasker[3])
    }, [])

    useEffect(() => {
        const checkActiv = listContract.filter(user => (
            user?.members?.toUserId === Number(taskOfTasker)
        ))

        const listCheck = checkActiv.find(user => (
            user?.activity === 1
        ))

        if (listCheck) {
            setActivity(2)
        }
    }, [listContract])

    useEffect(() => {
        const selectActiv = listContract.find(user => (
            user?.id === selectedRoom
        ))

        if (selectActiv?.activity === 1) {
            setActivity(2)
        }
    }, [selectedRoom])

    // const colRef = collection(db, "contract")

    const addNewDoc = async () => {
        try {
            const docRef = await addDoc(collection(db, "contract"), {
                members: {
                    ofUserId: userData.id,
                    toUserId: Number(taskOfTasker)
                },
                activity: 1,
                createdAt: serverTimestamp(),
                endtime: null,
                pay: null,
                comment: comment,
                taskId: 1
            });
            console.log("Adding document Success: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        try {
            const doc2Ref = await addDoc(collection(db, "rooms"), {
                members: [
                    userData.id,
                    Number(taskOfTasker)
                ],
                createdAt: serverTimestamp(),
            });
            console.log("Adding document Success: ", doc2Ref);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setActivity(2)
    }

    const outContract = () => {
        if (window.confirm("Do you really want to leave?")) {
            window.location.href = '/'
        }
    }

    const doneContract = async () => {
        const iContract = listContract.filter(user => (
            user.activity === 1
        ))
        const iTasker = iContract.find(user => (
            user.members.toUserId === Number(taskOfTasker)
        ))

        const contractRefRef = doc(db, "contract", iTasker.id)

        const updateContractRef = await updateDoc(contractRefRef, {
            activity: 2
        });

        setActivity(3)
    }

    const roomCond = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: userData?.id
        }
    }, [userData?.id])

    const rooms = useFirestore('rooms', roomCond)

    const handleChat = async () => {
        const docRef = await addDoc(collection(db, "messages"), {
            createdAt: serverTimestamp(),
            text: text,
            uid: userData.id,
            roomId: selectedRoom ? selectedRoom : idRoom
        })

        setText('')
    }

    const handlePressEnter = (e) => {
        if (e.key === "Enter") {
            handleChat()
        }
    }

    const messagesCond = useMemo(() => {
        return {
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom ? selectedRoom : idRoom
        }
    }, [selectedRoom ? selectedRoom : idRoom])

    const messages = useFirestore('messages', messagesCond)

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
                    {activity === 1 && <p>Giá dự kiến: {(listUser.find(user => (
                        user.id === Number(taskOfTasker)
                    )))?.price} đ/h</p>}
                    {activity === 3 && <p>Giá thanh toán: {(listUser.find(user => (
                        user.id === Number(taskOfTasker)
                    )))?.price} đ/h</p>}
                    <p>Trạng thái:
                        {activity === 1 && "Đang đợi"}
                        {activity === 2 && "Đang thuê"}
                        {activity === 3 && "Kết thúc"}
                    </p>
                </div>
                <div className={cx('hiring-activity-info')}>
                    {activity === 2 && <button className={cx('button-back')} onClick={doneContract}>
                        Kết thúc
                    </button>}
                    <button onClick={outContract}>Thoát</button>
                </div>
            </div>
            <div className={cx('hiring-conect')}>
                {activity === 1 &&
                    <div className={cx('hiring-start')}>
                        <h2>Nhập yêu cầu đối với người giúp việc (Nếu có)</h2>
                        <div className={cx('wrapper')}>
                            <div className={cx('block')}>
                                <label className={cx('label-info')}>Ghi chú:</label>
                                <textarea className={cx('input-info')} placeholder='Nhập ghi chú...' rows='5' value={comment} onChange={e => setComment(e.target.value)} />
                            </div>
                        </div>
                        <div className={cx('btn-block')}>
                            <button
                                className={cx('btn-hiring')}
                                onClick={() => addNewDoc()
                                }> Bắt đầu thuê </button>
                        </div>
                    </div>
                }
                {activity === 2 &&
                    <div className={cx('hiring-mess')}>
                        {userData?.role !== 0
                            ? <div className={cx('hiring-tasker')}>
                                <img className={cx('hiring-tasker-img')}
                                    src={require(`../../api-tasksilver/Photos/${(listUser.find(user => (
                                        user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.ofUserId)
                                    )))?.image}`)}
                                    alt='avatar tasker' />
                                <h2>
                                    {(listUser.find(user => (
                                        user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.ofUserId)
                                    )))?.name}
                                </h2>
                                <p>Địa chỉ: {(listUser.find(user => (
                                    user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.ofUserId)
                                )))?.address}</p>
                                <p>Điện thoại: {(listUser.find(user => (
                                    user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.ofUserId)
                                )))?.phone}</p>
                            </div>
                            : <div className={cx('hiring-tasker')}>
                                <img className={cx('hiring-tasker-img')}
                                    src={require(`../../api-tasksilver/Photos/${(listUser.find(user => (
                                        user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.toUserId)
                                    )))?.image}`)}
                                    alt='avatar tasker' />
                                <h2>
                                    {(listUser.find(user => (
                                        user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.toUserId)
                                    )))?.name}
                                </h2>
                                <p>Công việc: {listTasks.find(k => (
                                    k.id === (listUser.find(user => (
                                        user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.toUserId)
                                    )))?.taskId
                                ))?.name}</p>
                                <p>Giá: {(listUser.find(user => (
                                    user?.id === (listContract.find(ct => (ct?.id === selectedRoom ? selectedRoom : idRoom))?.members?.toUserId)
                                )))?.price} đ</p>
                            </div>
                        }
                        <div className={cx('hiring-ib')}>
                            <div className={cx('hiring-ib-content')}>
                                {messages.map(mess => (
                                    (mess.uid !== userData.id)
                                        ? <div className={cx('hiring-get-mess-wrap')} key={mess.id}>
                                            <div className={cx('hiring-get-mess')}>
                                                <p>{mess.text}</p>
                                            </div>
                                        </div>
                                        : <div className={cx('hiring-send-mess-wrap')} key={mess.id}>
                                            <div className={cx('hiring-send-mess')}>
                                                <p>{mess.text}</p>
                                            </div>
                                        </div>
                                ))}
                            </div>
                            <div className={cx('hiring-ib-type')}>
                                <input type='text'
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    onKeyDown={e => { handlePressEnter(e) }} />
                                <IoSend className={cx('icon-send')} />
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
                        <input placeholder='' />
                        <h2>Kết thúc thuê, đánh giá người giúp việc!</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default Hiring;