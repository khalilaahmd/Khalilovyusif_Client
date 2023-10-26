import React from "react";
import '../Styling/HomePage.css';
import { SocialIcon } from "react-social-icons";

import { Link } from 'react-router-dom';

function Footer () {

    return (
        <div>
    <div className="subscription">
        <Link to='/subscription' className="Subscription-link">SUBSCRIBE FOR OUR NEWSLETTER</Link>
    </div>

    <div className="social-media-container">
        <SocialIcon url="https://www.facebook.com/khalilovyusif"/>  
        <SocialIcon url="https://www.instagram.com/khalilovyusif"/>
        <SocialIcon url="https://nl.pinterest.com/khalilovyusif/"/>
        <SocialIcon url="https://www.behance.net/khalilovyusif"/>
        <SocialIcon url="https://www.linkedin.com/in/khalilovyusif"/>
        <SocialIcon url="https://www.tiktok.com/@khalilov_yusif"/>  
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