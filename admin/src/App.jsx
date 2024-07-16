import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'

import{ Routes ,Route } from 'react-router-dom'
import { publicRoutes } from './Routes/index'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const url = 'http://localhost:4000'

    return (
        <div className='app'>
            <ToastContainer />
            <NavBar />
            <hr />
            <div className="app-content">
                <SideBar />
                {/* Page */}

                <Routes>
                    {publicRoutes.map((route , index) => {
                        const Page = route.component
                        return <Route key={index} path={route.path} element={<Page url={url} />} />
                    })}
                </Routes>

            </div>
        </div>
    )
}

export default App
