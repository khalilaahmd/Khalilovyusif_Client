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
        <div className="BlogListPage">
        {filteredProjects.map((project) => (
            <div key={project._id} className="BlogCard">
                 {/* <h1>Folder Name: {project.folder}</h1> */}
                 <p>Title: {project.title}</p>
                 <a href={project.url}>
                    <img src={project.url} alt={project.title}/>
                 </a>
            </div>
        ))}
            
        </div>
    )
}

export default ChristmasDesigns;