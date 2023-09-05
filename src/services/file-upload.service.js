import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: API_URL,
});

const errorHandler = (error) => {
    throw error;
};

const getArtworks = () => {
    return service
          .get("/artworks")
          .then((res) => res.data)
          .catch(errorHandler);
};

const uploadImage = (file) => {
    return service
          .post("/upload", file)
          .then((res) => res.data)
          .catch(errorHandler);
};

const createPost = (newPost) => {
    console.log("New post in service: ", newPost);
    return service
           .post("/artworks", newPost)
           .then((res) => res.data)
           .catch(errorHandler);
};

export {
    getArtworks,
    uploadImage,
    createPost,
};
export default service;