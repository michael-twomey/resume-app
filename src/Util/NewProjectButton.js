export default function NewProject(props) {
  const projects = props.projects;
  const isFirstProject = projects.length < 1;
  if (isFirstProject) {
    return;
  }
  return <button className="btn proj-adv-new-btn" onClick={props.handleNewProjectClick}>New Project</button>
}