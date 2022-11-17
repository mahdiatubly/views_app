import './Profile.css'
import React from 'react'
import { TfiMarkerAlt } from "react-icons/tfi";
import { IconContext } from "react-icons";
import Switch from "react-switch";
import { useState, useEffect } from 'react';




export default function Profile() {
    let [state, setState] = useState({ checked: false });
    function handleChange(checked) {
        setState({ checked });
      }
  return (
    <div>
        <div className='info_div'>
            <div className='pic'>
                <img className='profile_pic' src='https://freesvg.org/img/abstract-user-flat-3.png'/>
            </div>
            
            <div className='bio'>
                <h1>Bio</h1>
                <div className='update_bio'>
                <IconContext.Provider value={{size: 51}}>
                    <TfiMarkerAlt />
                </IconContext.Provider>
                </div>
            </div>
            <div className='post_sec'>
                <h1>Your Posts</h1>
            </div>
            <div className='comment_sec'>
                <h1>Your comments</h1>
            </div>

            <label>
                <span>Switch with default style</span>
                <Switch onChange={handleChange} checked={state.checked} />
            </label>
        </div>
    </div>
  )
}
