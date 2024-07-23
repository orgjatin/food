import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque dolorem cupiditate omnis quas vitae magnam qui consequuntur quod in, possimus quis sapiente, veritatis placeat ea nulla et cumque vero?</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            </div>

          </div>

          <div className="footer-content-center">
            
          <h2>Company</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

          </div>
          <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+919876543210</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
      
        <p className="footer-copyright">
          Copyright 2024 all rights reserved
        </p>
    </div>
  )
}

export default Footer