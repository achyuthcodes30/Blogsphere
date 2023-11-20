import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'

 const Home = () => {
    return(
        <>
        <video className='home-video' autoPlay loop muted>
        <source src = "/earth.mp4" type = "video/mp4"/>
    </video>
        <h1 className='home-content'>Welcome to Blogsphere</h1>
        <Link to="/blogs"><button className='bloglink'>Explore</button></Link>
    </>
    )
}
export default Home;