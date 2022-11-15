import React from 'react';
import Input from '../Util/Input';
import ProjectsPreview from './ProjectsPreview';
import UpdateButtons from '../Util/UpdateButtons';
import '../Stylesheets/form.css';
import '../Stylesheets/ProjAdv/proj-adv-form.css';

export default class ProjectsForm extends React.Component {
  render() {
    return (
      <div className="proj-adv-form-container">
        <h1 className="heading">Projects</h1>
        <form className="form">
          <Input
            htmlFor="project-name"
            id="project-name"
            labelText="Project Name:"
            type="text"
            value={this.props.projectName}
            varName="projectName"
            handleInputChange={this.props.handleInputChange} />
          <Input
            htmlFor="project-date"
            id="project-date"
            labelText="Project Date:"
            type="text"
            value={this.props.projectDate}
            varName="projectDate"
            handleInputChange={this.props.handleInputChange} />
          <div className="label-input-container">
            <label htmlFor="project-bullet">Project Bullet:</label>
            <textarea
              id="project-bullet"
              name="projectBullet"
              rows="4"
              value={this.props.projectBullet}
              onChange={this.props.handleInputChange} >
            </textarea>
          </div>
          <button className="btn proj-adv-add-btn" onClick={this.props.handleAddBulletClick}>Add Bullet</button>
        </form>
        <ProjectsPreview 
          projects={this.props.projects}
          handleProjectNameClick={this.props.handleProjectNameClick}
          handleBulletClick={this.props.handleBulletClick} />
        <UpdateButtons 
          isEditProjectMode={this.props.isEditProjectMode}
          isEditBulletMode={this.props.isEditBulletMode}
          handleSaveProjectClick={this.props.handleSaveProjectClick}
          handleDeleteProjectClick={this.props.handleDeleteProjectClick}
          handleUpdateBulletClick={this.props.handleUpdateBulletClick}
          handleDeleteBulletClick={this.props.handleDeleteBulletClick}
          handleNewProjectClick={this.props.handleNewProjectClick}
          handlePrevClick={this.props.handlePrevClick} />
      </div>
    );
  }
}
