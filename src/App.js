import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import './App.css';
import {Modal} from './components/Modal/Modal'
import { Main } from './components/Main/Main';
import { Review } from './components/Review/Review';
import logo from './logo.svg';
import { Footer } from './components/Footer/Footer';
import { Quiz } from './components/Quiz/Quiz';
import {Blog} from './components/Blog/Blog';

function App() {
  return (
    <>
     
    <header>
    <a class = "menu" href = "/"  >Main</a>
    <a class = "menu" href = "/login">Регистрация</a> 
    <a class = "menu" href = "/review">Отзывы</a>
    <a class = "menu" href = "/quiz">Квиз</a>
    <a class = "menu" href = "/blog">Блог</a>
    </header>
    <main>
          
        <Routes>
           <Route path ="/" element = {<Main/>}/>
           <Route path ="/login" element = {<Modal/>}/>
           <Route path ="/review" element = {<Review/>}/>
           <Route path ="/quiz" element = {<Quiz/>}/>
           <Route path ="/blog" element = {<Blog/>}/>
        </Routes>
    
    </main>
    <Footer year={new Date().getFullYear()}/>
    
    </>
  );
}

export default App;
