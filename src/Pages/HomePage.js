import React from "react";
import '../Styling/HomePage.css';
import logo from '../Images/Logo-YK/icon1024_1.jpg'
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

function HomePage() {
    return (
        <div className="App">
        <div className="theLastHuman">
        <img src={logo} alt="The Last Human - head" className="rotating-image"/>
        </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="biography-title">
                            Yusif Khalilov
                            </div>
                            <p>Artist, Florist, and Designer</p>
                        </td>
                        <td>
                            Biography:
                            <p className="biography-text">
                            Yusif Khalil is an Azerbaijani surrealist artist born in Baku, Azerbaijan. He is a prosper figure in the art world, known for his eccentric personality and surreal imagery. Yusif attended many art workshops, where he developed his artistic skills. In the 2014, Yusif met a famous florist and art designer who has empowered Yusif artistic vision to begin creating art and design flower bouquets. Yusif very first collection of art pieces titled “The Last Human”, visioning the future after the global warming. To date and throughout his career, Yusif worked in a variety of mediums, including painting, sculpture, and art designing for photoshops, and he has a range of wide followers on Instagram.
                            <br />
                            <Link to='/biography' className="read-more-link">Read More</Link>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Footer />

        </div>
    );
}

export default HomePage;