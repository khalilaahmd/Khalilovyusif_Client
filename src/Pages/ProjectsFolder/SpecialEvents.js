import React, { useState, useEffect } from "react";
import { getSpecialEvents } from "../../services/file-upload.service.project";
import '../../Styling/Projects.css';


function SpecialEvents () {
    const [ specialEvents, setSpecialEvents ] = useState([]);


    useEffect(() => {
        //service
        getSpecialEvents()
        .then((data) => {
            setSpecialEvents(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const filteredProjects = specialEvents.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Special Events';
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

export default SpecialEvents;