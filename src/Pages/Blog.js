import React, { useState, useEffect } from "react";
import OnBlogForm from "../Components/OnBlogFrom";
import Footer from "../Components/Footer";
import axios from "axios";
import "../Styling/blog.css";

const API_URL = process.env.REACT_APP_API_URL;
//const API_URL = "http://localhost:5005";

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
<div className="ArtworkListPage">
    <OnBlogForm addBlog={getAllBlogs} />
    <table className="BlogTable">
        <tbody>
            {blogs && Array.from({ length: Math.ceil(blogs.length / 4) }).map((_, index) => (
                <tr key={index}>
                    <td>
                        <div className="BlogCard">
                            <p>{blogs[4 * index]?.date}</p>
                            <div dangerouslySetInnerHTML={{ __html: blogs[4 * index]?.embedCode }} />
                        </div>
                    </td>
                    <td>
                        <div className="BlogCard">
                            <p>{blogs[4 * index + 1]?.date}</p>
                            <div dangerouslySetInnerHTML={{ __html: blogs[4 * index + 1]?.embedCode }} />
                        </div>
                    </td>
                    <td>
                        <div className="BlogCard">
                            <p>{blogs[4 * index + 2]?.date}</p>
                            <div dangerouslySetInnerHTML={{ __html: blogs[4 * index + 2]?.embedCode }} />
                        </div>
                    </td>
                    <td>
                        <div className="BlogCard">
                            <p>{blogs[4 * index + 3]?.date}</p>
                            <div dangerouslySetInnerHTML={{ __html: blogs[4 * index + 3]?.embedCode }} />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    <Footer />
</div>
  );
}

export default Blog;