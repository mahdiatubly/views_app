import './Home.css'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div>
        <p className="instruction">Where you want to dive!</p>
        <a href='http://localhost:3000/sience'><div className="sience_realm">Sience</div></a>
        <div className="languages_realm">Languages</div>
        <div className="culture_realm">Culture</div>
        <div className="discove">Discover</div>
        <a href='http://localhost:3000/nature'><div className="nature_realm">Nature</div></a>
        <div className="tourism_realm">Tourism</div>
        <div className="art_realm">Art</div>
        <div className="fiction_realm">Fiction</div>
        <div className="Entertainment_realm">Entertainment</div>
      </div>
    </div>
  )
}
