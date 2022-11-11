import React from 'react';
import Input from '../Util/Input';
import ProjectsPreview from './ProjectsPreview';
import '../Stylesheets/form.css';
import '../Stylesheets/ProjAdv/proj-adv-form.css';

export default function ProjectsForm(props) {
  return (
    <div className="proj-adv-form-container">
      <h1 className="heading">Projects</h1>
      <form className="form">
        <Input
          htmlFor={"project-name"}
          id={"project-name"}
          labelText={"Project Name:"}
          type={"text"}
          value={props.projectName}
          varName={"projectName"}
          handleInputChange={props.handleInputChange} />
        <Input
          htmlFor={"project-date"}
          id={"project-date"}
          labelText={"Project Date:"}
          type={"text"}
          value={props.projectDate}
          varName={"projectDate"}
          handleInputChange={props.handleInputChange} />
        <div className="label-input-container">
          <label htmlFor="project-bullet">Project Bullet:</label>
          <textarea
            id="project-bullet"
            name="projectBullet"
            rows="4"
            value={props.projectBullet}
            onChange={props.handleInputChange} >
          </textarea>
        </div>
        <button className="btn proj-adv-add-btn" onClick={props.handleAddBulletClick}>Add Bullet</button>
      </form>
      <ProjectsPreview projects={props.projects} />
      <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
      <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  );
}
