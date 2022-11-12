import React from 'react';
import Input from '../Util/Input';
import '../Stylesheets/Skills/skills-form.css';

export default class SkillsForm extends React.Component {
  makeSkillElement(skill, isFrontend) {
    return (
      <li 
        className="skill"
        onClick={isFrontend ? this.props.removeFrontendSkill : this.props.removeBackendSkill}>
        {skill}
      </li>
    );
  }

  render() {
    return (
      <div className="skills-form-container">
        <h1 className="heading">Skills</h1>
        <form className="form">
          <Input
            htmlFor="frontendValue"
            id="frontendValue"
            labelText="Frontend:"
            type="text"
            value={this.props.frontendValue}
            varName="frontendValue"
            handleInputChange={this.props.handleInputChange} />
          <ul className="skills-list-form">{this.props.frontendSkills.map(skill => this.makeSkillElement(skill, true))}</ul> 
          <button
            className="btn add-btn"
            onClick={this.props.handleFrontendAddClick} >
            Add
          </button>
        </form>
        <form className="form">
          <Input
            htmlFor="backendValue"
            id="backendValue"
            labelText="Backend:"
            type="text"
            value={this.props.backendValue}
            varName="backendValue"
            handleInputChange={this.props.handleInputChange} />
          <ul className="skills-list-form">{this.props.backendSkills.map(skill => this.makeSkillElement(skill, false))}</ul> 
          <button
            className="btn add-btn"
            onClick={this.props.handleBackendAddClick} >
            Add
          </button>
        </form>
        <button className="btn skills-prev-btn" onClick={this.props.handlePrevClick}>Preview</button>
      </div>
    );
  }
}
