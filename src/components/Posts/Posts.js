import React from "react";
import {Link} from 'react-router-dom';
import './Posts.css';

const Posts = () => {

    const posts = require('../../data/data.json');
        
  return (
    <div id="posts">
        {posts.map(item => {
            return(
                <div className="post">
                    <h2 id="title">{item.title}</h2>
                    <p>{item.datePost}</p>
                    <img src={item.imgUrl} alt="Imagem"></img>
                    <p id="content">{item.textSummary}</p>
                    <Link to={`/post/${item.postId}`}> Leia mais</Link>
                </div>
            )
        })}
    </div>
  );
}


export default Posts;