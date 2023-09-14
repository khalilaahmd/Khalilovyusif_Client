import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function SpecialEvents () {
    const [ specialEvents, setSpecialEvents ] = useState([]);


    const getAllSpecialEvents = () => {
        axios
           .get(`${API_URL}/api/specialEvents`)
           .then((response) => setSpecialEvents(response.data))
           .catch((error) => console.log("Error fetching projects: ", error));
    }
    useEffect(() => {
        getAllSpecialEvents();
    }, []);

    const filteredProjects = specialEvents.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Special Events';
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

export default SpecialEvents;