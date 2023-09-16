import React, { useState, useEffect } from "react";
import { getChristmasDesigns } from "../../services/file-upload.service.project";
import '../../Styling/Projects.css';

function ChristmasDesigns () {
    const [ christmastDesigns, setChristmasDesigns ] = useState([]);

    useEffect(() => {
        //service
        getChristmasDesigns()
        .then((data) => {
            setChristmasDesigns(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const filteredProjects = christmastDesigns.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Christmas Design';
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

export default ChristmasDesigns;