import { NoHeader } from '~/components/Layout'

import Home from '~/pages/Home'
import Services from '~/pages/Services'
import Profile from '~/pages/Profile'
import Login from '~/pages/Login'

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile,
        layout: NoHeader
    }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }