import { Fragment, useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Load from './components/Load';

export const UserContext = createContext()

function App() {
  const user = localStorage.getItem("user")

  const [loading, setLoading] = useState(true)
  const [inforAccount, setInforAccount] = useState('')
  const [inforUser, setInforUser] = useState('')


  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/account`)
        .then((res) => res.json())
        .then((res) => {
          setInforAccount(res.find(iA => iA.username === user?.toString()))
        })
    }
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/user`)
      .then((res) => res.json())
      .then((res) => {
        setInforUser(res.find(iU => iU.id === inforAccount?.userId))
        setLoading(false)
      })
  }, [inforAccount])

  return (
    <UserContext.Provider value={inforUser}>
      <Router>
        <div className="App">
          {loading ? <Load /> : <ScrollToTop>
            <Routes>
              {publicRoutes.map((route, i) => {
                const Layout = route.layout === null ? Fragment : (route.layout || DefaultLayout)
                const Page = route.component

                return <Route key={i} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              })}
            </Routes>
          </ScrollToTop>}
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
