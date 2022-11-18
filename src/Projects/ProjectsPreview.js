export default function ProjectsPreview(props) {
  const projects = props.projects;
  const editProjectId = props.editProjectId;
  return (
    <ul className="proj-adv-list">
      {projects.map(project => {
        const projectName = project.projectName;
        const projectDate = project.projectDate;
        const projectBullets = project.projectBullets;
        const projectId = project.id;
        const projectKey = project.key;
        return (
          <li className={editProjectId == projectId ? "proj-adv-prev-container" : ""} id={projectId} key={projectKey}>
            <p className="proj-adv-form-name" onClick={props.handleProjectNameClick}>{projectName}</p>
            <p className="proj-adv-form-date">{projectDate}</p>
            {projectBullets.map(bullet => {
              const bulletText = bullet.bulletText;
              const bulletId = bullet.id;
              const bulletKey = bullet.key;
              return (
                <div className="bullet-container" id={bulletId} key={bulletKey} onClick={props.handleBulletClick}>
                  <p>&#x2022;</p>
                  <p className="proj-adv-form-bullet">{bulletText}</p>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}
