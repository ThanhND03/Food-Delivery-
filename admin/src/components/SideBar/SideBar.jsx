import React from 'react'
import './SideBar.css'
import { assets_admin } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

import config from '../../config/routes'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to={config.add} className="sidebar-option">
                    <img src={assets_admin.add_icon} alt="icon" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to={config.list} className="sidebar-option">
                    <img src={assets_admin.order_icon} alt="icon" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to={config.order} className="sidebar-option">
                    <img src={assets_admin.order_icon} alt="icon" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar
