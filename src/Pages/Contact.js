import React from "react";
import "../Styling/contact.css"
import { Link } from 'react-router-dom';


function Contact() {
    return (
    <div>
        <div className="container">
            <h1>Contact us:</h1>
            <a className="btn btn-email" href="mailto:info@khalilovyusif.com">info@khalilovyusif.com</a>
            <a className="btn"
               href="https://www.instagram.com/khalilovyusif"
               target="_blank" 
               rel="noopener noreferrer">
               Instagram
            </a>

            <a className="btn"
               href="https://www.behance.net/khalilovyusif"
               target="_blank" 
               rel="noopener noreferrer">
               Behance
            </a>

            <div className="subscription">
                <Link to='/subscription' className="Subscription-link">SUBSCRIBE FOR OUR NEWSLETTER</Link>
            </div>
        </div>

        <div>
        <footer className="copyright-section">
        Copyright © 2023 Khalilovyusif, All rights reserved
        </footer>
        </div>

    </div>
    );
}

export default Contact;


