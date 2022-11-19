import '../Stylesheets/ProjAdv/proj-adv-resume.css'

export default function ProjAdvResume(props) {
  const projsAdvs = props.projsAdvs;
  return (
    <div className="proj-adv-res-container">
      <h2 className="proj-adv-head">{props.heading}</h2>
      <div className="proj-adv-content-container">
        {projsAdvs.map(projAdv => {
          const name = projAdv.name;
          const date = projAdv.date;
          const bullets = projAdv.bullets;
          return (
            <div className="proj-adv-block">
              <div className="block-toprow">
                <h3 className="block-name">{name}</h3>
                <p className="block-date">{date}</p>
              </div>
              <ul className="block-details-list">
                {bullets.map(bullet => {
                  return (
                    <div className="block-detail">
                      <li>&#x2022;</li>
                      <li>{bullet.bulletText}</li>
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
