import React, { useCallback, useContext, useEffect, useState } from "react";
import OnProjectForm from "../Components/OnProjectsForm";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styling/Projects.css";

const API_URL = process.env.REACT_APP_API_URL;

function Projects () {
    const [ setProject ] = useState([]);
    const {isLoading} = useContext(AuthContext);

    const getAllProject = useCallback (() => {
        axios 
           .get(`${API_URL}/api/projects`)
           .then((response) => setProject (response.data))
           .catch((error) => console.log(error));
    }, [setProject]);
    useEffect(() => {
        getAllProject();
    }, [getAllProject]);
    
    if(isLoading) return <p>Loading ...</p>
    return (
        <div className="ProjectListPage">
            <OnProjectForm addProjects={getAllProject} />
            
            <div className="card christmasDesign">
                <Link to={'/christmasDesigns'}>Christmas Design</Link>
            </div>
            <div className="card artProjects">
                <Link to={'/artProjects'}>Art Project</Link>
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
    )
}

export default Projects;