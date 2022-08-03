import React from "react";
import { Link, useLocation } from "react-router-dom"
import './FullPost.css';

const FullPost = () => {
    const location = useLocation();
    const aux = location.pathname.split('/');
    const postId = aux[aux.length - 1];
    const posts = require('../../../data/data.json');
    const post = posts.find(x => x.postId == postId)

  return (
    <div className="fullPost">
        <h2 id="title">{post.title}</h2>
        <p>{post.datePost}</p>
        <img src={post.imgUrl} alt="Imagem"></img>
        <p id="content">{post.fullText}</p>
        <Link to={"/"}> Voltar</Link>
    </div>
  );
}


export default FullPost;