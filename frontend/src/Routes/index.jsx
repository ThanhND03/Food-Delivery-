import config from '../config/routes'

import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Verify from "../pages/Verify/Verify";
import MyOrders from '../pages/MyOrders/MyOrders';
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";


const publicRoutes = [
    { path: config.home , component : Home },
    { path: config.cart , component : Cart },
    { path: config.placeOrder , component : PlaceOrder },
    { path: config.verify , component: Verify },
    { path: config.myorders , component: MyOrders }
]

const priveRoutes = [

]

export { publicRoutes, priveRoutes } 