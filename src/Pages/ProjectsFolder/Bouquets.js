import React, { useState, useEffect } from "react";
import { getBouquets } from "../../services/file-upload.service.project";
import '../../Styling/Projects.css';


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

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
    
      // Shuffle the filteredProjects array before rendering
      const shuffledProjects = shuffleArray(filteredProjects);

    return(
        <div className="BlogListPage2">
        {shuffledProjects.map((project) => (
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

export default Bouquets;