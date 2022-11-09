import React from 'react';
import Input from '../Util/Input';
import '../Stylesheets/Skills/skills-form.css';

export default class SkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFrontendAddClick = this.handleFrontendAddClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target);
  }

  handleFrontendAddClick(e) {
    this.props.handleFrontendAddClick(e);
  }

  handlePrevClick() {
    this.props.handlePrevClick();
  }

  mapFrontendSkills(frontendSkills) {
    return frontendSkills.map(skill => <li className="skill">{skill}</li>);
  }

  render() {
    const frontendSkills = this.props.frontendSkills;
    return (
      <div className="skills-form-container">
        <h1 className="heading">Skills</h1>
        <form className="form">
          <Input
            htmlFor={'frontendValue'}
            id={'frontendValue'}
            labelText={'Frontend:'}
            type={'text'}
            value={this.props.frontendValue}
            varName={'frontendValue'}
            handleInputChange={this.handleInputChange} />
          <ul className="skills-list-form">{this.mapFrontendSkills(frontendSkills)}</ul> 
          <button
            className="btn add-btn"
            onClick={this.handleFrontendAddClick}>
            Add
          </button>
        </form>
        <button className="btn skills-prev-btn" onClick={this.handlePrevClick}>Preview</button>
      </div>
    );
  }
}
