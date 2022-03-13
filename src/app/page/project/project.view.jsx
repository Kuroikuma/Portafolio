import '../../css/project.style.css'
import { ProjectViewCard } from '../../Components/Project/project-view-card'
import { Title } from '../../container/title/title'
import Helmet from 'react-helmet'
import { Navigation } from '../../Components/navigate/nav'

export const ProjectView = (props) => {
  const { project, flag, counter, nextCounter, previewCounter } = props

  return (
    <div className="ProjectContainer">
      {flag && (
        <>
          <Helmet>
            <title>Skill</title>
          </Helmet>
          <Navigation />
        </>
      )}
      <Title text="my Project" />
      {project.result &&
        project.result.map((item, index) => (
          <ProjectViewCard
            key={`${item.id}${item.name}`}
            type={index % 2 === 0 ? 'left' : 'right'}
            project={item}
          />
        ))}
      <div className="ProjectContainer__ButtonGroup">
        <button onClick={previewCounter} className="ProjectContainer__Button">
          Preview
        </button>
        <p>{counter}</p>
        <button onClick={nextCounter} className="ProjectContainer__Button">
          Next
        </button>
      </div>
    </div>
  )
}
