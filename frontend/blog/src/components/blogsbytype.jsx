import React, { useEffect, useState,useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/blogs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogsByType = () => {
  const [blogs, setBlogs] = useState([]);
  const {type} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${type}`, { baseURL: 'http://localhost:3000' });
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
        
          <div className='blogtypes'>
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog._id}`} className='linker'>
          <div key={blog.id} className='blogtype' style={{ position: 'relative' }}>
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
          </Link>
        ))}
      </div> 
    );
  };

  export default BlogsByType;

