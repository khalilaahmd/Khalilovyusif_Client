import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function BoutonniersAndGifts () {
    const [ boutonniersAndGifts, setBoutonniersAndGifts ] = useState([]);


    const getAllboutonniersAndGifts = () => {
        axios
           .get(`${API_URL}/api/boutonniersAndGifts`)
           .then((response) => setBoutonniersAndGifts(response.data))
           .catch((error) => console.log("Error fetching projects: ", error));
    }
    useEffect(() => {
        getAllboutonniersAndGifts();
    }, []);

    const filteredProjects = boutonniersAndGifts.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Boutonniers And Gifts';
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

export default BoutonniersAndGifts;