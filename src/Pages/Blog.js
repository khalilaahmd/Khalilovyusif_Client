import React, { useState, useEffect } from "react";
import OnBlogForm from "../Components/OnBlogFrom";
import Footer from "../Components/Footer";
import axios from "axios";
import "../Styling/blog.css";

const API_URL = process.env.REACT_APP_API_URL;

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = () => {
    axios
      .get(`${API_URL}/api/blogs`)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.log("Error fetching blogs: ", error));
  }

  useEffect(() => {
    getAllBlogs();
  }, []); 

  useEffect(() => {
    // Check if Instagram's script is already loaded
    const existingScript = document.getElementById('instagram-embed-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.id = 'instagram-embed-script';
      document.body.appendChild(script);
    } else {
      // If the script is already there, re-trigger the process function
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, [blogs]);

  return (
    <div className="BlogListPage">
      <OnBlogForm addBlog={getAllBlogs} />
      <div className="BlogTable">
        {blogs &&
          blogs.map((blog, index) => (
            <div key={index} className="BlogCard">
              <p>{blog.title}</p> {/* Render the title property */}
              <div dangerouslySetInnerHTML={{ __html: blog.embedCode }} />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;