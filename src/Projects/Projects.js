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
      projectId: 0,
      projects: [],
      isEditProjectMode: false,
      isEditBulletMode: false,
      editProjectId: 0,
      editBulletId: 0,
      addBulletClickCount: 0
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
    const bullet = this.state.projectBullet;
    if (!bullet) {
      return;
    }
    const projects = this.state.projects;
    const isEditProjectMode = this.state.isEditProjectMode;
    let addBulletClickCount = this.state.addBulletClickCount;

    if (e.target.textContent === 'Update Bullet') {
      this.updateBullet();
    } else if (addBulletClickCount === 0 && !isEditProjectMode) {
      this.handleAddFirstBulletClick()
    } else if (isEditProjectMode) {
      this.handleEditProjectModeAddBulletClick()
    }
    else {
      const projectName = this.state.projectName;
      const projectDate = this.state.projectDate;
      const projectId = this.state.projectId;
      const updatedBullets = this.addBullet()
      const updatedProjects = projects.map(project => {
        if (project.id == projectId) {
          project.projectName = projectName;
          project.projectDate = projectDate;
          project.projectBullets = updatedBullets;
        }
        return project;
      });
      this.setState({
        projects: updatedProjects,
        projectBullets: updatedBullets,
        projectBullet: ''
      });
    }
    const updatedAddBulletClickCount = addBulletClickCount + 1;
    this.setState({ addBulletClickCount: updatedAddBulletClickCount })
  }

  handleAddFirstBulletClick() {
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const updatedBullets = this.addBullet();
    const id = generateId();
    const key = id;
    const project = {
      projectName,
      projectDate,
      projectBullets: updatedBullets,
      id,
      key
    };
    const projects = this.state.projects;
    const updatedProjects = projects.concat(project);
    this.setState({
      projects: updatedProjects,
      projectBullets: updatedBullets,
      projectBullet: '',
      projectId: id,
      editProjectId: id
    });
    return project;
  }

  handleEditProjectModeAddBulletClick() {
    const projects = this.state.projects;
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const editProjectId = this.state.editProjectId;
    const updatedBullets = this.addBullet()
    const updatedProjects = projects.map(project => {
      if (project.id == editProjectId) {
        project.projectName = projectName;
        project.projectDate = projectDate;
        project.projectBullets = updatedBullets;
      }
      return project;
    });
    this.setState({
      projects: updatedProjects,
      projectBullets: updatedBullets,
      projectBullet: '',
    });
  }

  addBullet() {
    const isEditProjectMode = this.state.isEditProjectMode;
    const bulletText = this.state.projectBullet;
    const id = generateId();
    const key = id;
    const bullet = {
      bulletText,
      id,
      key
    };
    const projects = this.state.projects;
    let bullets = []
    if (isEditProjectMode) {
      const editProjectId = this.state.editProjectId;
      const editProject = projects.filter(project => project.id == editProjectId)[0];
      bullets = editProject.projectBullets;
    } else {
      bullets = this.state.projectBullets;
    }
    const updatedBullets = bullets.concat(bullet);
    return updatedBullets;
  }

  handleNewProjectClick() {
    this.setState({
      projectName: '',
      projectDate: '',
      projectBullet: '',
      projectBullets: [],
      isEditProjectMode: false,
      isEditBulletMode: false,
      editProjectId: 0,
      addBulletClickCount: 0
    });
  }

  handleProjectNameClick(e) {
    let target = e.target;
    while(target.id === "") {
      target = target.parentNode;
    }
    const id = target.id;
    const projects = this.state.projects;
    const clickedProject = projects.filter(project => project.id == id)[0];
    const clickedProjectName = clickedProject.projectName;
    const clickedProjectDate = clickedProject.projectDate;
    this.setState({
      isEditProjectMode: true,
      editProjectId: id,
      projectName: clickedProjectName,
      projectDate: clickedProjectDate
    });
  }

  handleSaveProjectClick() {
    const projects = this.state.projects;
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
    const editProjectId = this.state.editProjectId;
    const updatedProjects = projects.map(project => {
      if (project.id == editProjectId) {
        project.projectName = projectName;
        project.projectDate = projectDate;
      }
      return project;
    })
    this.handleNewProjectClick();
    this.setState({ projects: updatedProjects });
  }

  handleDeleteProjectClick() {
    const projects = this.state.projects;
    const deleteProjectId = this.state.editProjectId;
    const savedProjects = projects.filter(project => project.id != deleteProjectId);
    this.handleNewProjectClick()
    this.setState({
      projects: savedProjects,
      isEditProjectMode: false,
      isEditBulletMode: false
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
      editProjectId: projectId,
      addBulletClickCount: 1

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
    const projectName = this.state.projectName;
    const projectDate = this.state.projectDate;
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
        project.projectName = projectName;
        project.projectDate = projectDate;
      }
      return project
    });
    this.setState({
      projects: updatedProjects,
      projectBullets: updatedBullets,
      isEditBulletMode: false,
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
      projectBullets: updatedBullets,
      isEditBulletMode: false,
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
    const editProjectId = this.state.editProjectId
    if (isProjectsFormOn) {
      return (
        <ProjectsForm
          projectName={projectName}
          projectDate={projectDate}
          projectBullet={projectBullet}
          projects={projects}
          isEditProjectMode={isEditProjectMode}
          isEditBulletMode={isEditBulletMode}
          editProjectId={editProjectId}
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
