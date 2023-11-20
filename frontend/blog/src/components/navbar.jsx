import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/navbar.css'
const NavBar = () => {
  return (
    <>
     <video className='background-video' autoPlay loop muted>
    <source src = "/blogsbg.mp4" type = "video/mp4"/>
</video>
    <nav>
     <div className='logo'><Link to="/blogs" className='homelink'>Blogsphere</Link></div>
     <div className='nav-content'>
     <div><Link to="/writeblog" className="link">Write a blog</Link></div>
     <div><Link to="/test" className="link">Test</Link></div>
     </div>
    </nav>
    </>
  );
};

export default NavBar;
 