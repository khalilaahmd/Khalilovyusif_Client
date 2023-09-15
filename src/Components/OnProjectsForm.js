import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadProject, createProject } from "../services/file-upload.service.project";
import "../Styling/Form.css"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function OnProjectsForm ({children}) {
    const [folder, setFolder] = useState ('');
    const [title, setTitle] = useState ('');
    const [postUrl, setPostUrl] = useState('');
    const { isLoggedIn, isLoading } = useContext (AuthContext);
    const navigate = useNavigate();

    if (isLoading) return <p>Loading ...</p>
    // this function handles the file upload
    const handleFileUpload = (e) => {
        const uploadData = new FormData();

        uploadData.append('postUrl', e.target.files[0]);

        // service
        uploadProject(uploadData)
              .then((response) => {
                setPostUrl(response.fileUrl);
              })
              .catch((error) => console.log('Error while uploading the file: ', error));
    };

    const handleFolderInput = (e) => setFolder (e.target.value);
    const handleTitleInput = (e) => setTitle (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        //service
        createProject({folder, title, postUrl})
           .then (() => {
                     setFolder('');
                     setTitle('');
                     navigate('/projects');
           })
           .catch((err) => console.log('Error while adding the new post', err));
    }


    if (isLoggedIn) {
    return (
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
                        type="file"
                        name="UploadPost"
                        onChange={handleFileUpload}
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

export default OnProjectsForm;