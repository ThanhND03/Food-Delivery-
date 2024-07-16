import React from 'react'
import './NavBar.css'
import { assets_admin } from '../../assets/assets'

import { Link } from 'react-router-dom'
import config from '../../config/routes'
const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to={config.home}>
                <img className='logo' src={assets_admin.logo} alt="" />
            </Link>
            <img className='profile' src={assets_admin.profile_image} alt="" />
        </div>
    )
}

export default NavBar
