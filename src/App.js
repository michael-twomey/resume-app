import React from 'react';
import Contact from './Contact/Contact';
import ResumeButtons from './Util/ResumeButtons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactFormOn: true,
      isSkillsFormOn: false,
      isResumeOn: false
    }
    this.handleContactFormClick = this.handleContactFormClick.bind(this);
    this.handleContactResClick = this.handleContactResClick.bind(this);
    this.handleSkillsResClick = this.handleSkillsResClick.bind(this);
  }

  handleContactFormClick() {
    this.setState({ 
      isContactFormOn: false,
      isResumeOn: true
    });
  }

  handleContactResClick() {
    this.setState({ 
      isContactFormOn: true,
      isResumeOn: false
    });
  }

  handleSkillsResClick() {
    this.setState({ 
      isSkillsFormOn: true,
      isResumeOn: false
    });
  }

  render() {
    const isContactFormOn = this.state.isContactFormOn;
    const isResumeOn = this.state.isResumeOn;
    return (
      <div className="res-app-container">
        <Contact 
          handleContactFormClick={this.handleContactFormClick}
          handleContactResClick={this.handleContactResClick}
          isContactFormOn={isContactFormOn} />
        <ResumeButtons
          isResumeOn={isResumeOn} 
          handleContactResClick={this.handleContactResClick}
          handleSkillsResClick={this.handleSkillsResClick} />
      </div>
    )
  }
}
