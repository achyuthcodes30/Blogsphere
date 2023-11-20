import React, { useEffect, useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/blogs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/blogs', { baseURL: 'http://localhost:3000' });
        setBlogs(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
    {/*useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
          })
          AOS.refresh();
      }, []); */}
    return(
        <div className='blogpage'>
          <div className='blog-div'>
        {blogs.map((blog) => (
          <div key={blog.id} className='blog' style={{ position: 'relative' }}>
            <h2>{blog.title}</h2>
            <p>Type: {blog.type}</p>
            <p>Author: {blog.author}</p>
            <img
              style={{ position: 'relative' }}
              src={`http://localhost:3000/uploads/${blog.image}`}
              alt={blog.title}
              onLoad={() => console.log(`Image loaded: ${blog.image}`)}
              onError={() => console.error(`Error loading image: ${blog.image}`)}
            />
          </div>
        ))}
      </div> 
    </div>
    );
  };

  export default BlogList;
