import './proyect.style.css'
import { ProyectViewCard } from './proyect-view-card'
import { Title } from './title'
import { useState } from 'react'

export const ProyectView = ({ project, setUrl }) => {
  const [counter, setCounter] = useState(0)

  console.log(project)
  const nextCounter = () => {
    if (counter < 4) {
      setCounter(counter + 1)
      setUrl(project.next)
    }
  }
  const previewCounter = () => {
    console.log(project.previous)
    if (counter > 0) {
      setCounter(counter - 1)
      setUrl(project.previous ? project.previous : '')
    }
  }

  return (
    <div className="ProyectContainer">
      <Title />
      {project.result &&
        project.result.map((item, index) => (
          <ProyectViewCard
            key={`${item.id}${item.name}`}
            type={index % 2 === 0 ? 'left' : 'right'}
            project={item}
          />
        ))}
      <div className="ProyectContainer__ButtonGroup">
        <button onClick={previewCounter} className="ProyectContainer__Button">
          Preview
        </button>
        <p>{counter}</p>
        <button onClick={nextCounter} className="ProyectContainer__Button">
          Next
        </button>
      </div>
    </div>
  )
}
