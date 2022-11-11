import React from 'react';
import ProjectsForm from './ProjectsForm';
import ProjectsResume from './ProjectsResume';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projectDate: '',
      projectBullet: '',
      projectBullets: [],
      projects: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBulletClick = this.handleAddBulletClick.bind(this);
    this.handleNewProjectClick = this.handleNewProjectClick.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleAddBulletClick(e) {
    e.preventDefault();
    const bullet = this.state.projectBullet;
    const bullets = this.state.projectBullets;
    const updatedBullets = bullets.concat(bullet);
    this.setState({
      projectBullet: '',
      projectBullets: updatedBullets
    });
  }

  handleNewProjectClick() {
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const projectBullets = this.state.projectBullets;
    const project = {
      projectName,
      projectDate,
      projectBullets
    }
    const projects = this.state.projects;
    const updatedProjects = projects.concat(project);
    this.setState({
      projectName: '',
      projectDate: '',
      projectBullets: [],
      projects: updatedProjects 
    });
  }

  render() {
    const isResumeOn = this.props.isResumeOn;
    const isProjectsFormOn = this.props.isProjectsFormOn;
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const projectBullet = this.state.projectBullet;
    const projects = this.state.projects;
    if (isProjectsFormOn) {
      return (
        <ProjectsForm
          projectName={projectName}
          projectDate={projectDate}
          projectBullet={projectBullet}
          projects={projects}
          handleInputChange={this.handleInputChange}
          handleAddBulletClick={this.handleAddBulletClick}
          handleNewProjectClick={this.handleNewProjectClick}
          handlePrevClick={this.props.handleProjectsPrevClick} />
      );
    } else if (isResumeOn) {
      return (
        <ProjectsResume projects={projects} />
      );
    } return;
  }
}
