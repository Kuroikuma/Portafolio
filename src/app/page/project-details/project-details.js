import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectById } from '../../../services/services-project'
import { useMasonry } from '../../hooks/useMasonry'
import { ProjectDetailsView } from './project-detail.view'

export const ProjectDetails = () => {
  const [technologies, setTechnologies] = useState([])
  const [image, setImage] = useState()
  const [columns, setData] = useMasonry()
  let params = useParams()

  useEffect(() => {
    getProjectById(params.id).then((response) => {
      setData(response.imgs)
      setImage(response.imgs[0])
      setTechnologies(response.technologies)
    })
  }, [])
  return (
    <ProjectDetailsView
      technologies={technologies}
      image={image}
      columns={columns}
    />
  )
}
