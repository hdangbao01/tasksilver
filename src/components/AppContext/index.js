import { useState, useEffect, createContext, useMemo } from 'react'
import Load from '~/components/Load'
import { db } from '~/firebase/config'
import { collection, onSnapshot } from "firebase/firestore"
import useFirestore from '~/hooks/useFirestore';

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const userLogin = localStorage.getItem("user")

    const [loading, setLoading] = useState(true)
    const [inforAccount, setInforAccount] = useState('')
    const [userData, setUserData] = useState('')
    const [listUser, setListUser] = useState('')
    const [listServices, setListServices] = useState([])
    const [listTasks, setListTasks] = useState([])
    const [listContract, setListContract] = useState([])
    const [selectedRoom, setSelectedRoom] = useState('')

    useEffect(() => {
        if (userLogin) {
            fetch(`http://localhost:8000/account`)
                .then((res) => res.json())
                .then((res) => {
                    setInforAccount(res.find(iA => iA.username === userLogin?.toString()))
                })
        }
        fetch(`http://localhost:8000/user`)
            .then((res) => res.json())
            .then((res) => {
                setListUser(res)
            })
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

    useEffect(() => {
        fetch(`http://localhost:8000/user`)
            .then((res) => res.json())
            .then((res) => {
                setUserData(res.find(iU => iU.id === inforAccount?.userId))
                setLoading(false)
            })
    }, [inforAccount])

    useEffect(() => {
        // Add Document
        const colRef = collection(db, "contract")
        // Real Time Database
        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            // console.log(data)
            setListContract(data)
        })

        return unsubscribe
    }, [])

    // Get List Contract
    const contractCond = useMemo(() => {
        return {
            fieldName: 'members.ofUserId',
            operator: '==',
            compareValue: userData?.id
        }
    }, [userData?.id])

    const contract = useFirestore('contract', contractCond)

    const contract2Cond = useMemo(() => {
        return {
            fieldName: 'members.toUserId',
            operator: '==',
            compareValue: userData?.id
        }
    }, [userData?.id])

    const contract2 = useFirestore('contract', contract2Cond)

    return (
        <AppContext.Provider
            value={{
                userLogin, userData, listUser, listServices, listTasks, listContract, contract, contract2, selectedRoom, setSelectedRoom, loading
            }}>
            {loading ? <Load /> : children}
        </AppContext.Provider>
    );
};

export default AppProvider;