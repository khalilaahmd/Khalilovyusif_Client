import React, { useState, useEffect } from "react";
import OnArtworksForm from "../Components/OnArtworksForm";
import Footer from "../Components/Footer";
import { getArtworks } from "../services/file-upload.service";
import "../Styling/Artworks.css";

function Artworks() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // service
    getArtworks()
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ArtworkListPage">
      <OnArtworksForm addArtwork={setArtworks} />
      <div className="ArtworkContainer">
        <div className="ArtworkCardContainer">
          {artworks &&
            artworks.map((artwork) => (
              <div key={artwork._id} className="ArtworkCard">
                <img src={artwork.postUrl} alt={artwork.postTitle} />
                <p>{artwork.selectFolder}</p>
                <h2>{artwork.postTitle}</h2>
                <p>{artwork.description}</p>
                <p>{artwork.location}</p>
                <p>{artwork.collaboration}</p>
                <p>{artwork.photographer}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Artworks;