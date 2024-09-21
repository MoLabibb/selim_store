import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
function Footer() {
  return (
<footer className='footer'>
    <div className='footer__columns'>
        <div className='footer__col'>
            <h3 className='footer__title'>Shop By</h3>
            <ul className='footer__list'>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Kids</a></li>
                <li><a href='#'>Electronics</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Sports</a></li>
                <li><a href='#'>Shoes & Bags</a></li>
                <li><a href='#'>Grocery</a></li>
            </ul>
        </div>
        <div className='footer__col'>
            <h3 className='footer__title'>Support</h3>
            <ul className='footer__list'>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Shipping Info</a></li>
                <li><a href='#'>Returns</a></li>
                <li><a href='#'>Refund</a></li>
                <li><a href='#'>How To Order</a></li>
                <li><a href='#'>How To Track</a></li>
                <li><a href='#'>Size Guide</a></li>
                <li><a href='#'>Membership</a></li>
            </ul>
        </div>
        <div className='footer__col'>
            <h3 className='footer__title'>Customer Services</h3>
            <ul className='footer__list'>
                <li><a href='#'>FAQ's</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Connect via WhatsApp</a></li>
                <li><a href='#'>Sitemap</a></li>
                <li><a href='#'>Stores</a></li>
                <li><a href='#'>Home Products Guide</a></li>
                <li><a href='#'>Shoes & Bags</a></li>
                <li><a href='#'>Grocery</a></li>
            </ul>
        </div>
         <div className='footer__social'>
        <h5>Follow Us</h5>
        <div className='footer__social_icons'>
            <a href='#' className='social__icon'><FaFacebook /></a>
            <a href='#' className='social__icon'><FaInstagram /></a>
            <a href='#' className='social__icon'><FaTwitter /></a>
            <a href='#' className='social__icon'><FaYoutube /></a>
        </div>
    </div>
    </div>
   
    <div className='footer__rights'>
        All rights reserved © 2024 Designed and Developed By <strong>Mohamed Labib</strong>
    </div>
</footer>

  )
}

export default Footer