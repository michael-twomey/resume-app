import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import ProjAdv from './ProjAdv/ProjAdv';
import ResumeButtons from './Util/ResumeButtons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandingPageOn: true,
      isContactFormOn: false,
      isSkillsFormOn: false,
      isProjectsFormOn: false,
      isAdventuresFormOn: false,
      isResumeOn: false,
      areResumeBtnsOn: true
    }
    this.handleContactPrevClick = this.handleContactPrevClick.bind(this);
    this.handleSkillsPrevClick = this.handleSkillsPrevClick.bind(this);
    this.handleContactResClick = this.handleContactResClick.bind(this);
    this.handleSkillsResClick = this.handleSkillsResClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleExportClick = this.handleExportClick.bind(this);
    this.handleResetResBtnsClick = this.handleResetResBtnsClick.bind(this);
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

  handleProjAdvPrevClick(sectionName) {
    if (sectionName === 'Projects') {
      this.setState({
        isProjectsFormOn: false,
        isResumeOn: true
      });
    } else {
      this.setState({
        isAdventuresFormOn: false,
        isResumeOn: true
      });
    }
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

  handleProjAdvResClick(sectionName) {
    if (sectionName === 'Projects') {
      this.setState({
        isProjectsFormOn: true,
        isResumeOn: false
      });
    } else {
      this.setState({
        isAdventuresFormOn: true,
        isResumeOn: false
      });
    }
  }

  handleStartClick() {
    this.setState({
      isContactFormOn: true,
      isLandingPageOn: false
    });
  }

  handleExportClick() {
    this.setState({ areResumeBtnsOn: false });
  }

  handleResetResBtnsClick() {
    this.setState({ areResumeBtnsOn: true });
  }
  
  render() {
    const isLandingPageOn = this.state.isLandingPageOn;
    const isContactFormOn = this.state.isContactFormOn;
    const isSkillsFormOn = this.state.isSkillsFormOn;
    const isProjectsFormOn = this.state.isProjectsFormOn;
    const isAdventuresFormOn = this.state.isAdventuresFormOn;
    const isResumeOn = this.state.isResumeOn;
    const areResumeBtnsOn = this.state.areResumeBtnsOn;
    return (
      <div className="res-app-container">
        <LandingPage
          isLandingPageOn={isLandingPageOn}
          handleStartClick={this.handleStartClick} />
        <Contact 
          handleContactPrevClick={this.handleContactPrevClick}
          isContactFormOn={isContactFormOn}
          isResumeOn={isResumeOn} />
        <Skills
          handleSkillsPrevClick={this.handleSkillsPrevClick}
          isSkillsFormOn={isSkillsFormOn}
          isResumeOn={isResumeOn} />
        <ProjAdv
          heading='Projects'
          label='Project'
          handleProjAdvPrevClick={() => this.handleProjAdvPrevClick('Projects')} 
          isProjAdvFormOn={isProjectsFormOn}
          isResumeOn={isResumeOn}
        />
        <ProjAdv
          heading='Adventures'
          label='Adventure'
          handleProjAdvPrevClick={() => this.handleProjAdvPrevClick('Adventures')}
          isProjAdvFormOn={isAdventuresFormOn}
          isResumeOn={isResumeOn} />
        <ResumeButtons
          isResumeOn={isResumeOn}
          areResumeBtnsOn={areResumeBtnsOn}
          handleContactResClick={this.handleContactResClick}
          handleSkillsResClick={this.handleSkillsResClick}
          handleProjectsResClick={() => this.handleProjAdvResClick('Projects')}
          handleAdventuresResClick={() => this.handleProjAdvResClick('Adventures')}
          handleExportClick={this.handleExportClick}
          handleResetResBtnsClick={this.handleResetResBtnsClick} />
      </div>
    );
  }
}
