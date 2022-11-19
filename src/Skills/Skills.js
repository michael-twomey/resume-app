import React from 'react';
import SkillsForm from './SkillsForm';
import SkillsResume from './SkillsResume';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontendSkills: [],
      frontendValue: '',
      backendSkills: [],
      backendValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFrontendAddClick = this.handleFrontendAddClick.bind(this);
    this.handleBackendAddClick = this.handleBackendAddClick.bind(this);
    this.removeFrontendSkill = this.removeFrontendSkill.bind(this);
    this.removeBackendSkill = this.removeBackendSkill.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleFrontendAddClick(e) {
    e.preventDefault();
    const frontendSkill = this.state.frontendValue;
    const newFrontendSkill = {
      skill: frontendSkill,
      key: generateId()
    }
    const frontendSkills = this.state.frontendSkills;
    const updatedFrontendSkills = frontendSkills.concat(newFrontendSkill);
    this.setState({
      frontendSkills: updatedFrontendSkills,
      frontendValue: ''
    });
  }

  handleBackendAddClick(e) {
    e.preventDefault();
    const backendSkill = this.state.backendValue;
    const newBackendSkill = {
      skill: backendSkill,
      key: generateId()
    };
    const backendSkills = this.state.backendSkills;
    const updatedBackendSkills = backendSkills.concat(newBackendSkill);
    this.setState({
      backendSkills: updatedBackendSkills,
      backendValue: ''
    });
  }

  removeFrontendSkill(e) {
    const delFrontendSkill = e.target.textContent;
    const frontendSkills = this.state.frontendSkills;
    const updatedFrontendSkills = frontendSkills.filter(skill => skill.skill !== delFrontendSkill);
    this.setState({ frontendSkills: updatedFrontendSkills });
  }

  removeBackendSkill(e) {
    const delBackendSkill = e.target.textContent;
    const backendSkills = this.state.backendSkills;
    const updatedBackendSkills = backendSkills.filter(skill => skill.skill !== delBackendSkill);
    this.setState({ backendSkills: updatedBackendSkills });
  }

  render() {
    const isSkillsFormOn = this.props.isSkillsFormOn;
    const isResumeOn = this.props.isResumeOn;
    const frontendSkills = this.state.frontendSkills;
    const frontendValue = this.state.frontendValue;
    const backendSkills = this.state.backendSkills;
    const backendValue = this.state.backendValue;
    if (isSkillsFormOn) {
      return (
        <SkillsForm
          frontendSkills={frontendSkills}
          frontendValue={frontendValue}
          backendSkills={backendSkills}
          backendValue={backendValue}
          handleInputChange={this.handleInputChange}
          handleFrontendAddClick={this.handleFrontendAddClick}
          handleBackendAddClick={this.handleBackendAddClick}
          handlePrevClick={this.props.handleSkillsPrevClick}
          removeFrontendSkill={this.removeFrontendSkill}
          removeBackendSkill={this.removeBackendSkill} />
      );
    } else if (isResumeOn) {
        return (
        <SkillsResume
          frontendSkills={frontendSkills}
          backendSkills={backendSkills} />
        );
    } return;
  }
}

function generateId() {
  return Math.random()
}

