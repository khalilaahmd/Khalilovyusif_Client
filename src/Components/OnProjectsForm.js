import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "../Styling/Form.css";

// const API_URL = "http://localhost:5005";
const API_URL = process.env.REACT_APP_API_URL;

function OnProjectForm ({addProjects, children}) {
    const [folder, setFolder] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const {isLoggedIn, IsLoading} = useContext(AuthContext);

    if (IsLoading) return <p>Loading...</p>

    const handleFolderInput = (e) => setFolder (e.target.value);
    const handleTitleInput = (e) => setTitle (e.target.value);
    const handleURLInput = (e) => setUrl (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {folder, title, url};

        console.log("submitted: ", newProject);
        addProjects(newProject);

        axios
           .post(`${API_URL}/api/projects`, newProject)
           .then((response) => {
            // Reset the state
            setFolder('');
            setTitle('');
            setUrl('');

            addProjects.refreshProject();
           })
           .catch((error) => console.log(error));
    };
    
    if (isLoggedIn){
    return(
        <div className="container">
            <h1 className="title">Add a new Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="label" htmlFor="folderSelect">Folder</label>
                    <select className="input"
                        id="folderSelect"
                        name="folder"
                        value={folder}
                        onChange={handleFolderInput}
                    >
                        <option value=""></option>
                        <option value="Christmas Design">Christmas Design</option>
                        <option value="Art Projects">Art Projects</option>
                        <option value="Special Events">Special Events</option>
                        <option value="Boutonniers And Gifts">Boutonniers and Gifts</option>
                        <option value="Flowers">Flowers</option>
                        <option value="Bouquets">Bouquets</option>
                    </select>

                    <label className="label">Title: </label>
                    <input className="input"
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleTitleInput}
                        />

                    <label className="label">Link:</label>
                    <input className="input"
                        type="url"
                        name="url"
                        value={url}
                        onChange={handleURLInput}
                        />
                </div>
                <label className="label">
                    <button type="submit" className="button">Add a Project</button>
                </label>
            </form>
        </div>
    );
    } else {
        return children;
    }
}

export default OnProjectForm;