import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>{
  const title = "My personal blog"
  return (
    <div id="header">
      <div id="logo">
        <h1>{title}</h1>
      </div>
      <div id="menu">
        <span><Link to={"/"}> Home</Link></span> 
        <span><Link to={"/about"}> Sobre</Link></span> 
        <span><Link to={"/description"}> Descrição</Link></span> 
      </div>
    </div>
  );
}

export default NavBar;