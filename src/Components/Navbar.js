import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styling/Navbar.css';
import LogoImage from '../Images/Logo-YK/Logo White.jpg';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    
    return (
        <div className="navbar">
            <h3 className="navbar-title">
                Yusif Khalilov
                    <Link to={'/login'}>
                    <img className='logo' src={LogoImage} alt="Yusif Khalilov Logo"/>
                    </Link>
                {/* <img className='logo' src={LogoImage} alt="Yusif Khalilov Logo"/> */}
            </h3>
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                &#9776;
            </button>
            <nav className={`navbar-container ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-list">
                    <li className="navbar-link"><Link to='/'>Home</Link></li>
                    <li className="navbar-link"><Link to='/biography'>Biography</Link></li>
                    <li className="navbar-link"><Link to='/projects'>Projects</Link></li>
                    <li className="navbar-link"><Link to='/artworks'>Artworks</Link></li>
                    <li className="navbar-link"><Link to='/blogs'>Blog</Link></li>
                    <li className="navbar-link"><Link to='/media'>Media</Link></li>
                    <li className="navbar-link"><Link to='/contact'>Contact</Link></li>
                    {isLoggedIn && (
                        <li className="navbar-link">
                            <div className="user-info">
                                <span className="user-name">{user && user.name}</span>
                                  <button onClick={logOutUser} className="logOut">Logout</button>
                            </div>
                            <div className="add-user-button">
                                <Link to="/signup"><button className="addUser">Add User</button></Link>
                            </div>
                        </li>
                        )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;