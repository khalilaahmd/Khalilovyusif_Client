import React from "react";
import '../Styling/HomePage.css';
import facebookIcon from '../Images/Others/Facebook.png';
import instagramIcon from '../Images/Others/Instagram.png';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <div>
    <div className="subscription">
        <Link to='/subscription' className="Subscription-link">SUBSCRIBE FOR OUR NEWSLETTER</Link>
    </div>

    <div className="social-media-container">
        <a href="https://www.facebook.com/khalilovyusif" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" />
                     </a>

        <a href="https://www.instagram.com/khalilovyusif" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
        </a>
                     
    </div>

    <div>
        <footer className="copyright-section">
        Copyright © 2023 Khalilovyusif, All rights reserved
        </footer>
    </div>
    </div>

    );
}

export default Footer;