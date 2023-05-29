import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout';
import ScrollToTop from './components/ScrollToTop';
import AppContext from '~/components/AppContext';

function App() {
  return (
    <Router>
      <div className="App">
        <AppContext>
          <ScrollToTop>
            <Routes>
              {publicRoutes.map((route, i) => {
                const Layout = route.layout === null ? Fragment : (route.layout || DefaultLayout)
                const Page = route.component
                return <Route key={i} path={route.path} element={
                  <Layout><Page /></Layout>
                } />
              })}
            </Routes>
          </ScrollToTop>
        </AppContext>
      </div>
    </Router>
  );
}

export default App;
