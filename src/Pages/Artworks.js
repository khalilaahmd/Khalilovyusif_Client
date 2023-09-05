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

  useEffect(() => {
    // service
    getArtworks()
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => console.log(error));
  }, [isLoggedIn]);

  const deleteArtwork = (artworkId) => {
    axios
       .delete(`${API_URL}/api/artworks/${artworkId}`)
       .then(() => {
        const updatedArtworks = artworks.filter((artwork) => artwork._id !== artworkId
        );
        setArtworks(updatedArtworks);
        window.location.reload();
       })
       .catch((error) => console.log(error))
  };

  if (isLoading) return <p>Loading ...</p>
  if (isLoggedIn) {
    return (
      <div className="ArtworkListPage">
      <OnArtworksForm addArtwork={setArtworks} />
      <div className="ArtworkContainer">
        <div className="ArtworkCardContainer">
          {artworks &&
            artworks.map((artwork) => (
              <div key={artwork._id} className="ArtworkCard">
                <img src={artwork.postUrl} alt={artwork.postTitle} />
                <h2>{artwork.postTitle}</h2>
                <p>{artwork.description}</p>
                <div>
                  <button onClick={() => deleteArtwork(artwork._id)} className="btn-delete">Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
    )
  }

  return (
    <div className="ArtworkListPage">
      <OnArtworksForm addArtwork={setArtworks} />
      <div className="ArtworkContainer">
        <div className="ArtworkCardContainer">
          {artworks &&
            artworks.map((artwork) => (
              <div key={artwork._id} className="ArtworkCard">
                <img src={artwork.postUrl} alt={artwork.postTitle} />
                <h2>{artwork.postTitle}</h2>
                <p>{artwork.description}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Artworks;