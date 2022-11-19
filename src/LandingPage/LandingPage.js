import React from 'react'
import '../Stylesheets/landing-page.css'

export default function LandingPage (props) {
  const isLandingPageOn = props.isLandingPageOn
  if (isLandingPageOn) {
    return (
      <div className="landing-page-container">
        <h1 className="landing-page-heading">Build Your Best R&eacute;sum&eacute;</h1>
        <button className="btn landing-page-btn" onClick={props.handleStartClick}>Start Now</button>
      </div>
    )
  }
}
