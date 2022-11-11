import React from 'react';
import '../Stylesheets/ProjAdv/proj-adv-resume.css'

export default class ProjectsResume extends React.Component {
  render() {
    const projects = this.props.projects;
    return (
      <div className="proj-adv-res-container">
        <h2 className="proj-adv-head">Projects</h2>
        <div className="proj-adv-content-container">
          {projects.map(project => {
            const projectName = project.projectName;
            const projectDate = project.projectDate;
            const projectBullets = project.projectBullets;
            return (
              <div className="proj-adv-block">
                <div className="block-toprow">
                  <h3 className="block-name">{projectName}</h3>
                  <p className="block-date">{projectDate}</p>
                </div>
                <ul className="block-details-list">
                  {projectBullets.map(bullet => {
                    return (
                      <div className="block-detail">
                        <li>&#x2022;</li>
                        <li>{bullet}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
