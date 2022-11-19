import React from 'react'
import '../Stylesheets/Contact/contact-resume.css'

export default function ContactResume (props) {
  return (
    <div className="contact-res-container">
      <h1 className="name">{props.name}</h1>
      <ul className="contact-details">
        <li>{props.email}</li>
        <li>{props.phone}</li>
        <li>{props.website}</li>
        <li>{props.github}</li>
      </ul>
    </div>
  )
}
