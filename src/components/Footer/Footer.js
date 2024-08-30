import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Tomato! Your ultimate food delivery app that brings your favorite foods right to your doorstep. Tomato makes ordering and enjoying delicious meals easier than ever. Satisfy your cravings quickly with Tomato—fresh, hot, and delivered straight to you!</p>
                    <div className="footer-social-icons">
                        <a href="https://www.linkedin.com/in/mehak-fatima-08a568275/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/MehakRauf" target="_blank" rel="noopener noreferrer">
                            <img src={assets.github_logo} alt="" /><img src="" alt="" /><img src="" alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer