import React from "react";
import './About.css';
import Author from './Author/Author'

const About = () =>{
  const aboutText ="Ante in nibh mauris cursus mattis. Nibh sed pulvinar proin gravida. Sit amet volutpat consequat mauris nunc congue nisi vitae. Suscipit tellus mauris a diam maecenas sed enim ut sem. Vitae purus faucibus ornare suspendisse sed. Amet volutpat consequat mauris nunc. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Orci ac auctor augue mauris augue neque gravida."

  return (
    <div id="about">
      <h2 id="aboutTitle">About</h2>
      <span id="aboutContent">{aboutText}</span>
      <span><Author/></span>
    </div>
  );
}


export default About;