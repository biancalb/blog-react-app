import React from "react";
import './Author.css';
import AuthorImage from '../../../assets/images/image1.png'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const About = () =>{
  const authorDescription = "Ultrices dui sapien eget mi proin sed libero.Ut sem viverra aliquet eget sit amet tellus. Massa tincidunt nunc pulvinar sapien et ligula."
  
  return (
    <div id="about">
      <div id="aboutAuthor">
        <div>
          <img src={AuthorImage} alt="Author"></img>
        </div>
        <p>{authorDescription}</p>
        <div className="icons">
          <a href="https://www.instagram.com/"><FaInstagram/></a>
          <a href="https://www.youtube.com/?hl=pt&gl=BR"><FaYoutube/></a>
          <a href="https://pt-br.facebook.com/"><FaFacebook/></a>
        </div>
      </div>
    </div>
  );
}


export default About;