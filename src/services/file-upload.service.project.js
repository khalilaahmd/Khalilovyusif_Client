import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: API_URL,
});

const errorHandler = (error) => {
    throw error;
};

const getProjects = () => {
    return service
          .get("/api/projects")
          .then((res) => res.data)
          .catch(errorHandler);
};

const uploadProject = (file) => {
    return service
          .post("/api/uploadProject", file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => res.data)
          .catch(errorHandler);
};

const createProject = (newPost) => {
    console.log("New project in service: ", newPost);
    return service
           .post("/api/projects", newPost)
           .then((res) => res.data)
           .catch(errorHandler);
};

const getChristmasDesigns = () => {
    return service
          .get("/api/christmasDesigns")
          .then((res) => res.data)
          .catch(errorHandler);
};

const getArtProjects = () => {
    return service
         .get("/api/artProjects")
         .then((res) => res.data)
         .catch(errorHandler);
};

const getSpecialEvents = () => {
    return service
         .get('/api/specialEvents')
         .then((res) => res.data)
         .catch(errorHandler)
};

const getBoutonniersAndGifts = () => {
    return service
         .get('/api/boutonniersAndGifts')
         .then((res) => res.data)
         .catch(errorHandler)
};

const getFlowers = () => {
    return service
         .get('/api/flowers')
         .then((res) => res.data)
         .catch(errorHandler)
};

const getBouquets = () => {
    return service
         .get('/api/bouquets')
         .then((res) => res.data)
         .catch(errorHandler)
};

export {
    getProjects,
    uploadProject,
    createProject,
    getChristmasDesigns,
    getArtProjects,
    getSpecialEvents,
    getBoutonniersAndGifts,
    getFlowers,
    getBouquets,

};
export default service;