import React from 'react';
import ContactForm from './ContactForm';
import ContactResume from './ContactResume';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactFormOn: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }

  handleInputChange(target) {
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormClick() {
    this.setState({
      isContactFormOn: false
    });
  }

  handleResumeClick() {
    this.setState({
      isContactFormOn: true
    });
  }

  render() {
    const isContactFormOn = this.state.isContactFormOn;
    const name = this.state.name;
    if (isContactFormOn) {
      return (
        <ContactForm
          name={name} 
          handleInputChange={this.handleInputChange}
          handleFormClick={this.handleFormClick} />
      );
    }
    return (
      <ContactResume 
        name={name}
        handleResumeClick={this.handleResumeClick}/>
    );
  }
}
