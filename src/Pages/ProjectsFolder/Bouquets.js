import React, { useState, useEffect } from "react";
import { getBouquets } from "../../services/file-upload.service.project";


function Bouquets () {
    const [ bouquets, setBouquets ] = useState([]);

    useEffect(() => {
        getBouquets()
        .then((data) => {
            setBouquets(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const filteredProjects = bouquets.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Bouquets';
    });

    return(
        <div className="BlogListPage">
        {filteredProjects.map((project) => (
            <div key={project._id} className="BlogCard">
                 <p>Title: {project.title}</p>
                 <a href={project.postUrl}>
                    <img src={project.postUrl} alt={project.title}/>
                 </a>
            </div>
        ))}
            
        </div>
    )
}

export default Bouquets;