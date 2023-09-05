import React, { useState, useEffect, useContext } from "react";
import OnBiographyForm from "../Components/OnBiography";
import Footer from "../Components/Footer";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import '../Styling/Biography.css';

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5005";

function Biography() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const [ updateBiographyContent, setUpdateBiographyContent] = useState();
  const [ editingBiography, setEditingBiography ] = useState(null);

  const handleUpdateBiographyContent = (e) => setUpdateBiographyContent(e.target.value);

  const [biographys, setBiography] = useState([]);

  const getBiography = () => {
    axios
      .get(`${API_URL}/api/biography`)
      .then((response) => setBiography(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getBiography();
  }, [isLoggedIn]);
   
  const deleteBiography = (biographyId) => {
    axios
       .delete(`${API_URL}/api/biography/${biographyId}`)
       .then(() => {
        const updatedBiographies = biographys.filter(
            (biography) => biography._id !== biographyId
         );
         setBiography(updatedBiographies);
         // To refresh page
         window.location.reload();
       })
       .catch((error) => console.log(error))
  };

  const updateBiography = (biographyId, updatedContent) => {
    axios
       .put(`${API_URL}/api/biography/${biographyId}`, { biographyText: updatedContent})
       .then(() => {
        console.log("Biography updated successfully");
        const updateBiographies = biographys.map(
            (biography) => biography._id !== biographyId ? { ...biography, biographyText: updatedContent} : biography
        );
        setBiography(updateBiographies);
        // To refresh page
        window.location.reload();
        setEditingBiography(null);
        setUpdateBiographyContent('');
       })
       .catch((error) => console.log(error))
  };

  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn) {
    return (
        <div className="BiographyPage">
        <h1 className="pageTitle">Biography Page</h1>
        <OnBiographyForm addBiography={getBiography} />

        <div className="biographyList">
  {biographys &&
    biographys.map((biography) => (
      <div key={biography._id} className="biographyItem">
        {editingBiography === biography._id ? (
          <div>
            <textarea
              value={updateBiographyContent || biography.biographyText}
              onChange={handleUpdateBiographyContent}
            />
            <button onClick={() => updateBiography(biography._id, updateBiographyContent)} className="btn-update">
              Save
            </button>
            <button onClick={() => setEditingBiography(null)} className="btn-cancel">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>{biography.biographyText}</p>
            <button onClick={() => deleteBiography(biography._id)} className="btn-delete">Delete</button>
            <button onClick={() => setEditingBiography(biography._id)} className="btn-update">
              Update
            </button>
          </div>
        )}
      </div>
    ))}
</div>
        <Footer />
      </div>
    )} else {
    return (
      <div className="BiographyPage">
        <h1 className="pageTitle">Biography</h1>
        <OnBiographyForm addBiography={getBiography} />

        <div className="biographyList">
          {biographys &&
            biographys.map((biography) => (
              <div key={biography._id} className="biographyItem">
                <p>{biography.biographyText}</p>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Biography;