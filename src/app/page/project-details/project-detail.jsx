import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProyectById } from '../../../services/services-proyect'
import { Gallery } from '../../Components/gallery/gallery'
import { Navigation } from '../../Components/navigate/nav'
import { useMasonry } from '../../hooks/useMasonry'
import './project-details.style.css'

export const ProjectDetails = () => {
  const [technologies, setTechnologies] = useState([])
  const [image, setImage] = useState()
  const [columns, setData] = useMasonry()
  let params = useParams()

  useEffect(() => {
    getProyectById(params.id).then((response) => {
      setData(response.imgs)
      setImage(response.imgs[0])
      setTechnologies(response.technologies)
    })
  }, [])
  return (
    <>
      <div className="ProjectDetailsContainer">
        <Navigation />
        <div className="ProjectDetailsContainer__title">
          <h1>AMERICAN CHEESE</h1>
        </div>
        <div className="ProjectDetailsContainer__content">
          <div className="ProjectDetailsContainer__content__image">
            <img src={image} alt="" />
          </div>
          <div className="ProjectDetailsContainer__content__buttonGroup">
            {technologies &&
              technologies.map((item, index) => (
                <button
                  key={index}
                  className="ProjectDetailsContainer__content__buttonGroup__item"
                >
                  {item}
                </button>
              ))}
          </div>
        </div>
        <div className="ProjectDetailsContainer__gallery">
          <div className="ProjectDetailsContainer__gallery__title">
            <h1>Gallery Project Images</h1>
          </div>
          <Gallery columns={columns} />
        </div>
      </div>
    </>
  )
}
