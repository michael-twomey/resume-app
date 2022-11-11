import React from 'react';
import Input from '../Util/Input';
import '../Stylesheets/Skills/skills-form.css';

export default function SkillsForm(props) {
  return (
    <div className="skills-form-container">
      <h1 className="heading">Skills</h1>
      <form className="form">
        <Input
          htmlFor={'frontendValue'}
          id={'frontendValue'}
          labelText={'Frontend:'}
          type={'text'}
          value={props.frontendValue}
          varName={'frontendValue'}
          handleInputChange={props.handleInputChange} />
        <ul className="skills-list-form">{props.frontendSkills.map(skill => <li className="skill">{skill}</li>)}</ul> 
        <button
          className="btn add-btn"
          onClick={props.handleFrontendAddClick}>
          Add
        </button>
      </form>
      <button className="btn skills-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  );
}
