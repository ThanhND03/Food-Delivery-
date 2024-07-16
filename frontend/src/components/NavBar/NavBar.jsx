import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets_fe } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import config from '../../config/routes'

const NavBar = ({ setShowLogin }) => {

    const [menuActive, setMenuActive] = useState("home")
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <div className='navbar'>
            <Link to={config.home} >
                <img className='logo' src={assets_fe.logo} alt="logo" />
            </Link>
            <ul className="navbar-menu">
                <Link to={config.home} onClick={() => setMenuActive("home")} className={ menuActive === "home" ? "active" : "" } >Home</Link>
                <a href='#explore-menu'  onClick={() => setMenuActive("menu")} className={ menuActive === "menu" ? "active" : "" } >Menu</a>
                <a href='#app-download' onClick={() => setMenuActive("mobile-app")} className={ menuActive === "mobile-app" ? "active" : "" } >Moblie App</a>
                <a href='#footer' onClick={() => setMenuActive("contact-us")} className={ menuActive === "contact-us" ? "active" : "" } >Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets_fe.search_icon} alt="search_icon" />
                <div className="navbar-search-icon">
                    <Link to={config.cart} >
                        <img src={assets_fe.basket_icon} alt="basket_icon" />
                    </Link>
                    <div className={getTotalCartAmount() ? "dot" : ""}></div>
                    {/* <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div> */}
                </div>
                {!token ? 
                <button onClick={() => setShowLogin(true)} >Sign In</button> : 
                <div className='navbar-profile'>
                    <img src={assets_fe.profile_icon} alt="icon" />
                    <ul className="nav-profile-dropdown">
                        {/* <Link to={config.myorders}>
                            <li><img src={assets_fe.bag_icon} alt="icon" /><p>Orders</p></li>
                        </Link> */}
                        <li onClick={() => navigate(config.myorders)}><img src={assets_fe.bag_icon} alt="icon" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets_fe.logout_icon} alt="icon" /><p>Log Out</p></li>
                    </ul>
                </div>}
                
            </div>
        </div>
    )
}

export default NavBar
