
import Product from './components/Product';
import Body from "./components/Body";
// import React, { startTransition } from 'react';
// import { useState } from 'react';
import Card from './components/Card';
import Boxes from './components/Boxes';
import Footer from './components/Footer';
import Medi from './components/Medi';
import Login from './components/Login';
// import {Route, Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from "./components/SignUp";

// import Header from './components/Header';
// import Movie from './components/Movie';
// import movies from './Movies.json';
// import Comp from './components/Comp';
// import Poster from './components/Poster';
import './App.css';

function App(){
  
  return(
      
      <Router>
       <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/signUp"element={<SignUp/>}/>
      
       </Routes>
       </Router>
      
     
        /* <Header/>
       <div className='main'>
       {
       movies.map((element,index) =>{
          return(
          <Movie 
          key={index}
          title={element.title}
          year={element.year}
          img={element.posterurl}
          genres={element.genres}
          rating={element.imdbRating}
         actors={element.actors}
          
          />
          )


        })
      
       }

       
    
     <div className="Swag">
     <Poster/>
    </div> 
    <Comp/> 
  
   <Signup/>  */
    
  );
}
function MainPage(){
  return(
    <div>
    <Product/>
    <Body/>
    <Card/>
    <Boxes/>
    <Medi/>
    <Footer/>
    {/* <Signup/> */}
    
    </div>

  )
}

export default App;

