import '../Stylesheets/resume-buttons.css';

export default function ResumeButtons(props) {
  if (props.isResumeOn) {
    return (
      <div className="res-btn-row">
        <button className="res-btn" data-text="Contact" onClick={props.handleContactResClick}>
          <span className="btn-span">Contact</span>
        </button>
        <button className="res-btn" data-text="Skills" onClick={props.handleSkillsResClick}>
          <span className="btn-span">Skills</span>
        </button>
      </div>
    );
  }
}