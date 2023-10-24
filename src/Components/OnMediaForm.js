import React from "react";
import { useState } from 'react';
import "../Styling/Form.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function OnMediaForm ({addMedia, children}) {
    const [date, setDate] = useState ('');
    const [title, setTitle] = useState ('');
    const [url, setUrl] = useState ('');
    const [mediaPicUrl, setMediaPicUrl] = useState ('');
    const {isLoggedIn, IsLoading} = useContext(AuthContext);

    if (IsLoading) return <p>Loading ...</p>

    const handleDateInput = (e) => setDate (e.target.value);
    const handleTitleInput = (e) => setTitle (e.target.value);
    const handleMediaPicUrl = (e) => setMediaPicUrl (e.target.value);
    const handleURLInput = (e) => setUrl (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMedia = {date, title, url, mediaPicUrl};

        console.log("submitted: ", newMedia);
        addMedia(newMedia);

        axios
            .post(`${API_URL}/api/media`, newMedia)
            .then((response) => {
                // Reset the state
                setUrl('');
                setTitle('');
                setDate('');
                setMediaPicUrl('');

                addMedia.refreshMedia();
            })
            .catch((error)=> console.log(error));

    };

    if (isLoggedIn) {
    return (
        <div className="container">
        <h1 className="title">Add a new Media</h1>
        <form onSubmit={handleSubmit}>
        <div className="inputGroup">
           <label className="label">Date: </label>
           <input className="input"
                type="date"
                name="date"
                value={date}
                onChange={handleDateInput}
                />

            <label className="label">Title & Description: </label>
            <textarea className="input"
                type="text"
                name="title"
                value={title}
                onChange={handleTitleInput}
                />

            <label className="label">Link: </label>
            <input className="input"
                 type="url"
                 name="url"
                 value={url}
                 onChange={handleURLInput}
                 />

            <label className="label">Media Pic Link: </label>
            <input className="input"
                 type="url"
                 name="MediaUrl"
                 value={mediaPicUrl}
                 onChange={handleMediaPicUrl}
                 />

            </div>
            <label className="label">
            <button type="submit" className="button">Add a Media</button>
            </label>
            </form>
        </div>
    );
    } else {
        return children;
    }
}

export default OnMediaForm;