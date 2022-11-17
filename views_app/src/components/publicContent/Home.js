import './Home.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>
        <p className="instruction">Where you want to dive!</p>
        <Link to='/sience'><div className="sience_realm">Sience</div></Link>
        <Link to='/languages'><div className="languages_realm">Languages</div></Link>
        <Link to='/culture'><div className="culture_realm">Culture</div></Link>
        <Link to='/discover'><div className="discove">Discover</div></Link>
        <Link to='/nature'><div className="nature_realm">Nature</div></Link>
        <Link to='/tourism'><div className="tourism_realm">Tourism</div></Link>
        <Link to='/art'><div className="art_realm">Art</div></Link>
        <Link to='/fiction'><div className="fiction_realm">Fiction</div></Link>
        <Link to='/entertainment'><div className="Entertainment_realm">Entertainment</div></Link>
      </div>
    </div>
  )
}
