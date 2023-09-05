import React, { useContext, useState } from "react";
import OnMediaForm from "../Components/OnMediaForm";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import "../Styling/media.css";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5005";

function Media () {
    const [ medias, setMedia ] = useState([]);
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    const getAllMedia = () => {
        axios 
           .get(`${API_URL}/api/media`)
           .then((response) => setMedia(response.data))
           .catch((error) => console.log(error));
    }
           useEffect(() => {
            getAllMedia();
           }, [isLoggedIn]);
    
    const deleteMedia = (mediaId) => {
        axios
            .delete(`${API_URL}/api/media/${mediaId}`)
            .then(() => {
                const updatedMedias = medias.filter(
                    (media) => media._id !== mediaId
                );
                setMedia(updatedMedias);
                // To refresh page
                window.location.reload();
            })
            .catch((error) => console.log(error))
    };

    if (isLoading) return <p>Loading ...</p>;

    if (isLoggedIn) {
        return (
            <div className="MediaListPage">
            <OnMediaForm addMedia={getAllMedia} />

            <table className="mediaTable">
            <tbody>
                    {medias.map((media) => (
                        <tr key={media._id} className="mediaItem">
                            <td className="mediaDate">{media.date}</td>
                            <td className="mediaTitle">{media.title}</td>
                            <td className="mediaUrl">
                                <a href={media.url} target="_blank" rel="noopener noreferrer">
                                    <img src={media.mediaPicUrl} alt={media.title} />
                                </a>
                            </td>
                            <td>
                                <button onClick={() => deleteMedia(media._id)} className="btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            <Footer />
        </div>
    )
    }

    return (
        <div className="ArtworkListPage">
            <OnMediaForm addMedia={getAllMedia} />

            <table className="mediaTable">
                <tbody>
                {medias.map((media) => (
                        <tr key={media._id} className="mediaItem">
                            <td className="mediaDate">{media.date}</td>
                            <td className="mediaTitle">{media.title}</td>
                            <td className="mediaUrl">
                                <a href={media.url} target="_blank" rel="noopener noreferrer">
                                    <img src={media.mediaPicUrl} alt={media.title} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
}

export default Media;