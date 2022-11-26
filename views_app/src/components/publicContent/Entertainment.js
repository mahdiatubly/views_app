import React from 'react'
import { FcPlus } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Entertainment() {
  const[publicContent, setPublicContentList] = useState({})
  useEffect(() => {
    getAllContent()
  }, [])

  /*This function is designed to fetch the API that login the user into their account.
    @Parameters:
      -user: this para. holds the user obj that contains the user details.
    @Return:
      -This is a void function designed to respond to the clicking the submit button.  
  */ 
      const getAllContent = () => {
        axios.get("http://localhost:4000/entertainment")
        .then(res =>{ 
          console.log(res.data)
          return setPublicContentList(res.data)})
        .catch(err => console.log(err))
      }
  return (
    <div>
      < div className='content_container'>
        {publicContent.length ? publicContent.map(content => 
        <div className='public_content'>
          <div className='realm'>
            {content.realm}
          </div>
          {content.creator_id ?
          <div className='creator'>
            {content.creator_id.first_name} {content.creator_id.last_name}
          </div>
          :
            <div className='creator'>
              Anonymous
            </div>
          }
          <div className='last_update'>
            {content.updatedAt}
          </div>
          <div className='content'>
            {content.content}
          </div>
        </div>
      )
      : null}
      </div>
      <div className='add_content'>
          <IconContext.Provider value={{size: 72}}>
            <Link to='/add/content'><FcPlus/></Link>
          </IconContext.Provider>
      </div>
    </div>
  )
}
