import React from 'react'
import './Footer.css'
import { assets_fe } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets_fe.logo} alt="logo-footer" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nisi voluptatem porro labore neque assumenda enim vero aut, ea nobis hic delectus cupiditate dolorem maiores at ipsa mollitia. Minus, voluptates!</p>
                    <div className="footer-social-icons">
                        <img src={assets_fe.facebook_icon} alt="" />
                        <img src={assets_fe.twitter_icon} alt="" />
                        <img src={assets_fe.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>get in touch</h2>
                    <ul>
                        <li>+84 123 456 9999</li>
                        <li>contact@tomtato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.</div>
        </div>
    )
}

export default Footer
