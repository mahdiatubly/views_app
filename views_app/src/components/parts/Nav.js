import './Nav.css'
import React from 'react'

export default function Nav(props) {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='title'>
          VIEWS
        </div>
        <div className='audience'>
          {props.audience}
        </div>
      </div>
    </div>
  )
}
