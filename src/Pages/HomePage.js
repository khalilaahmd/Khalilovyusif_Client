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
                            Paragraph element is used to define paragraph in an HTML document. Paragraphs are basically blocks of similar content, images, links, etc grouped together and displayed on a web-page. It always starts with a new line and browsers automatically add some white-spaces before and after each paragraph 
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