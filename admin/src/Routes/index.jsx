import config from '../config/routes'

import Add from '../pages/Add/Add'
import List from '../pages/List/List'
import Order from '../pages/Orders/Orders'
import Home from '../pages/Home/Home'

const publicRoutes = [
    {path: config.home, component: Home },
    {path: config.add, component: Add },
    {path: config.list, component: List },
    {path: config.order, component: Order },
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}