import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function ArtProjects () {
    const [ artProjects, setArtProjects ] = useState([]);


    const getAllArtProjects = () => {
        axios
           .get(`${API_URL}/api/artProjects`)
           .then((response) => setArtProjects(response.data))
           .catch((error) => console.log("Error fetching projects: ", error));
    }
    useEffect(() => {
        getAllArtProjects();
    }, []);

    const filteredProjects = artProjects.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Art Projects';
    });

    return(
        <div className="ProjectFolder">
        {filteredProjects.map((project) => (
            <div key={project._id}>
                 <h1>Folder Name: {project.folder}</h1>
                 <h2>Title: {project.title}</h2>
                 <h3>Link: {project.url}</h3>
            </div>
        ))}
            
        </div>
    )
}

export default ArtProjects;