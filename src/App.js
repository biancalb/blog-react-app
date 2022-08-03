import './App.css';
import React from "react";
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Description from './components/Description/Description';
import FullPost from './components/Posts/FullPost/FullPost';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/description" element={<Description />}></Route>
          <Route path="/post/:id" element={<FullPost />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;