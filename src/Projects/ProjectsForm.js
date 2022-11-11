import React from 'react';
import Input from '../Util/Input';
import ProjectsPreview from './ProjectsPreview';
import '../Stylesheets/form.css';
import '../Stylesheets/maincontent-form.css';

export default class ProjectsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBulletClick = this.handleAddBulletClick.bind(this);
    this.handleNewProjectClick = this.handleNewProjectClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target);
  }

  handleAddBulletClick(e) {
    this.props.handleAddBulletClick(e)
  }

  handleNewProjectClick() {
    this.props.handleNewProjectClick();
  }

  handlePrevClick() {
    this.props.handlePrevClick();
  }

  render() {
    return (
      <div className="projects-form-container">
        <h1 className="heading">Projects</h1>
        <form className="form">
          <Input
            htmlFor={"project-name"}
            id={"project-name"}
            labelText={"Project Name:"}
            type={"text"}
            value={this.props.projectName}
            varName={"projectName"}
            handleInputChange={this.handleInputChange} />
          <Input
            htmlFor={"project-date"}
            id={"project-date"}
            labelText={"Project Date:"}
            type={"text"}
            value={this.props.projectDate}
            varName={"projectDate"}
            handleInputChange={this.handleInputChange} />
          <div className="label-input-container">
            <label htmlFor="project-bullet">Project Bullet:</label>
            <textarea
              id="project-bullet"
              name="projectBullet"
              rows="4"
              value={this.props.projectBullet}
              onChange={this.handleInputChange} >
            </textarea>
          </div>
          <button className="btn proj-add-btn" onClick={this.handleAddBulletClick}>Add Bullet</button>
        </form>
        <ProjectsPreview projects={this.props.projects} />
        <button className="btn proj-new-btn" onClick={this.handleNewProjectClick}>New Project</button>
        <button className="btn proj-prev-btn" onClick={this.handlePrevClick}>Preview</button>
      </div>
    );
  }
}
