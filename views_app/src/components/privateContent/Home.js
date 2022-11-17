// import './Home.css'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div>
        <p className="instruction">Where you want to dive!</p>
        <a href='http://localhost:3000/sience'><div className="sience_realm">Sience</div></a>
        <a href='http://localhost:3000/languages'><div className="languages_realm">Languages</div></a>
        <a href='http://localhost:3000/culture'><div className="culture_realm">Culture</div></a>
        <a href='http://localhost:3000/discover'><div className="discove">Discover</div></a>
        <a href='http://localhost:3000/nature'><div className="nature_realm">Nature</div></a>
        <a href='http://localhost:3000/tourism'><div className="tourism_realm">Tourism</div></a>
        <a href='http://localhost:3000/art'><div className="art_realm">Art</div></a>
        <a href='http://localhost:3000/fiction'><div className="fiction_realm">Fiction</div></a>
        <a href='http://localhost:3000/entertainment'><div className="Entertainment_realm">Entertainment</div></a>
      </div>
    </div>
  )
}