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
      isEditProjectMode: false,
      isEditBulletMode: false,
      editProjectId: 0,
      editBulletId: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBulletClick = this.handleAddBulletClick.bind(this);
    this.handleNewProjectClick = this.handleNewProjectClick.bind(this);
    this.handleProjectNameClick = this.handleProjectNameClick.bind(this);
    this.handleSaveProjectClick = this.handleSaveProjectClick.bind(this);
    this.handleDeleteProjectClick = this.handleDeleteProjectClick.bind(this);
    this.handleBulletClick = this.handleBulletClick.bind(this);
    this.handleUpdateBulletClick = this.handleUpdateBulletClick.bind(this);
    this.handleDeleteBulletClick = this.handleDeleteBulletClick.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleAddBulletClick(e) {
    e.preventDefault();
    const bulletText = this.state.projectBullet;
    const id = generateId();
    const key = id;
    const bullet = {
      bulletText,
      id,
      key
    };
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

  handleProjectNameClick(e) {
    let target = e.target;
    while(target.id === "") {
      target = target.parentNode;
    }
    const id = target.id;
    this.setState({
      isEditProjectMode: true, 
      editProjectId: id
    });
  }

  handleSaveProjectClick() {
    this.setState({ isEditProjectMode: false });
  }

  handleDeleteProjectClick() {
    const projects = this.state.projects;
    const deleteProjectId = this.state.editProjectId;
    const savedProjects = projects.filter(project => project.id != deleteProjectId);
    this.setState({
      projects: savedProjects,
      isEditProjectMode: false
     });
  }

  handleBulletClick(e) {
    let bulletTarget = e.target;
    while (bulletTarget.id == "") {
      bulletTarget = bulletTarget.parentNode;
    }
    const bulletId = bulletTarget.id;
    let projectTarget = e.target;
    while (projectTarget.id == "" || projectTarget.id === bulletId) {
      projectTarget = projectTarget.parentNode;
    }
    const projectId = projectTarget.id;
    this.setState({
      isEditBulletMode: true,
      editBulletId: bulletId,
      editProjectId: projectId
    });
    this.updateForm(projectId, bulletId)
  }

  updateForm(projectId, bulletId) {
    const projects = this.state.projects;
    const editProject = projects.filter(project => project.id == projectId)[0];
    const bullets = editProject.projectBullets;
    const editBullet = bullets.filter(bullet => bullet.id == bulletId)[0];
    this.setState({
      projectName: editProject.projectName,
      projectDate: editProject.projectDate,
      projectBullet: editBullet.bulletText
    });
  }

  handleUpdateBulletClick() {
    const projectId = this.state.editProjectId;
    const bulletId = this.state.editBulletId;
    const projects = this.state.projects;
    const editProject = projects.filter(project => project.id == projectId)[0];
    const editBullets = editProject.projectBullets;
    const updatedBulletText = this.state.projectBullet;
    const updatedBullets = editBullets.map(bullet => {
      if (bullet.id == bulletId) {
        bullet.bulletText = updatedBulletText
      }
      return bullet;
    });
    const updatedProjects = projects.map(project => {
      if (project.id == projectId) {
        project.projectBullets = updatedBullets;
      }
      return project
    });
    this.setState({
      projects: updatedProjects,
      isEditBulletMode: false,
      projectName: '',
      projectDate: '',
      projectBullet: ''
    });
  }

  handleDeleteBulletClick() {
    const projectId = this.state.editProjectId;
    const bulletId = this.state.editBulletId;
    const projects = this.state.projects;
    const editProject = projects.filter(project => project.id == projectId)[0];
    const editBullets = editProject.projectBullets;
    const updatedBullets = editBullets.filter(bullet => bullet.id != bulletId);
    const updatedProjects = projects.map(project => {
      if (project.id == projectId) {
        project.projectBullets = updatedBullets;
      }
      return project;
    });
    this.setState({
      projects: updatedProjects,
      isEditBulletMode: false,
      projectName: '',
      projectDate: '',
      projectBullet: ''
    });
  }

  render() {
    const isResumeOn = this.props.isResumeOn;
    const isProjectsFormOn = this.props.isProjectsFormOn;
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const projectBullet = this.state.projectBullet;
    const projects = this.state.projects;
    const isEditProjectMode = this.state.isEditProjectMode;
    const isEditBulletMode = this.state.isEditBulletMode;
    if (isProjectsFormOn) {
      return (
        <ProjectsForm
          projectName={projectName}
          projectDate={projectDate}
          projectBullet={projectBullet}
          projects={projects}
          isEditProjectMode={isEditProjectMode}
          isEditBulletMode={isEditBulletMode}
          handleInputChange={this.handleInputChange}
          handleAddBulletClick={this.handleAddBulletClick}
          handleNewProjectClick={this.handleNewProjectClick}
          handleProjectNameClick={this.handleProjectNameClick}
          handleSaveProjectClick={this.handleSaveProjectClick}
          handleDeleteProjectClick={this.handleDeleteProjectClick}
          handleBulletClick={this.handleBulletClick}
          handleUpdateBulletClick={this.handleUpdateBulletClick}
          handleDeleteBulletClick={this.handleDeleteBulletClick}
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
