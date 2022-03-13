import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProjectView } from './project.view'
import {
  getProject,
  getProjectPagination,
} from '../../../services/services-project'
import { getProjectR } from '../../../redux/actions/project-action'

export const Project = ({ flag = true }) => {
  const [url, setUrl] = useState('')
  const project = useSelector((state) => state.projectReducer.project)
  const dispatch = useDispatch()

  useEffect(() => {
    if (url) {
      getProjectPagination(url)
        .then((response) => {
          dispatch(getProjectR(response))
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      getProject()
        .then((response) => {
          dispatch(getProjectR(response))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [dispatch, url])

  const [counter, setCounter] = useState(1)

  const nextCounter = () => {
    if (counter < 5) {
      setCounter(counter + 1)
      setUrl(project.next)
    }
  }
  const previewCounter = () => {
    console.log(project.previous)
    if (counter > 1) {
      setCounter(counter - 1)
      setUrl(project.previous ? project.previous : '')
    }
  }

  return (
    <ProjectView
      project={project}
      setUrl={setUrl}
      flag={flag}
      counter={counter}
      nextCounter={nextCounter}
      previewCounter={previewCounter}
    />
  )
}
