import React from 'react';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import ResumeButtons from './Util/ResumeButtons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactFormOn: true,
      isSkillsFormOn: false,
      isProjectsFormOn: false,
      isResumeOn: false
    }
    this.handleContactPrevClick = this.handleContactPrevClick.bind(this);
    this.handleContactResClick = this.handleContactResClick.bind(this);
    this.handleSkillsPrevClick = this.handleSkillsPrevClick.bind(this);
    this.handleSkillsResClick = this.handleSkillsResClick.bind(this);
    this.handleProjectsPrevClick = this.handleProjectsPrevClick.bind(this);
    this.handleProjectsResClick = this.handleProjectsResClick.bind(this);
  }

  handleContactPrevClick() {
    this.setState({ 
      isContactFormOn: false,
      isResumeOn: true
    });
  }

  handleSkillsPrevClick() {
    this.setState({
      isSkillsFormOn: false,
      isResumeOn: true
    });
  }

  handleProjectsPrevClick() {
    this.setState({
      isProjectsFormOn: false,
      isResumeOn: true
    })
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

  handleProjectsResClick() {
    this.setState({
      isProjectsFormOn: true,
      isResumeOn: false
    });
  }

  render() {
    const isContactFormOn = this.state.isContactFormOn;
    const isSkillsFormOn = this.state.isSkillsFormOn;
    const isProjectsFormOn = this.state.isProjectsFormOn;
    const isResumeOn = this.state.isResumeOn;
    return (
      <div className="res-app-container">
        <Contact 
          handleContactPrevClick={this.handleContactPrevClick}
          handleContactResClick={this.handleContactResClick}
          isContactFormOn={isContactFormOn}
          isResumeOn={isResumeOn} />
        <Skills
          handleSkillsPrevClick={this.handleSkillsPrevClick}
          handleSkillsResClick={this.handleSkillsResClick}
          isSkillsFormOn={isSkillsFormOn}
          isResumeOn={isResumeOn} />
        <Projects
          handleProjectsPrevClick={this.handleProjectsPrevClick} 
          isProjectsFormOn={isProjectsFormOn}
          isResumeOn={isResumeOn}
        />
        <ResumeButtons
          isResumeOn={isResumeOn} 
          handleContactResClick={this.handleContactResClick}
          handleSkillsResClick={this.handleSkillsResClick}
          handleProjectsResClick={this.handleProjectsResClick} />
      </div>
    )
  }
}
