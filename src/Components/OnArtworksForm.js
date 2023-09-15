import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImage, createPost } from "../services/file-upload.service.artwork";
import "../Styling/Form.css"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function OnArtworksForm ({children}) {
    const [postTitle, setPostTitle] = useState ('');
    const [description, setDescription] = useState ('');
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

    const handlePostTitleInput = (e) => setPostTitle (e.target.value);
    const handleDescriptionInput = (e) => setDescription (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        // service
        createPost({postUrl, postTitle, description})
             .then (() => {
                // console.log("added new movie: ", res);
                                // Reset the state
                                setPostTitle("");
                                setDescription("");
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

            <label className="label">Title</label>
            <input className="input"
                 type="text"
                 name="Title"
                 value={postTitle}
                 onChange={handlePostTitleInput}
                 />

            <label className="label">Description</label>
            <textarea className="input"
                 type="textarea"
                 name="description"
                 value={description}
                 onChange={handleDescriptionInput}
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