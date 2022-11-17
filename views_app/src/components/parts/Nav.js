import './Nav.css'
import React from 'react'
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Nav(props) {
  let state = 'Public'
  function getName(){
    try{
      let token = localStorage.getItem("token");
      let decodedToken  = jwt_decode(token)
      state = decodedToken.first_name
      return state
    }
    catch(err){
      console.log('You are not signned in.' +  err)
      return state
    }
  }
  
  return (
    <div className='navContainer'>
      <div className='navbar'>
        <div className='title'>
          VIEWS
        </div>
          <Link className='tabs' to="/">Home</Link>&nbsp;
          <Link className='tabs' to="/signup">SignUp</Link>&nbsp;
          <Link className='tabs' to="/signin">SignIn</Link> 
        <div className='audience'>
          <Link className='user' to="/profile">{getName()}</Link>
        </div>
      </div>
    </div>
  )
}
