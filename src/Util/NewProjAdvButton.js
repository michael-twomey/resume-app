export default function NewProjAdvButton(props) {
  const projsAdvs = props.projsAdvs;
  const isFirstProjAdv = projsAdvs.length < 1;
  if (isFirstProjAdv) {
    return;
  }
  return <button className="btn proj-adv-new-btn" onClick={props.handleNewProjAdvClick}>New Project</button>
}