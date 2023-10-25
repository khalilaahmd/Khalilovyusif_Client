import React from "react";
import '../Styling/HomePage.css';
import facebookIcon from '../../public/Logo/facebook.png';
import instagramIcon from '../../public/Logo/instagram.png';
import pinterestIcon from '../../public/Logo/pinterest.png';
import behanceIcon from '../../public/Logo/behance.png';
import linkedinIcon from '../../public/Logo/linkedin.png';
import tiktokIcon from '../../public/Logo/tik-tok.png';

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