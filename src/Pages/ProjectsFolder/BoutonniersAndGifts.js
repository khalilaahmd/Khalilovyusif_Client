import React, { useState, useEffect } from "react";
import { getBoutonniersAndGifts } from "../../services/file-upload.service.project";
import '../../Styling/Projects.css';

function BoutonniersAndGifts () {
    const [ boutonniersAndGifts, setBoutonniersAndGifts ] = useState([]);


    useEffect(() => {
        getBoutonniersAndGifts()
        .then((data) => {
            setBoutonniersAndGifts(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const filteredProjects = boutonniersAndGifts.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Boutonniers And Gifts';
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

export default BoutonniersAndGifts;