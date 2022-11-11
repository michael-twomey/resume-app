import React from 'react';
import '../Stylesheets/maincontent-resume.css'

export default function AventuresResume(props) {
  const adventures = props.adventures;
  return (
    <div className="maincontent-res-container">
      <h2 className="maincontent-head">Adventures</h2>
      <div className="maincontent-container">
        {adventures.map(adventure => {
          const adventureName = adventure.adventureName;
          const adventureDate = adventure.adventureDate;
          const adventureBullets = adventure.adventureBullets;
          return (
            <div className="maincontent-block">
              <div className="block-toprow">
                <h3 className="block-name">{adventureName}</h3>
                <p className="block-date">{adventureDate}</p>
              </div>
              <ul className="block-details-list">
                {adventureBullets.map(bullet => {
                  return (
                    <div className="block-detail">
                      <li>&#x2022;</li>
                      <li>{bullet}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}