import React from 'react'
import '../Stylesheets/resume-buttons.css'

export default function ResumeButtons (props) {
  if (props.isResumeOn && props.areResumeBtnsOn) {
    return (
      <div className="res-btn-row">
        <button className="res-btn" data-text="Contact" onClick={props.handleContactResClick}>
          <span className="btn-span">Contact</span>
        </button>
        <button className="res-btn" data-text="Skills" onClick={props.handleSkillsResClick}>
          <span className="btn-span">Skills</span>
        </button>
        <button className="res-btn" data-text="Projects" onClick={props.handleProjectsResClick}>
          <span className="btn-span">Projects</span>
        </button>
        <button className="res-btn" data-text="Adventures" onClick={props.handleAdventuresResClick}>
          <span className="btn-span">Adventures</span>
        </button>
        <button className="res-btn" data-text="Export" onClick={props.handleExportClick}>
          <span className="btn-span">Export</span>
        </button>
      </div>
    )
  } else if (props.isResumeOn) {
    return (
      <div className="reset" onClick={props.handleResetResBtnsClick}>.</div>
    )
  }
}
