// import { NoHeader } from '~/components/Layout'
import { NoFooter } from '~/components/Layout'
import { JustContent } from '~/components/Layout'

import Home from '~/pages/Home'
import Services from '~/pages/Services'
import Location from '~/pages/Location'
import Login from '~/pages/Login'
import Tasks from '~/pages/Tasks'
import Tasker from '~/pages/Tasker'
import Hiring from '~/pages/Hiring'
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
        path: '/tasks/:id',
        component: Tasks
    },
    {
        path: '/tasker/:id',
        component: Tasker
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/login',
        component: Login,
        layout: NoFooter
    },
    {
        path: '/location',
        component: Location,
        layout: NoFooter
    },
    {
        path: '/hiring',
        component: Hiring,
        layout: JustContent
    }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }