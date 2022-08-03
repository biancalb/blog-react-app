import React from "react";
import './Description.css';

const Description = () =>{
  const description = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis a cras semper auctor neque vitae. Pretium quam vulputate dignissim suspendisse in est ante in."
  const list = [
    {
      id: 1,
      textDescription: 'Varius vel',
    },
    {
      id: 2,
      textDescription: 'Quam vulputate',
    },
    {
      id: 3,
      textDescription: 'Platea dictumst',
    },
    {
      id: 4,
      textDescription: 'Orci ac auctor',
    },
  ]
  return (
    <div id="description">
      
      <h2>Descrição  </h2>
      <p>{description}</p>
      <ul>
          {list.map(item => {
            return(
              <li>
                {item.textDescription}
              </li>
            )
          })}
      </ul>
    </div>
  );
}


export default Description;