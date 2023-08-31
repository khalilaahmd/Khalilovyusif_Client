import React, { useState, useContext, useEffect } from "react";
import OnBlogForm from "../Components/OnBlogFrom";
import Footer from "../Components/Footer";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  const getAllBlogs = () => {
    // Check if the user is authenticated and has a token
    if (user && user.token) {
      const headers = {
        Authorization: `Bearer ${user.token}`,
      };

      axios
        .get(`${API_URL}/api/blogs`, {headers})
        .then((response) => setBlogs(response.data))
        .catch((error) => console.error("Error fetching blogs: ", error));
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="ArtworkListPage">
      <OnBlogForm addBlog={getAllBlogs} />
      {blogs &&
        blogs.map((blog) => (
          <div key={blog._id}>
            <p>{blog.date}</p>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default Blog;