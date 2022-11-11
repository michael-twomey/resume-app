import React from 'react';
import Input from '../Util/Input';
import AdventuresPreview from './AdventuresPreview';
import '../Stylesheets/form.css'
import '../Stylesheets/ProjAdv/proj-adv-form.css';

export default function AdventuresForm(props) {
  return (
    <div className="proj-adv-form-container">
      <h1 className="heading">Adventures</h1>
      <form className="form">
        <Input 
          htmlFor={"adventure-name"}
          id={"adventure-name"}
          labelText={"Adventure Name:"}
          type={"text"}
          value={props.adventureName}
          varName={"adventureName"}
          handleInputChange={props.handleInputChange} />
        <Input
          htmlFor={"adventure-date"}
          id={"adventure-date"}
          labelText={"Adventure Date:"}
          type={"text"}
          value={props.adventureDate}
          varName={"adventureDate"}
          handleInputChange={props.handleInputChange} />
        <div className="label-input-container">
          <label htmlFor="adventure-bullet">Adventure Bullet:</label>
          <textarea
            id="adventure-bullet"
            name="adventureBullet"
            rows="4"
            value={props.adventureBullet}
            onChange={props.handleInputChange} >
          </textarea>
        </div>
        <button className="btn proj-adv-add-btn" onClick={props.handleAddBulletClick}>Add Bullet</button>
      </form>
      <AdventuresPreview adventures={props.adventures} />
      <button className="btn proj-adv-new-btn" onClick={props.handleNewAdventureClick}>New Adventure</button>
      <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  );
}
