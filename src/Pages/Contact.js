import React from "react";
import "../Styling/contact.css"
import Footer from "../Components/Footer";


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

        </div>
        <Footer/>
        </div>

    );
}

export default Contact;


