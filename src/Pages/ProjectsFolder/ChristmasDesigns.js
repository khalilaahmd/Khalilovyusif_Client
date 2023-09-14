import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function ChristmasDesigns () {
    const [ christmastDesigns, setChristmasDesigns ] = useState([]);


    const getAllChristmasDesigns = () => {
        axios
           .get(`${API_URL}/api/christmasDesigns`)
           .then((response) => setChristmasDesigns(response.data))
           .catch((error) => console.log("Error fetching projects: ", error));
    }
    useEffect(() => {
        getAllChristmasDesigns();
    }, []);

    const filteredProjects = christmastDesigns.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Christmas Design';
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

export default ChristmasDesigns;