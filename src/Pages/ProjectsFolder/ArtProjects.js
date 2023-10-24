import React, { useState, useEffect, useContext } from "react";
import { getArtProjects } from "../../services/file-upload.service.project";    
import '../../Styling/Projects.css';
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import Footer from "../../Components/Footer";

const API_URL = process.env.REACT_APP_API_URL;

function ArtProjects () {
    const [ artProjects, setArtProjects ] = useState([]);
    const {isLoggedIn} = useContext(AuthContext);

    useEffect(() => {
        //service
        getArtProjects()
        .then((data) => {
            setArtProjects(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const deleteImage = (artProjectsId) => {
        axios
           .delete(`${API_URL}/api/artProjects/${artProjectsId}`)
           .then(() => {
            const updatedImages = artProjects.filter(
              (image) => image._id !== artProjectsId
            );
            setArtProjects(updatedImages);
           })
           .catch((error) => console.log(error))
      };

    const filteredProjects = artProjects.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Art Projects';
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

      if (isLoggedIn) {
        return (
          <div>
          <div className="BlogBox">
          <div className="BlogListPage2">
            {shuffledProjects.map((project, index) => (
              <div key={project._id} className="BlogCard2">
                <p>{project.title}</p>
                <a href={project.postUrl}>
                  <img src={project.postUrl} alt={project.title} />
                </a>
                <button onClick={() => deleteImage(project._id)} className="btn-delete">Delete</button>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
        </div>
        )
      } else {
      return (
        <div>
        <div className="BlogBox">
          <div className="BlogListPage2">
            {shuffledProjects.map((project, index) => (
              <div key={project._id} className="BlogCard2">
                <p>{project.title}</p>
                <a href={project.postUrl}>
                  <img src={project.postUrl} alt={project.title} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
        </div>
      );
    }
}

export default ArtProjects;