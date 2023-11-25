import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home';
 import BlogList from './components/blogs';
 import BlogDetail from './components/blogsbyid';
 import BlogsByType from './components/blogsbytype';
 import SearchResults from './components/searchresults';
import WriteBlogForm from './components/writeblogs';
import NavBar from './components/navbar';
 
const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={
        <>
        <Home />
        </>
      }/>
        <Route path="/blogs" element={
          <>
        <NavBar /> 
        <BlogList />
        </>
        } />
        <Route path="/writeblog" element={
           <>
           <NavBar /> 
        <WriteBlogForm />
        </>
      } 
        />
        <Route path="/blogs/:id" element={
         <>
         <NavBar /> 
         <BlogDetail />
         </>} />
        <Route path="/blogs/search" element={
           <>
           <NavBar /> 
        <SearchResults />
        </>} />
        <Route path="/:type" element={ <>
        <NavBar /> 
        <BlogsByType />
        </>} />
      </Routes>
    </Router> 
</>
  );
};
 

export default App;
