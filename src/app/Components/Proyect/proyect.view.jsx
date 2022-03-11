import './proyect.style.css'
import { ProyectViewCard } from './proyect-view-card'
import { Title } from './title'
import { useEffect, useState } from 'react'

export const ProyectView = ({ PageProyectRef, project }) => {
  const [counter, setCounter] = useState(0)
  const [newProject, setNewProject] = useState([])

  const nextCounter = () => {
    if (counter < 4) {
      setCounter(counter + 1)
    }
  }
  const previewCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  useEffect(() => {
    const handleProject = () => {
      switch (counter) {
        case 0:
          setNewProject(project.slice(0, 2))
          break
        case 1:
          setNewProject(project.slice(0, 4))
          break
        case 2:
          setNewProject(project.slice(0, 6))
          break
        case 3:
          setNewProject(project.slice(0, 8))
          break
        case 4:
          setNewProject(project.slice(0, 11))
          break

        default:
          break
      }
    }
    handleProject()
  }, [counter, project])

  return (
    <div ref={PageProyectRef} className="ProyectContainer">
      <Title />
      {newProject &&
        newProject.map((item, index) => (
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
