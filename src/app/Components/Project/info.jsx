import { useNavigate } from 'react-router-dom'
import { Button } from './button'
import { GroupButton } from './buttonGroup'

export const InfoProject = (props) => {
  const { name, descripcion, technologies, url_code, url_demo, id } = props
  let navigate = useNavigate()
  const goDetails = () => {
    navigate(`/project_details/${id}`)
  }
  return (
    <div className="ProjectContainer__Card__info">
      <div className="ProjectContainer__Card__info__title">
        <h1>{name}</h1>
      </div>
      <GroupButton>
        {technologies &&
          technologies.map((item) => (
            <Button key={`${id}${item}`} value={item} />
          ))}
      </GroupButton>
      <div className="ProjectContainer__Card__info__text">
        <p>{descripcion}</p>
      </div>
      <div className="ProjectContainer__Card__info__link">
        <a href={url_code}>View Code</a>
        <a href={url_demo}>View Project</a>
        <p onClick={goDetails}>View Details</p>
      </div>
    </div>
  )
}
