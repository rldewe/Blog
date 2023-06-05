import logo from './logo.svg';
import './App.css';
import React from 'react';

import ReactDOM from "react-dom/client";
import {Link,Routes,Route} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
import BP from './pages/Blogpage';


function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/connect" element={<ContactForm/>}/>
      <Route path="/blogs" element={<BP/>}/>

    
    </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
