export default function UpdateButtons(props) {
  if (props.isEditProjectMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <div className="proj-adv-update-del-btn-container">
          <button className="btn proj-adv-save-btn" onClick={props.handleSaveProjectClick}>Save</button>
          <button className="btn proj-adv-del-btn" onClick={props.handleDeleteProjectClick}>Delete</button>
        </div>
        <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  }
  if (props.isEditBulletMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <div className="proj-adv-update-del-btn-container">
          <button className="btn proj-adv-update-btn" onClick={props.handleUpdateBulletClick}>Update &#x2022;</button>
          <button className="btn proj-adv-del-btn" onClick={props.handleDeleteBulletClick}>Delete &#x2022;</button>
        </div>
        <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  } 
  return (
    <div className="proj-adv-form-btm-btns">
      <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
      <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  );
}
