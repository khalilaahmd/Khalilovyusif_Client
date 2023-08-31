import React, { Children } from "react";
import { useState } from "react";
import "../Styling/Form.css"
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function OnBlogForm({ addBlog, children }) { // Changed prop name to addBlog for clarity
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const API_URL = "http://localhost:5005";
    const { user } = useContext(AuthContext);


    if (isLoading) return <p>Loading ...</p>

    const handleURLInput = (e) => setUrl(e.target.value);
    const handleDateInput = (e) => setDate(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { url, date }; // Changed variable name for clarity

        const headers = {
            Authorization: `Bearer ${user.token}`,
          };
    
        console.log("submitted: ", newBlog);
        addBlog(newBlog); // Use the addBlog prop to send data to parent

        axios
            .post(`${API_URL}/api/blogs`, newBlog, headers)
            .then((response) => {
                console.log(response);
                // reset the state
                setUrl("");
                setDate("");
                setError("");
                addBlog.refreshBlogs();
            })
            .catch((error) => {
                  setError("An error occurred while adding the blog.");
                  console.log(error)
                 });
    };

    if (isLoggedIn) {
        return (
            <div className="container">
                <h1 className="title">Add a new Form: </h1>
                <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="label">Link: </label>
                    <input className="input"
                        type="url"
                        name="url"
                        value={url}
                        onChange={handleURLInput}
                    />
    
                    <label className="label">Date: </label>
                    <input className="input"
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleDateInput}
                    />
                </div>
                <label className="label">
                <button type="submit" className="button">Add a Blog</button>
                </label>
                </form>
            </div>
        );
    } else {
        return children
    }
  
}

export default OnBlogForm;