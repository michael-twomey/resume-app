import '../Stylesheets/Skills/skills-resume.css';

export default function SkillsResume(props) {
  return (
    <div className="skills-res-container">    
      <h2 className="skills-head">Skills</h2>
      <div className="skills-grid">
        <h3>Frontend</h3>
        <h3>Backend</h3>
        <ul className="skills-list frontend">{props.frontendSkills.map(skill => <li>{skill}</li>)}</ul>
        <ul className="skills-list backend">{props.backendSkills.map(skill => <li>{skill}</li>)}</ul>
      </div>
  ` </div>
  );
}
