import React from 'react'
import Input from '../Util/Input'
import ProjAdvPreview from './ProjAdvPreview'
import BulletButton from '../Util/BulletButton'
import UpdateButtons from '../Util/UpdateButtons'
import '../Stylesheets/form.css'
import '../Stylesheets/ProjAdv/proj-adv-form.css'

export default class ProjAdvForm extends React.Component {
  render () {
    return (
      <div className="proj-adv-form-container">
        <h1 className="heading">{this.props.heading}</h1>
        <form className="form">
          <Input
            htmlFor="name"
            id="name"
            labelText={this.props.label + ' Name:'}
            type="text"
            value={this.props.name}
            varName="name"
            handleInputChange={this.props.handleInputChange} />
          <Input
            htmlFor="date"
            id="date"
            labelText={this.props.label + ' Date:'}
            type="text"
            value={this.props.date}
            varName="date"
            handleInputChange={this.props.handleInputChange} />
          <div className="label-input-container">
            <label htmlFor="bullet">{this.props.label + ' Bullet:'}</label>
            <textarea
              id="bullet"
              name="bullet"
              rows="4"
              value={this.props.bullet}
              onChange={this.props.handleInputChange} >
            </textarea>
          </div>
          <BulletButton
            isEditBulletMode={this.props.isEditBulletMode}
            isUpdateBulletMode={this.props.isUpdateBulletMode}
            handleBulletBtnClick={this.props.handleBulletBtnClick}
            handleUpdateBulletClick={this.props.handleUpdateBulletClick}
            handleDeleteBulletClick={this.props.handleDeleteBulletClick} />
        </form>
        <ProjAdvPreview
          projsAdvs={this.props.projsAdvs}
          handleProjAdvNameClick={this.props.handleProjAdvNameClick}
          handleBulletClick={this.props.handleBulletClick}
          editProjAdvId={this.props.editProjAdvId} />
        <UpdateButtons
          isEditProjAdvMode={this.props.isEditProjAdvMode}
          isEditBulletMode={this.props.isEditBulletMode}
          projsAdvs={this.props.projsAdvs}
          handleSaveProjAdvClick={this.props.handleSaveProjAdvClick}
          handleDeleteProjAdvClick={this.props.handleDeleteProjAdvClick}
          handleNewProjAdvClick={this.props.handleNewProjAdvClick}
          handlePrevClick={this.props.handlePrevClick} />
      </div>
    )
  }
}
