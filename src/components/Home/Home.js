import React from "react";
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';
import Footer from '../../components/Footer/Footer';

const Home = () =>{
  return (
    <div id="main-area">
      <span><Posts/><Sidebar/></span>
      <div><Footer/></div>
    </div>
  );
}

export default Home;