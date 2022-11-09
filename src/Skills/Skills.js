import React from 'react';
import SkillsForm from './SkillsForm';
import SkillsResume from './SkillsResume';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontendSkills: [],
      backendSkills: [],
      frontendValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFrontendAddClick = this.handleFrontendAddClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  handleInputChange(target) {
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleFrontendAddClick(e) {
    e.preventDefault();
    const newFrontendSkill = this.state.frontendValue;
    const frontendSkills = this.state.frontendSkills;
    const updatedFrontendSkills = frontendSkills.concat(newFrontendSkill);
    this.setState({
      frontendSkills: updatedFrontendSkills,
      frontendValue: ''
    });
  }

  handlePrevClick() {
    this.props.handleSkillsPrevClick();
  }

  render() {
    const isSkillsFormOn = this.props.isSkillsFormOn;
    const isResumeOn = this.props.isResumeOn;
    const frontendSkills = this.state.frontendSkills;
    const frontendValue = this.state.frontendValue;
    if (isSkillsFormOn) {
      return (
        <SkillsForm
          frontendSkills={frontendSkills}
          frontendValue={frontendValue}
          handleInputChange={this.handleInputChange}
          handleFrontendAddClick={this.handleFrontendAddClick}
          handlePrevClick={this.handlePrevClick} />
      );
    } else if (isResumeOn) {
        return (
          <SkillsResume frontendSkills={frontendSkills} />
        );
    } return;
  }
}
