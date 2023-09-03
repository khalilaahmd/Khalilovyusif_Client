import React, { useState } from "react";
import OnMediaForm from "../Components/OnMediaForm";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5005";

function Media () {
    const [ medias, setMedia ] = useState([]);

    const getAllMedia = () => {
        axios 
           .get(`${API_URL}/api/media`)
           .then((response) => setMedia(response.data))
           .catch((error) => console.log(error));
    }
           useEffect(() => {
            getAllMedia();
           }, []);

    return (
        <div className="ArtworkListPage">
            <OnMediaForm addMedia={getAllMedia} />

            {medias &&
                 medias.map((media) => (
                <div key={media._id}>
                <p>{media.date}</p>
                <p>{media.title}</p>
                <p>{media.url}</p>
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default Media;