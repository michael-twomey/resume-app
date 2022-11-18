import NewProjectButton from "./NewProjectButton";

export default function UpdateButtons(props) {
  if (props.isEditProjectMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <div className="proj-adv-update-del-btn-container">
          <button className="btn proj-adv-save-btn" onClick={props.handleSaveProjectClick}>Save</button>
          <button className="btn proj-adv-del-btn" onClick={props.handleDeleteProjectClick}>Delete</button>
        </div>
        <NewProjectButton
          projects={props.projects}
          handleNewProjectClick={props.handleNewProjectClick} />
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  }
  if (props.isEditBulletMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <NewProjectButton
          projects={props.projects}
          handleNewProjectClick={props.handleNewProjectClick} />
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  } 
  return (
    <div className="proj-adv-form-btm-btns">
        <NewProjectButton
          projects={props.projects}
          handleNewProjectClick={props.handleNewProjectClick} />
      <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  );
}
