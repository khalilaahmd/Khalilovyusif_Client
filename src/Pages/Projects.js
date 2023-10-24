import React, { useContext  } from "react";
import OnProjectForm from "../Components/OnProjectsForm";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import "../Styling/Projects.css";
import Footer from "../Components/Footer";

function Projects () {
    const {isLoading} = useContext(AuthContext);

    if(isLoading) return <p>Loading ...</p>
    return (
        <div>
        <div className="ProjectListPage">
            <OnProjectForm/>
            
            <div className="card christmasDesign">
                <Link to={'/christmasDesigns'}>Christmas Designs</Link>
            </div>
            <div className="card artProjects">
                <Link to={'/artProjects'}>Art Projects</Link>
            </div>
            <div className="card specialEvents">
                <Link to={'/specialEvents'}>Special Events</Link>
            </div>
            <div className="card boutonniersAndGifts">
                <Link to={'/boutonniersAndGifts'}>Boutonniers and Gifts</Link>
            </div>
            <div className="card flowers">
                <Link to={'/flowers'}>Flowers</Link>
            </div>
            <div className="card bouquets">
                <Link to={'/bouquets'}>Bouquets</Link>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Projects;