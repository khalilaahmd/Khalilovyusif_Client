import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImage, createPost } from "../services/file-upload.service";
import "../Styling/Form.css"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function OnArtworksForm ({children}) {
    const [selectFolder, setSelectFolder] = useState ('');
    const [postTitle, setPostTitle] = useState ('');
    const [description, setDescription] = useState ('');
    const [location, setLocation] = useState ('');
    const [collaboration, setCollaboration] = useState ('');
    const [photographer, setPhotographer] = useState ('');
    const [postUrl, setPostUrl] = useState("");
    const { isLoggedIn, isLoading } = useContext (AuthContext);

    const navigate = useNavigate(); 

    if (isLoading) return <p>Loading ...</p>

    // This function handles the file upload
    const handleFileUpload = (e) => {
        // console.log("the file to be uploaded is: ",e.target.files[0]);

        const uploadData = new FormData();

        uploadData.append("postUrl", e.target.files[0]);

        // service
        uploadImage(uploadData)
            .then((response) => {
                // console.log("response is: ", response);
                setPostUrl(response.fileUrl);
            })
            .catch((error) => console.log("Error while uploading the file: ", error));

    };

    const handleSelectFolderInput = (e) => setSelectFolder (e.target.value);
    const handlePostTitleInput = (e) => setPostTitle (e.target.value);
    const handleDescriptionInput = (e) => setDescription (e.target.value);
    const handleLocationInput = (e) => setLocation (e.target.value);
    const handleCollaborationInput = (e) => setCollaboration (e.target.value);
    const handlePhotographerInput = (e) => setPhotographer (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        // service
        createPost({postUrl, selectFolder, postTitle, description, location, collaboration, photographer})
             .then (() => {
                // console.log("added new movie: ", res);
                                // Reset the state
                                setSelectFolder("");
                                setPostTitle("");
                                setDescription("");
                                setLocation("");
                                setCollaboration("");
                                setPhotographer("");
                                navigate("/artworks");
             })
             .catch((err) => console.log("Error while adding the new post: ", err));
    };
    
    if (isLoggedIn) {

    return (
        <div className="container">
        <h1 className="title">Add a new Post</h1>
        <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
            <label className="label">Upload a new post</label>
            <input
                type="file"
                name="UploadPost"
                onChange={handleFileUpload}
                />

            <label className="label">Select Folder</label>
            <select 
                name="Select Folder"
                value={selectFolder}
                onChange={handleSelectFolderInput}
                >
                    <option value={'Projects'}>projects</option>
                    <option value={'flowers'}>flowers</option>
                    <option value={'SpecialEvents'}>Special Events</option>
                    <option value={'ArtObjects'}>Art Objects</option>
                    <option value={'bouquets'}>Bouquets</option>
                    <option value={'ChristmasNewYear'}>Christmas & NewYear designs</option>
                    <option value={'Boutonniers and Gifts'}>Boutonniers and Gifts</option>
                </select>

            <label className="label">Title</label>
            <input className="input"
                 type="text"
                 name="Title"
                 value={postTitle}
                 onChange={handlePostTitleInput}
                 />

            <label className="label">Description</label>
            <input className="input"
                 type="text"
                 name="description"
                 value={description}
                 onChange={handleDescriptionInput}
                 />

            <label className="label">Location</label>
            <input className="input"
                type="text"
                name="location"
                value={location}
                onChange={handleLocationInput}
                />

            <label className="label">Collaboration</label>
            <input className="input"
                type="text"
                name="collaboration"
                value={collaboration}
                onChange={handleCollaborationInput}
                />

            <label className="label">Photographer</label>
            <input className="input"
                type="text"
                name="Photographer"
                value={photographer}
                onChange={handlePhotographerInput}
                />

        </div>
        <label className="label">
            <button className="button" type="submit">Post</button>
        </label>
        </form>
        </div>
    );
    } else {
        return children;
    }
}

export default OnArtworksForm;