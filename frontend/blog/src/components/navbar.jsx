import React, { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/navbar.css'
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogs');
        const uniqueCategories = [...new Set(response.data.map(blog => blog.type))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    // Redirect to the search results page with the search query
    navigate(`/blogs/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleCategoryChange = (selectedCategory) => {
    // Redirect to the category page for the selected category
    navigate(`/${encodeURIComponent(selectedCategory)}`);
  };

  return (
    <>
     <video className='background-video' autoPlay loop muted>
    <source src = "/blogsbg.mp4" type = "video/mp4"/>
</video>
    <nav>
     <div className='logo'><Link to="/blogs" className='homelink'>Blogsphere</Link></div>
     <div className='nav-content'>
     <div className='search'>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className='categories'>
            <select onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value=''>Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
     <div className='writebloglink'><Link to="/writeblog" className="link">Write a blog</Link></div>
     </div>
    </nav>
    </>
  );
};

export default NavBar;
 