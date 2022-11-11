import React from 'react';

export default class ProjectsPreview extends React.Component {
  render() {
    const projects = this.props.projects;
    return (
      <ul className="proj-adv-list">
        {projects.map(project => {
          const projectName = project.projectName;
          const projectDate = project.projectDate;
          const projectBullets = project.projectBullets;
          return (
            <li>
              <p className="proj-form-name">{projectName}</p>
              <p className="proj-form-date">{projectDate}</p>
              {projectBullets.map(bullet => {
                return (
                  <div className="bullet-container">
                    <p>&#x2022;</p>
                    <p className="proj-form-bullet">{bullet}</p>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    );
  }
}
