import React from "react";
import { Link } from "react-router-dom";

function NavbarProjects() {
    return (
        <div className="navbar_Projects">
        <nav className="navbar_Projects-container">
        <ul className="navbar_Projects-list">
            <li className="navbar_Projects-link"><Link to={'/christmasDesigns'}>Christmas Designs</Link></li>
            <li className="navbar_Projects-link"><Link to={'/artProjects'}>Art Projects</Link></li>
            <li className="navbar_Projects-link"><Link to={'/specialEvents'}>Special Events</Link></li>
            <li className="navbar_Projects-link"><Link to={'/boutonniersAndGifts'}>Boutonniers and Gifts</Link></li>
            <li className="navbar_Projects-link"><Link to={'/flowers'}>Flowers</Link></li>
            <li className="navbar_Projects-link"><Link to={'/bouquets'}>Bouquets</Link></li>
        </ul>
        </nav>
    </div>
    )
}

export default NavbarProjects;