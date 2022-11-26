import './UploadArticles.css'
import React from 'react'
import AddContent from './AddContent'
import { useState } from 'react';
import jwt_decode from 'jwt-decode';


export default function UploadArticles(props) {
  const [newPost, setNewPost] = useState({});
  const storeHandler = (e) => {
    const article = { ...newPost };
    article['content_type'] = 'Article';
    article['realm'] = localStorage.getItem("realm");
    article['content'] = e.target.value;
    
    //console.log(id);
    try{
      let token = localStorage.getItem("token");
      let decodedToken  = jwt_decode(token)
      article['creator_id'] = decodedToken.user.id;
      let pb = decodedToken.user.public
      article['public'] = pb
    }
    catch(err){
      article['public'] = true
    }
    
    console.log(article);
    setNewPost(article);
  }

  const regsiterHandler = () => {
    props.register(newPost)
  }

  return (
    <div className='article_container'>
      <form>
        <textarea id='article_space' onChange={storeHandler}></textarea>
        <button className='publish' name="signup" id="signup"  onClick={regsiterHandler}>Publish</button>
      </form>
    </div>
  )
}
