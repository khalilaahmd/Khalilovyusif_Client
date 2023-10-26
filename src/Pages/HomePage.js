import React from "react";
import '../Styling/HomePage.css';
import logo from '../Images/Logo-YK/icon1024_1.jpg'
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
import Cookies from "../Components/Cookies";

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
                            Yusif Khalil is an Azerbaijani artist born in Baku, Azerbaijan, raised in Moscow, and currently residing in Amsterdam. 
                            He aspires to establish himself as a prominent figure in the art world, renowned for his unique personality and creative artwork. 
                            Yusif has participated in numerous art workshops, where he honed his artistic skills. 
                            In 2014, he embarked on his artistic journey, beginning as a florist and art designer. 
                            His very first collection of art pieces, titled "The Last Human," envisions the future in the wake of global warming.
                            Throughout his career, Yusif has worked in various mediums, including painting, sculpture, and art design for photoshoots and flower bouquet arrangements. 
                            With a substantial following on Instagram and other social media platforms, Yusif is eager to expand his reach and connect with even larger audiences.
                            <br />
                            <Link to='/biography' className="read-more-link">Read More</Link>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Footer />

            <Cookies />

        </div>
    );
}

export default HomePage;