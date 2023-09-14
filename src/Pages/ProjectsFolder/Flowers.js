import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function Flowers () {
    const [ flowers, setFlowers ] = useState([]);


    const getAllFlowers = () => {
        axios
           .get(`${API_URL}/api/flowers`)
           .then((response) => setFlowers(response.data))
           .catch((error) => console.log("Error fetching projects: ", error));
    }
    useEffect(() => {
        getAllFlowers();
    }, []);

    const filteredProjects = flowers.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Flowers';
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

export default Flowers;