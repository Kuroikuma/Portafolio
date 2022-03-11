import React from 'react'
import './proyect.style.css'
import './proyect.style.css'
import { useOnScreen } from '../../hooks/useOnScreen'
import { InfoProject } from './info'

export const ProyectViewCard = ({ type = 'left', project }) => {
  const [ViewProyectRef, showViewProyect] = useOnScreen({
    rootMargin: '-100px',
  })
  console.log(project)
  return (
    <div
      ref={ViewProyectRef}
      className={
        showViewProyect
          ? type === 'left'
            ? `ProyectContainer__View left show`
            : `ProyectContainer__View right show`
          : type === 'left'
          ? `ProyectContainer__View left`
          : `ProyectContainer__View right`
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
      <div className="ProyectContainer__Card__img">
        <img src={project.imgs[1]} alt="" />
      </div>
    </div>
  )
}
