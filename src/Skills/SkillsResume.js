import React from 'react';
import '../Stylesheets/Skills/skills-resume.css';

export default class SkillsResume extends React.Component {
  mapSkills(skills) {
    return skills.map(skill => <li>{skill}</li>)
  }
  
  render() {
    const frontendSkills = this.props.frontendSkills;
    return (
      <div className="skills-res-container">    
        <h2 className="skills-head">Skills</h2>
        <div className="skills-grid">
          <h3>Frontend</h3>
          <h3>Backend</h3>
          <ul className="skills-list frontend">{this.mapSkills(frontendSkills)}</ul>
          <ul className="skills-list backend"></ul>
        </div>
    ` </div>
    )
  }
}