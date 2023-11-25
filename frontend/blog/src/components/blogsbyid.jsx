import React, { useEffect, useState,useRef } from 'react';
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';
import '../styles/blogsbyid.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const BlogDetail = ({ wordsPerParagraph = 50 }) => {
    
        const [blog, setBlog] = useState([]);
        const { id } = useParams();
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(`/blogs/${id}`, { baseURL: 'http://localhost:3000' });
              setBlog(response.data);
              console.log(response.data)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);

        if (!blog || !blog.body) {
            return null;
          }
        const formatBody = (body) => {
            const words = body.split(' ');
            const paragraphs = [];
        
            let currentParagraph = '';
           
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
  
        if (currentParagraph.split(' ').length < wordsPerParagraph && !word.endsWith('.')) {
          currentParagraph += (currentParagraph.length > 0 ? ' ' : '') + word;
        } else {
          paragraphs.push(currentParagraph);
          currentParagraph = word;
        }
      }
  
      // Add the last paragraph
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph);
      }
  
      return paragraphs;
    };
        
    return(
        <div className='blogdetail' style={{ position: 'relative' }}>
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
            <div className='blog-content' style = {{position: 'relative'}}>
      {formatBody(blog.body).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
          
        </div>
    )
   };


export default BlogDetail;