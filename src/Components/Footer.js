import React from "react";
import '../Styling/HomePage.css';
import facebookIcon from '../Images/Others/facebook.png';
import instagramIcon from '../Images/Others/instagram.png';
import pinterestIcon from '../Images/Others/pinterest.png';
import behanceIcon from '../Images/Others/behance.png';
import linkedinIcon from '../Images/Others/linkedin.png';
import tiktokIcon from '../Images/Others/tik-tok.png';

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

        <a href="https://nl.pinterest.com/khalilovyusif/" target="_blank" rel="noopener noreferrer">
        <img src={pinterestIcon} alt="Pinterest" />
        </a>

        <a href="https://www.behance.net/khalilovyusif" target="_blank" rel="noopener noreferrer">
        <img src={behanceIcon} alt="Behance" />
        </a>

        <a href="https://www.linkedin.com/in/khalilovyusif/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
        </a>

        <a href="https://www.tiktok.com/@khalilov_yusif" target="_blank" rel="noopener noreferrer">
        <img src={tiktokIcon} alt="Tiktok" />
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