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
      projects: [],
      isUpdateMode: false,
      updateProjectId: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBulletClick = this.handleAddBulletClick.bind(this);
    this.handleNewProjectClick = this.handleNewProjectClick.bind(this);
    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.handleProjectDeleteClick = this.handleProjectDeleteClick.bind(this);
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
    const id = generateId();
    const key = id;
    const project = {
      projectName,
      projectDate,
      projectBullets,
      id,
      key
    };
    const projects = this.state.projects;
    const updatedProjects = projects.concat(project);
    this.setState({
      projectName: '',
      projectDate: '',
      projectBullets: [],
      projects: updatedProjects 
    });
  }

  handleProjectClick(e) {
    let target = e.target;
    while(target.id === "") {
      target = target.parentNode;
    }
    const id = target.id;
    this.setState({
      isUpdateMode: true, 
      updateProjectId: id
    });
  }

  handleProjectDeleteClick() {
    const projects = this.state.projects;
    const updateProjectId = this.state.updateProjectId;
    const updatedProjects = projects.filter(project => project.id != updateProjectId);
    this.setState({
      projects: updatedProjects,
      isUpdateMode: false
     });
  }

  render() {
    const isResumeOn = this.props.isResumeOn;
    const isProjectsFormOn = this.props.isProjectsFormOn;
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const projectBullet = this.state.projectBullet;
    const projects = this.state.projects;
    const isUpdateMode = this.state.isUpdateMode;
    if (isProjectsFormOn) {
      return (
        <ProjectsForm
          projectName={projectName}
          projectDate={projectDate}
          projectBullet={projectBullet}
          projects={projects}
          isUpdateMode={isUpdateMode}
          handleInputChange={this.handleInputChange}
          handleAddBulletClick={this.handleAddBulletClick}
          handleNewProjectClick={this.handleNewProjectClick}
          handleProjectClick={this.handleProjectClick}
          handleProjectDeleteClick={this.handleProjectDeleteClick}
          handlePrevClick={this.props.handleProjectsPrevClick} />
      );
    } else if (isResumeOn) {
      return <ProjectsResume projects={projects} />;
    } return;
  }
}

function generateId() {
  return Math.random();
}
