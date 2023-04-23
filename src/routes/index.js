import { NoHeader } from '~/components/Layout'

import Home from '~/pages/Home'
import Services from '~/pages/Services'
import Profile from '~/pages/Profile'

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
        path: '/profile',
        component: Profile,
        layout: NoHeader
    }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }