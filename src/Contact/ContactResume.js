import React from 'react';
import '../Stylesheets/Contact/contact-resume.css';

export default function ContactResume(props) {
  return (
    <div className="contact-res-container">
      <h1 className="name">{props.name}</h1>
    </div>
  );
}
