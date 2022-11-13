export default function UpdateButtons(props) {
  if (props.isUpdateMode) {
    return (
      <div className="proj-adv-form-btm-btns">
        <div className="proj-adv-update-del-btn-container">
          <button className="btn proj-adv-update-btn">Update</button>
          <button className="btn proj-adv-del-btn" onClick={props.handleProjectDeleteClick}>Delete</button>
        </div>
        <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
        <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
      </div>
    );
  } return (
    <div className="proj-adv-form-btm-btns">
      <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
      <button className="btn proj-adv-prev-btn" onClick={props.handlePrevClick}>Preview</button>
    </div>
  )
}
