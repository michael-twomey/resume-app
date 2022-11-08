import React from 'react';
import Contact from './Contact/Contact';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactFormOn: true,
    }
    this.handleContactFormClick = this.handleContactFormClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }

  handleContactFormClick() {
    this.setState({ isContactFormOn: false });
  }

  handleResumeClick() {
    this.setState({ isContactFormOn: true })
  }

  render() {
    const isContactFormOn = this.state.isContactFormOn;
    return (
      <Contact 
        handleContactFormClick={this.handleContactFormClick}
        handleResumeClick={this.handleResumeClick}
        isContactFormOn={isContactFormOn} />
    )
  }
}
