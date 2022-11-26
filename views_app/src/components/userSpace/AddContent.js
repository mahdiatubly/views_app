import React from 'react'
import Dropdown from 'react-dropdown';
import './AddContent.css';
import { FcOldTimeCamera } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";
import { FcHeadset } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default function AddContent() {
  const [content, setContent] = useState({})

  async function define_realm(e){
    const contentObj = { ...content };
    contentObj['realm'] = await e.target.value;
    console.log(contentObj);
    setContent(contentObj)
    localStorage.setItem("realm", contentObj.realm);
  }
    

  return (
    <div>
    <form>
      <div className='realm'>
        <label className='menueLabel'>Choose the realm of your post: </label>
        <select name='realm' id="realms">
          <option name='realm' onClick={define_realm} value="Science">Science</option>
          <option name='realm' onClick={define_realm} value="Languages">Languages</option>
          <option name='realm' onClick={define_realm} value="Culture">Culture</option>
          <option name='realm' onClick={define_realm} value="Discover">Discover</option>
          <option name='realm' onClick={define_realm} value="Nature">Nature</option>
          <option name='realm' onClick={define_realm} value="Tourism">Tourism</option>
          <option name='realm' onClick={define_realm} value="Art">Art</option>
          <option name='realm' onClick={define_realm} value="Fiction">Fiction</option>
          <option name='realm' onClick={define_realm} value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className='realm' >
        Define the type of your content:
        <IconContext.Provider value={{size: 72}}>
          <div className='types_bar'>
            <div className='pic'>
              <button name='content_type' value='picture' ><Link to ='/upload/pic'><FcOldTimeCamera /></Link></button>
            </div>
            <div className='video'>
              <button name='content_type' value='video'><Link to='/upload/video'><FcCamcorderPro/></Link></button>
            </div>
            <div className='audio'>
              <button name='content_type' value='audio'><Link to='/upload/audio'><FcHeadset/></Link></button>
            </div>
            <div className='article'>
              <button name='content_type' value='article'><Link to='/upload/article'><FcDocument/></Link></button>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </form>
    </div>
  )
}
