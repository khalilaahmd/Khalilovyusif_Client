import React, { useState, useEffect, useContext } from "react";
import { getSpecialEvents } from "../../services/file-upload.service.project";
import '../../Styling/Projects.css';
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import Footer from "../../Components/Footer";
import NavbarProjects from "../../Components/Navbar_Projects";

const API_URL = process.env.REACT_APP_API_URL;

function SpecialEvents () {
    const [ specialEvents, setSpecialEvents ] = useState([]);
    const {isLoggedIn} = useContext(AuthContext);


    useEffect(() => {
        //service
        getSpecialEvents()
        .then((data) => {
            setSpecialEvents(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const deleteImage = (specialEventsId) => {
        axios
           .delete(`${API_URL}/api/specialEvents/${specialEventsId}`)
           .then(()=> {
            const updatedImages = specialEvents.filter(
                (image) => image._id !== specialEventsId
            );
            setSpecialEvents(updatedImages);
           })
           .catch((error) => console.log(error))
    };

    const filteredProjects = specialEvents.filter(project => {
        console.log(project.folder);
        return project.folder && project.folder === 'Special Events';
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
            <NavbarProjects/>
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
        <NavbarProjects/>
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

export default SpecialEvents;