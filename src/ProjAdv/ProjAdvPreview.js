import React from 'react'

export default function ProjAdvPreview (props) {
  const projsAdvs = props.projsAdvs
  const editProjAdvId = props.editProjAdvId
  return (
    <ul className="proj-adv-list">
      {projsAdvs.map(projAdv => {
        const name = projAdv.name
        const date = projAdv.date
        const bullets = projAdv.bullets
        const id = projAdv.id
        const key = projAdv.key
        return (
          <li className={editProjAdvId == id ? 'proj-adv-prev-container' : ''} id={id} key={key}>
            <p className="proj-adv-form-name" onClick={props.handleProjAdvNameClick}>{name}</p>
            <p className="proj-adv-form-date">{date}</p>
            {bullets.map(bullet => {
              const bulletText = bullet.bulletText
              const bulletId = bullet.id
              const bulletKey = bullet.key
              return (
                <div className="bullet-container" id={bulletId} key={bulletKey} onClick={props.handleBulletClick}>
                  <p>&#x2022;</p>
                  <p className="proj-adv-form-bullet">{bulletText}</p>
                </div>
              )
            })}
          </li>
        )
      })}
    </ul>
  )
}
