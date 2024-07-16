import React from 'react'
import './AppDownload.css'
import { assets_fe } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download' >
            <p>For better experience download <br /> tomato app.</p>
            <div className="app-download-platfroms">
                <img src={assets_fe.play_store} alt="icon-play-store" />
                <img src={assets_fe.app_store} alt="icon-app-store" />
            </div>
        </div>
    )
}

export default AppDownload
