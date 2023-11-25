import React, { useState} from 'react';
import axios from 'axios';
import '../styles/writeblog.css'
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    type: '',
    body: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('title', formData.title);
    postData.append('author', formData.author);
    postData.append('type', formData.type);
    postData.append('body', formData.body);
    postData.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:3000/blogs', postData);
      console.log('Blog post created:', response.data);
      navigate(`/blogs/${response.data._id}`);
      // You can redirect or update the UI as needed after successful submission
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Handle errors, display an error message, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

      <label>Author:</label>
      <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />

      <label>Type:</label>
      <input type="text" name="type" value={formData.type} onChange={handleInputChange} required />

      <label>Body:</label>
      <textarea name="body" value={formData.body} onChange={handleInputChange} required />

      <label>Image:</label>
      <input type="file" name="image" onChange={handleFileChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
