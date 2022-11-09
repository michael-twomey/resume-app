import React from 'react';
import '../Stylesheets/Contact/contact-resume.css';

export default class ContactResume extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleResumeClick();
  }

  render() {
    return (
      <div className="contact-res-container">
        <h1 className="name">{this.props.name}</h1>
      </div>
    )
  }
}
