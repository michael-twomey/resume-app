export default function ProjectsPreview(props) {
  const projects = props.projects;
  return (
    <ul className="proj-adv-list">
      {projects.map(project => {
        const projectName = project.projectName;
        const projectDate = project.projectDate;
        const projectBullets = project.projectBullets;
        const projectId = project.id;
        const projectKey = project.key;
        return (
          <li id={projectId} key={projectKey}>
            <p className="proj-adv-form-name" onClick={props.handleProjectClick}>{projectName}</p>
            <p className="proj-adv-form-date" onClick={props.handleProjectClick}>{projectDate}</p>
            {projectBullets.map(bullet => {
              return (
                <div className="bullet-container">
                  <p>&#x2022;</p>
                  <p className="proj-adv-form-bullet">{bullet}</p>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}
