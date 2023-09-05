import { useState } from "react";
import "../Styling/Form.css"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5005";

function OnBlogForm({ addBlog, children }) { // Changed prop name to addBlog for clarity
    const [embedCode, setEmbed] = useState('');
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    const [setError] = useState(null);
    // const API_URL = "http://localhost:5005";
    const { user } = useContext(AuthContext);


    if (isLoading) return <p>Loading ...</p>

    const handleEmbedInput = (e) => setEmbed(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { embedCode }; 

        const headers = {
            Authorization: `Bearer ${user.token}`,
          };
    
        console.log("submitted: ", newBlog);
        addBlog(newBlog); 

        axios
            .post(`${API_URL}/api/blogs`, newBlog, headers)
            .then((response) => {
                console.log(response);
                // reset the state
                setEmbed("");
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
                    <label className="label">Embed Code: </label>
                    <textarea className="input"
                        name="embedCode"
                        value={embedCode}
                        onChange={handleEmbedInput}
                        rows="4"
                        placeholder= "Paste the instagram embed code here."
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