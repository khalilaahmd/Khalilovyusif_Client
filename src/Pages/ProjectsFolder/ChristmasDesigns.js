import React, { useState, useEffect, useContext } from "react";
import { getChristmasDesigns } from "../../services/file-upload.service.project";
import '../../Styling/Projects.css';
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function ChristmasDesigns() {
  const [christmastDesigns, setChristmasDesigns] = useState([]);
  const {isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    // Service
    getChristmasDesigns()
      .then((data) => {
        setChristmasDesigns(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteImage = (christmasDesignId) => {
    axios
       .delete(`${API_URL}/api/christmasDesigns/${christmasDesignId}`)
       .then(() => {
        const updatedImages = christmastDesigns.filter(
          (image) => image._id !== christmasDesignId
        );
        setChristmasDesigns(updatedImages);
       })
       .catch((error) => console.log(error))
  };

  const filteredProjects = christmastDesigns.filter(project => {
    console.log(project.folder);
    return project.folder && project.folder === 'Christmas Design';
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
    )
  } else {
  return (
    <div className="BlogBox">
      <div className="BlogListPage2">
        {shuffledProjects.map((project, index) => (
          <div key={project._id} className="BlogCard2">
            <p>Title: {project.title}</p>
            <a href={project.postUrl}>
              <img src={project.postUrl} alt={project.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
}

export default ChristmasDesigns;