import React from 'react';
import ContactForm from './ContactForm';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactFromOn: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(target) {
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state.name)
    return (
      <ContactForm handleInputChange={this.handleInputChange} />
    )
  }
}