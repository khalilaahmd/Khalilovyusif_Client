import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function Bouquets () {
    const [ bouquets, setBouquets ] = useState([]);


    const getAllBouquets = () => {
        axios
           .get(`${API_URL}/api/bouquets`)
           .then((response) => setBouquets(response.data))
           .catch((error) => console.log("Error fetching projects: ", error));
    }
    useEffect(() => {
        getAllBouquets();
    }, []);

    const filteredProjects = bouquets.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Bouquets';
    });

    return(
        <div className="ProjectFolder">
        {filteredProjects.map((project) => (
            <div key={project._id}>
                 <h1>Folder Name: {project.folder}</h1>
                 <h2>Title: {project.title}</h2>
                 <h3>{project.url}</h3>
            </div>
        ))}
            
        </div>
    )
}

export default Bouquets;