import React from 'react'
import '../../css/project.style.css'
import { useOnScreen } from '../../hooks/useOnScreen'
import { InfoProject } from './info'

export const ProjectViewCard = ({ type = 'left', project }) => {
  const [ViewProjectRef, showViewProject] = useOnScreen({
    rootMargin: '-100px',
  })
  return (
    <div
      ref={ViewProjectRef}
      className={
        showViewProject
          ? type === 'left'
            ? `ProjectContainer__View left show`
            : `ProjectContainer__View right show`
          : type === 'left'
          ? `ProjectContainer__View left`
          : `ProjectContainer__View right`
      }
    >
      <InfoProject
        name={project.name}
        descripcion={project.descripcion}
        technologies={project.technologies}
        url_code={project.url_code}
        url_demo={project.url_demo}
        id={project.id}
      />
      <div className="ProjectContainer__Card__img">
        <img src={project.imgs[1]} alt={project.imgs[1]} />
      </div>
    </div>
  )
}
