import React from 'react';
import ProjAdvForm from './ProjAdvForm';
import ProjAdvResume from './ProjAdvRes';

export default class ProjAdv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      bullet: '',
      bullets: [],
      id: 0,
      projsAdvs: [],
      isEditProjAdvMode: false,
      isEditBulletMode: false,
      editProjAdvId: 0,
      editBulletId: 0,
      addBulletClickCount: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBulletBtnClick = this.handleBulletBtnClick.bind(this);
    this.handleNewProjAdvClick = this.handleNewProjAdvClick.bind(this);
    this.handleProjAdvNameClick = this.handleProjAdvNameClick.bind(this);
    this.handleSaveProjAdvClick = this.handleSaveProjAdvClick.bind(this);
    this.handleDeleteProjAdvClick = this.handleDeleteProjAdvClick.bind(this);
    this.handleBulletClick = this.handleBulletClick.bind(this);
    this.handleUpdateBulletClick = this.handleUpdateBulletClick.bind(this);
    this.handleDeleteBulletClick = this.handleDeleteBulletClick.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleBulletBtnClick(e) {
    e.preventDefault();
    const bullet = this.state.bullet;
    if (!bullet) {
      return;
    }
    const isEditProjAdvMode = this.state.isEditProjAdvMode;
    let addBulletClickCount = this.state.addBulletClickCount;
    if (e.target.textContent === 'Update Bullet') {
      this.updateBullet();
    } else if (addBulletClickCount === 0 && !isEditProjAdvMode) {
      this.handleFirstBulletBtnClick();
    } else if (isEditProjAdvMode) {
      const editProjAdvId = this.state.editProjAdvId
      this.handleAddBulletBtnClick(editProjAdvId);
    } else {
      const projAdvId = this.state.id;
      this.handleAddBulletBtnClick(projAdvId);
    }
    const updatedAddBulletClickCount = addBulletClickCount + 1;
    this.setState({ addBulletClickCount: updatedAddBulletClickCount });
  }

  handleFirstBulletBtnClick() {
    const name = this.state.name;
    const date = this.state.date;
    const updatedBullets = this.addBullet();
    const id = generateId();
    const key = id;
    const projAdv = {
      name,
      date,
      bullets: updatedBullets,
      id,
      key
    };
    const projsAdvs = this.state.projsAdvs;
    const updatedProjsAdvs = projsAdvs.concat(projAdv);
    this.setState({
      bullet: '',
      bullets: updatedBullets,
      id,
      editProjAdvId: id,
      projsAdvs: updatedProjsAdvs
    });
    return projAdv;
  }

  handleAddBulletBtnClick(projAdvId) {
    const projsAdvs = this.state.projsAdvs;
    const name = this.state.name;
    const date = this.state.date;
    const updatedBullets = this.addBullet();
    const updatedProjsAdvs = projsAdvs.map(projAdv => {
      if (projAdv.id == projAdvId) {
        projAdv.name = name;
        projAdv.date = date;
        projAdv.bullets = updatedBullets;
      }
      return projAdv;
    });
    this.setState({
      bullet: '',
      bullets: updatedBullets,
      projsAdvs: updatedProjsAdvs,
    });
  }

  addBullet() {
    const bulletText = this.state.bullet;
    const id = generateId();
    const key = id;
    const bullet = {
      bulletText,
      id,
      key
    };
    const projsAdvs = this.state.projsAdvs;
    const isEditProjAdvMode = this.state.isEditProjAdvMode;
    let bullets = []
    if (isEditProjAdvMode) {
      const editProjAdvId = this.state.editProjAdvId;
      const editProjAdv = projsAdvs.filter(projAdv => projAdv.id == editProjAdvId)[0];
      bullets = editProjAdv.bullets;
    } else {
      bullets = this.state.bullets;
    }
    const updatedBullets = bullets.concat(bullet);
    return updatedBullets;
  }

  handleNewProjAdvClick() {
    this.setState({
      name: '',
      date: '',
      bullet: '',
      bullets: [],
      isEditProjAdvMode: false,
      isEditBulletMode: false,
      editProjAdvId: 0,
      addBulletClickCount: 0
    });
  }

  handleProjAdvNameClick(e) {
    const id = getId(e);
    const projsAdvs = this.state.projsAdvs;
    const clickedProjAdv = projsAdvs.filter(projAdv => projAdv.id == id)[0];
    const clickedName = clickedProjAdv.name;
    const clickedDate = clickedProjAdv.date;
    this.setState({
      name: clickedName,
      date: clickedDate,
      isEditProjAdvMode: true,
      editProjAdvId: id
    });
  }

  handleSaveProjAdvClick() {
    const name = this.state.name;
    const date = this.state.date;
    const editProjectAdvId = this.state.editProjAdvId;
    const projsAdvs = this.state.projsAdvs;
    const updatedProjsAdvs = projsAdvs.map(projAdv => {
      if (projAdv.id == editProjectAdvId) {
        projAdv.name = name;
        projAdv.date = date;
      }
      return projAdv;
    })
    this.handleNewProjAdvClick();
    this.setState({ projsAdvs: updatedProjsAdvs });
  }

  handleDeleteProjAdvClick() {
    const deleteProjAdvId = this.state.editProjAdvId;
    const projsAdvs = this.state.projsAdvs;
    const savedProjsAdvs = projsAdvs.filter(projAdv => projAdv.id != deleteProjAdvId);
    this.handleNewProjAdvClick()
    this.setState({
      projsAdvs: savedProjsAdvs,
      isEditProjAdvMode: false,
      isEditBulletMode: false
     });
  }

  handleBulletClick(e) {
    const bulletId = getId(e);
    let projAdvTarget = e.target;
    while (projAdvTarget.id == "" || projAdvTarget.id === bulletId) {
      projAdvTarget = projAdvTarget.parentNode;
    }
    const projAdvId = projAdvTarget.id;
    this.setState({
      isEditBulletMode: true,
      editBulletId: bulletId,
      editProjAdvId: projAdvId,
      addBulletClickCount: 1
    });
    this.updateForm(projAdvId, bulletId)
  }

  updateForm(projectId, bulletId) {
    const projsAdvs = this.state.projsAdvs;
    const editProjAdv = projsAdvs.filter(projAdv => projAdv.id == projectId)[0];
    const bullets = editProjAdv.bullets;
    const editBullet = bullets.filter(bullet => bullet.id == bulletId)[0];
    this.setState({
      name: editProjAdv.name,
      date: editProjAdv.date,
      bullet: editBullet.bulletText
    });
  }

  handleUpdateBulletClick() {
    const projAdvId = this.state.editProjAdvId;
    const bulletId = this.state.editBulletId;
    const projsAdvs = this.state.projsAdvs;
    const name = this.state.name;
    const date = this.state.date;
    const editProjAdv = projsAdvs.filter(projAdv => projAdv.id == projAdvId)[0];
    const editBullets = editProjAdv.bullets;
    const updatedBulletText = this.state.bullet;
    const updatedBullets = editBullets.map(bullet => {
      if (bullet.id == bulletId) {
        bullet.bulletText = updatedBulletText
      }
      return bullet;
    });
    const updatedProjsAdvs = projsAdvs.map(projAdv => {
      if (projAdv.id == projAdvId) {
        projAdv.name = name;
        projAdv.date = date;
        projAdv.bullets = updatedBullets;
      }
      return projAdv
    });
    this.setState({
      projsAdvs: updatedProjsAdvs,
      bullets: updatedBullets,
      bullet: '',
      isEditBulletMode: false,
      isEditProjAdvMode: true
    });
  }

  handleDeleteBulletClick() {
    const projAdvId = this.state.editProjAdvId;
    const bulletId = this.state.editBulletId;
    const projsAdvs = this.state.projsAdvs;
    const editProjAdv = projsAdvs.filter(projAdv => projAdv.id == projAdvId)[0];
    const editBullets = editProjAdv.bullets;
    const updatedBullets = editBullets.filter(bullet => bullet.id != bulletId);
    const updatedProjsAdvs = projsAdvs.map(projAdv => {
      if (projAdv.id == projAdvId) {
        projAdv.bullets = updatedBullets;
      }
      return projAdv;
    });
    this.setState({
      projsAdvs: updatedProjsAdvs,
      bullets: updatedBullets,
      bullet: '',
      isEditBulletMode: false,
      isEditProjAdvMode: true
    });
  }

  render() {
    const isResumeOn = this.props.isResumeOn;
    const isProjAdvFormOn = this.props.isProjAdvFormOn;
    const name = this.state.name;
    const date = this.state.date;
    const bullet = this.state.bullet;
    const projsAdvs = this.state.projsAdvs;
    const isEditProjAdvMode = this.state.isEditProjAdvMode;
    const isEditBulletMode = this.state.isEditBulletMode;
    const editProjAdvId = this.state.editProjAdvId
    if (isProjAdvFormOn) {
      return (
        <ProjAdvForm
          heading={this.props.heading}
          label={this.props.label}
          name={name}
          date={date}
          bullet={bullet}
          projsAdvs={projsAdvs}
          isEditProjAdvMode={isEditProjAdvMode}
          isEditBulletMode={isEditBulletMode}
          editProjAdvId={editProjAdvId}
          handleInputChange={this.handleInputChange}
          handleBulletBtnClick={this.handleBulletBtnClick}
          handleNewProjAdvClick={this.handleNewProjAdvClick}
          handleProjAdvNameClick={this.handleProjAdvNameClick}
          handleSaveProjAdvClick={this.handleSaveProjAdvClick}
          handleDeleteProjAdvClick={this.handleDeleteProjAdvClick}
          handleBulletClick={this.handleBulletClick}
          handleUpdateBulletClick={this.handleUpdateBulletClick}
          handleDeleteBulletClick={this.handleDeleteBulletClick}
          handlePrevClick={this.props.handleProjAdvPrevClick} />
      );
    } else if (isResumeOn) {
      return (
        <ProjAdvResume 
          projsAdvs={projsAdvs}
          heading={this.props.heading} />);
    } return;
  }
}

function generateId() {
  return Math.random();
}

function getId(e) {
    let target = e.target;
    while (target.id == "") {
      target = target.parentNode;
    }
    return target.id;
}