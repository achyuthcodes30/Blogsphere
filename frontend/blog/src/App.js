import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home';
 import BlogList from './components/blogs';
/*import WriteBlogForm from './components/WriteBlogForm';
import BlogDetail from './components/BlogDetail';
*/
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
 
const SearchResults = () => {
  
  return <div className='blogdiv'>Search Results</div>;
};
 
const BlogsByType = () => {
  
  return <div className='blogdiv' style={{position: "relative" , marginTop: "5%"}}>Blogs by Type</div>;
};
 
 
const BlogDetail = () => {
 return <div className='blogdiv' style={{position: "relative" , marginTop: "5%"}}>Blog details</div>;
};
 
const WriteBlogForm = () => {
  
  return <div className='blogdiv' style={{position: "relative" , marginTop: "5%"}}>Blog Form</div>;
};
 
export default App;
