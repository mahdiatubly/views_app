import './Profile.css'
import React from 'react'
import { TfiMarkerAlt } from "react-icons/tfi";
import { IconContext } from "react-icons";
import Switch from "react-switch";
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



export default function Profile(props) {
    let token = localStorage.getItem("token");
    let decodedToken  = jwt_decode(token)
    let id = decodedToken.user.id
    let status = decodedToken.user.public
    let[bioState, setBioState] = useState({})
    let[editState, setEditState] = useState({})
    useEffect(() => {
        getBio()
    },[])
    
    const [checked, setChecked] = useState(status);
    const handleChange = async nextChecked => {
        setChecked(nextChecked);
        props.out()
        await axios.post("http://localhost:4000/update/state", {id:id})
        
    }

    function editBio(){
        document.querySelector('.bio_textarea').style.display = 'block'
        document.querySelector('.save').style.display = 'block'
        document.querySelector('.bio_text').style.display = 'none'
        document.querySelector('.update_bio').style.display = 'none'
    }

    function getBio(){
        axios.get(`http://localhost:4000/update/bio/${id}`)
        .then(res =>{ 
            console.log(res.data)
            return setEditState(res.data)})
        .catch(err => console.log(err))
    }

    async function saveUpdates(){
        document.querySelector('.bio_text').style.display = 'block'
        document.querySelector('.update_bio').style.display = 'block'
        document.querySelector('.bio_textarea').style.display = 'none'
        document.querySelector('.save').style.display = 'none'
        await axios.post("http://localhost:4000/update/bio", bioState)
            
        
    }

    function changeHandler(e){
        const userBio = { ...bioState };
        userBio['bio'] = e.target.value;
        try{
            let token = localStorage.getItem("token");
            let decodedToken  = jwt_decode(token)
            userBio['_id'] = decodedToken.user.id;
          }
          catch(err){
            console.log(err)
          }
        console.log(userBio);
        setBioState(userBio);
    }

         
    
  return (
    <div>
        <div className='info_div'>
            <div className='pic'>
                <img className='profile_pic' src='https://freesvg.org/img/abstract-user-flat-3.png'/>
            </div>
            
            <div className='bio'>
                <h1>Bio</h1>
                <div className='bio_text'>{editState.bio}</div>
                <textarea className='bio_textarea' onChange={changeHandler} placeholder='Text Here'></textarea>
                <button className='save' onClick={saveUpdates}>Update</button>
                <div className='update_bio'>
                <IconContext.Provider value={{size: 51}}>
                    <button className='edit_bio' onClick={editBio}><TfiMarkerAlt /></button>
                </IconContext.Provider>
                </div>
            </div>
            <div className='post_sec'>
                <Link to='/all/user/posts'><h1>Your Posts</h1></Link>
            </div>
            <div className='comment_sec'>
                <h1>Your comments</h1>
            </div>
            <div className='status_sec'>
                <label>
                    <h1 className='label' >Public Account</h1>
                    <Switch onChange={handleChange} checked={checked} />
                </label>
            </div>
            <div className='comment_sec'>
                <button onClick={props.out}>SignOut</button>
            </div>
        </div>
    </div>
  )
}
