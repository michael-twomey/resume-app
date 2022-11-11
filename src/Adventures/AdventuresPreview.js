import React from 'react';

export default function AdventuresPreview(props) {
  const adventures = props.adventures;
  return (
    <ul className="projects-list">
      {adventures.map(adventure => {
        const adventureName = adventure.adventureName;
        const adventureDate = adventure.adventureDate;
        const adventureBullets = adventure.adventureBullets;
        return (
          <li className="project-container">
            <p className="proj-form-name">{adventureName}</p>
            <p className="proj-form-date">{adventureDate}</p>
            {adventureBullets.map(bullet => {
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