import NewProjAdvButton from "./NewProjAdvButton";

export default function UpdateButtons(props) {
  if (props.isEditProjAdvMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <div className="proj-adv-update-del-btn-container">
          <button className="btn proj-adv-save-btn" onClick={props.handleSaveProjAdvClick}>Save</button>
          <button className="btn proj-adv-del-btn" onClick={props.handleDeleteProjAdvClick}>Delete</button>
        </div>
        <NewProjAdvButton
          projsAdvs={props.projsAdvs}
          handleNewProjAdvClick={props.handleNewProjAdvClick} />
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  }
  if (props.isEditBulletMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <NewProjAdvButton
          projsAdvs={props.projsAdvs}
          handleNewProjAdvtClick={props.handleNewProjAdvClick} />
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  } 
  return (
    <div className="proj-adv-form-btm-btns">
        <NewProjAdvButton
          projsAdvs={props.projsAdvs}
          handleNewProjAdvClick={props.handleNewProjAdvClick} />
      <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  );
}
