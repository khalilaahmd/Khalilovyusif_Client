import React, { useState, useEffect, useContext } from "react";
import OnArtworksForm from "../Components/OnArtworksForm";
import Footer from "../Components/Footer";
import { getArtworks } from "../services/file-upload.service";
import "../Styling/Artworks.css";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Artworks() {
  const [artworks, setArtworks] = useState([]);
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const [ updateArtworkContent, setUpdateArtworkContent] = useState("");
  const [ editingArtwork, setEditingArtwork ] = useState(null);

  const handleUpdateArtworkContent = (e) => setUpdateArtworkContent(e.target.value);

  useEffect(() => {
    // service
    getArtworks()
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => console.log(error));
  }, [isLoggedIn]);

  const deleteArtwork = (artworksId) => {
    axios
       .delete(`${API_URL}/api/artworks/${artworksId}`)
       .then(() => {
        const updatedArtworks = artworks.filter((artwork) => artwork._id !== artworksId
        );
        setArtworks(updatedArtworks);
        window.location.reload();
       })
       .catch((error) => console.log(error))
  };

  const updateArtwork = (artworksId, updatedContent) => {
    axios
        .put(`${API_URL}/api/artworks/${artworksId}`, { artworkText: updatedContent})
        .then(() => {
          console.log("Artwork updated successfully");
          const updateArtworks = artworks.map(
            (artwork) => artwork._id !== artworksId ? { ...artwork, artworkText: updatedContent} : artwork
          );
          setArtworks(updateArtworks);
          window.location.reload();
          setEditingArtwork(null);
          setUpdateArtworkContent('');
        })
        .catch((error) => console.log(error))
  };

  if (isLoading) return <p>Loading ...</p>
  if (isLoggedIn) {
    return (
      <div className="ArtworkListPage">
      <OnArtworksForm addArtwork={setArtworks} />
      <div className="ArtworkContainer">
          {artworks &&
            artworks.map((artwork) => (
              <div key={artwork._id} className="ArtworkCard">
              {editingArtwork === artwork._id ? (
                <div>
                <textarea
                    value={updateArtworkContent || artwork.artworkText}
                    onChange={handleUpdateArtworkContent}
                    />
                <button onClick={() => updateArtwork(artwork._id, updateArtworkContent)} className="btn-update">Save</button>
                <button onClick={() => setEditingArtwork(null)} className="btn-cancel">Cancel</button>
                </div>
              ) : (
                <div>
                  <img src={artwork.postUrl} alt={artwork.postTitle} />
                  <h2>{artwork.postTitle}</h2>
                  <p className="Description">{artwork.description}</p>
                  <button onClick={() => deleteArtwork(artwork._id)} className="btn-delete">Delete</button>
                  <button onClick={() => setEditingArtwork(artwork._id)} className="btn-update">Update</button>
                </div>
              )}
              </div>
            ))}
      </div>
      <Footer />
    </div>
    )
  }

  return (
    <div className="ArtworkListPage">
      <OnArtworksForm addArtwork={setArtworks} />
      <div className="ArtworkContainer">
          {artworks &&
            artworks.map((artwork) => (
              <div key={artwork._id} className="ArtworkCard">
                <img src={artwork.postUrl} alt={artwork.postTitle} />
                <h2>{artwork.postTitle}</h2>
                <p className="Description">{artwork.description}</p>
              </div>
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default Artworks;