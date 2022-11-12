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
        <Input 
          htmlFor="email"
          id="email"
          labelText="Email:"
          type="email"
          value={props.email}
          varName="email"
          handleInputChange={props.handleInputChange} />
        <Input 
          htmlFor="phone"
          id="phone"
          labelText="Phone:"
          type="tel"
          value={props.phone}
          varName="phone"
          handleInputChange={props.handleInputChange} />
        <Input 
          htmlFor="website"
          id="website"
          labelText="Website:"
          type="text"
          value={props.website}
          varName="website"
          handleInputChange={props.handleInputChange} />
        <Input 
          htmlFor="github"
          id="github"
          labelText="Github:"
          type="text"
          value={props.github}
          varName="github"
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
