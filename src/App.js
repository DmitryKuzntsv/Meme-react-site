import React, { useState } from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import './App.css';
import {Modal} from './components/Modal/Modal'
import { Main } from './components/Main/Main';
import { Review } from './components/Review/Review';
import logo from './logo.svg';
import { Footer } from './components/Footer/Footer';
import { Quiz } from './components/Quiz/Quiz';
import {Blog} from './components/Blog/Blog';
import {Header} from './components/Header/Header';
import {Navigate} from 'react-router-dom';
import {Gallery} from './components/Gallery/Gallery'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') return true
    return false
  })
  const [isAdmin, setIsAdmin] = useState(() => {
    if (localStorage.getItem('isAdmin') === 'true') return true
    return false
  })
  const [userName, setUserName] = useState((localStorage.getItem('userName') !='') )
  return (
    <>
    <div className='App'/>

      
     

    <main>
    <Header
      props
      isAdmin = {isAdmin}
      userName = {userName}
      setIsLoggedIn = {setIsLoggedIn}
      isLoggedIn = {isLoggedIn}/>
        <Routes>
           <Route path ="/" element = {<Main/>}/>


           <Route path='/login' element = {!isLoggedIn?<Modal
            props
            setIsAdmin={setIsAdmin}
            setUserName = {setUserName}
            setIsLoggedIn ={setIsLoggedIn} />
            :<Navigate to="/main"/>}/>


           <Route path ="/review" element = {<Review/>}/>
           <Route path ="/quiz" element = {<Quiz/>}/>
           <Route path ="/blog" element = {<Blog/>}/>
           <Route path ="/gallery" element = {<Gallery/>}/>
           </Routes>
    
    </main>
    <Footer year={new Date().getFullYear()}/>
    
    </>
  );
}

export default App;
