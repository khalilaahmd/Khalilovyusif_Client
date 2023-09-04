import { useState } from "react";
import "../Styling/Form.css"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5005";

function OnBiographyForm({ addBiography, children }) { 
    const [biographyText, setBiographyText] = useState('');
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);


    if (isLoading) return <p>Loading ...</p>

    const handleBiographyInput = (e) => setBiographyText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBiography = { biographyText }; 

        const headers = {
            Authorization: `Bearer ${user.token}`,
          };
    
        console.log("submitted: ", newBiography);
        addBiography(newBiography); 

        axios
            .post(`${API_URL}/api/biography`, newBiography, headers)
            .then((response) => {
                console.log(response);
                // reset the state
                setBiographyText("");
                setError(null);
                addBiography.refreshBlogs();
            })
            .catch((error) => {
                  setError("An error occurred while adding the biography.");
                  console.log(error)
                 });
    };

    if (isLoggedIn) {
        return (
            <div className="container">
                <h1 className="title">Add a Biography: </h1>
                <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="label">Your Biography Text: </label>
                    <textarea className="input"
                        name="biographyText"
                        value={biographyText}
                        onChange={handleBiographyInput}
                        placeholder= "Write your biography."
                    />
                </div>
                <label className="label">
                <button type="submit" className="button">Add a Biography</button>
                </label>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        );
    } else {
        return children
    }
  
}

export default OnBiographyForm;