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
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }

  handleInputChange(target) {
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handlePrevClick() {
    this.props.handleContactPrevClick();
  }

  handleResumeClick() {
    this.props.handleContactResClick();
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
          handlePrevClick={this.handlePrevClick} />
      );
    } else if (isResumeOn) {
        return (
          <ContactResume
            name={name}
            handleContactResClick={this.handleResumeClick} />
        );
    } return
  }
}
