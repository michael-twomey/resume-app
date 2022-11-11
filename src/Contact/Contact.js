import React from 'react';
import ContactForm from './ContactForm';
import ContactResume from './ContactResume';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  render() {
    const isContactFormOn = this.props.isContactFormOn;
    const isResumeOn = this.props.isResumeOn;
    const name = this.state.name;
    if (isContactFormOn) {
      return (
        <ContactForm
          name={name} 
          handleInputChange={this.handleInputChange}
          handlePrevClick={this.props.handleContactPrevClick} />
      );
    } else if (isResumeOn) {
        return <ContactResume name={name} />;
    } return;
  }
}
