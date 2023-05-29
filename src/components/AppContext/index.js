import { useState, useEffect, createContext } from 'react';

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const userLogin = localStorage.getItem("user")

    const [loading, setLoading] = useState(true)
    const [inforAccount, setInforAccount] = useState('')
    const [userData, setUserData] = useState('')
    const [listUser, setListUser] = useState('')
    const [listServices, setListServices] = useState([])
    const [listTasks, setListTasks] = useState([])

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

    return (
        <AppContext.Provider
            value={{
                userLogin, userData, listUser, listServices, listTasks, loading
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;