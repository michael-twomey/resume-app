import React from 'react';
import Input from '../Util/Input';
import '../Stylesheets/form.css';
import '../Stylesheets/Contact/contact-form.css';

export default function ContactForm(props) {
  return (
    <div className="contact-form">
      <h1 className="heading">Contact</h1>
      <form className="form">
        <Input 
          htmlFor="name"
          id="name"
          labelText="Name:"
          type="text"
          value={props.name}
          varName="name"
          handleInputChange={props.handleInputChange} /> 
        <button 
          className="btn contact-prev-btn" 
          type="submit" 
          onClick={props.handlePrevClick}>
          Preview
        </button>
      </form>
    </div>
  );
}
