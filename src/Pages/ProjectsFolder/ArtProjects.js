import React, { useState, useEffect } from "react";
import { getArtProjects } from "../../services/file-upload.service.project";    
import '../../Styling/Projects.css';

function ArtProjects () {
    const [ artProjects, setArtProjects ] = useState([]);

    useEffect(() => {
        //service
        getArtProjects()
        .then((data) => {
            setArtProjects(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const filteredProjects = artProjects.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Art Projects';
    });

    return(
        <div className="BlogListPage2">
        {filteredProjects.map((project) => (
            <div key={project._id} className="BlogCard2">
                 <p>Title: {project.title}</p>
                 <a href={project.postUrl}>
                    <img src={project.postUrl} alt={project.title}/>
                 </a>
            </div>
        ))}
            
        </div>
    )
}

export default ArtProjects;