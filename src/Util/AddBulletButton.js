export default function AddBulletButton(props) {
  const isEditBulletMode = props.isEditBulletMode;
  const isUpdateBulletMode = props.isUpdateBulletMode;
  if (isEditBulletMode) {
    return (
      <div className="proj-adv-update-del-btn-container">
      <button className="btn proj-adv-update-btn" onClick={props.handleUpdateBulletClick}>&#x2022; Update &#x2022;</button>
      <button className="btn proj-adv-del-btn" onClick={props.handleDeleteBulletClick}>&#x2022; Delete &#x2022;</button>
    </div>
    );
  } else {
    return <button className="btn proj-adv-add-btn" onClick={props.handleAddBulletClick}>Add Bullet</button>;
  }
}