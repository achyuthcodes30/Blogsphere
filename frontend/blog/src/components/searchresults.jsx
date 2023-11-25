import React, { useEffect, useState,useRef } from 'react';
import { Link , useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import '../styles/searchresults.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const SearchResults = () => {
    const [blogs, setBlogs] = useState([]);
    const location = useLocation();
    
      
        useEffect(() => {
          const fetchData = async () => {
            try {
                let response;
               if (location.search.includes('query')) {
               const queryParams = new URLSearchParams(location.search);
               const query = queryParams.get('query');
              response = await axios.get(`/blogs/search?query=${query}`, { baseURL: 'http://localhost:3000' });
              setBlogs(response.data);
              console.log(response.data)
            }
         } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, [location.search]);
  
    return(
        <div className='blogsearches'>
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.item._id}`} className='linker'>
          <div className='searchedblog' style={{ position: 'relative'}}>
            <h2>{blog.item.title}</h2>
            <p>Type: {blog.item.type}</p>
            <p>Author: {blog.item.author}</p>
            <img
              style={{ position: 'relative' }}
              src={`http://localhost:3000/uploads/${blog.item.image}`}
              alt={blog.title}
              onLoad={() => console.log(`Image loaded: ${blog.item.image}`)}
              onError={() => console.error(`Error loading image: ${blog.item.image}`)}
            />
          </div>
          </Link>
        ))}
</div> 
    )
  };

export default SearchResults;
