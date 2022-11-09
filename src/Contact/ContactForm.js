import React from 'react';
import Input from '../Util/Input';
import '../Stylesheets/form.css';
import '../Stylesheets/Contact/contact-form.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this)
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target)
  }

  handlePrevClick(e) {
    this.props.handlePrevClick();
  }

  render() {
    return (
      <div className="contact-form">
        <h1 className="heading">Contact</h1>
        <form className="form">
          <Input 
            htmlFor="name"
            id="name"
            labelText="Name:"
            type="text"
            value={this.props.name}
            varName="name"
            handleInputChange={this.handleInputChange} /> 
          <button 
            className="btn contact-prev-btn" 
            type="submit" 
            onClick={this.handlePrevClick}>
            Preview
          </button>
        </form>
      </div>
    );
  }
}
