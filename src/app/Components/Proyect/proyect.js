import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProyectView } from './proyect.view'
import { useTitle } from '../../hooks/useTitle'
import {
  getProyect,
  getProyectPagination,
} from '../../../services/services-proyect'
import { getProyectR } from '../../../redux/actions/proyect-action'

export const Proyect = ({ setHead }) => {
  const [PageProyectRef] = useTitle(setHead, 'Project')
  const [url, setUrl] = useState('')
  const project = useSelector((state) => state.proyectReducer.proyect)
  const dispatch = useDispatch()

  useEffect(() => {
    if (url) {
      getProyectPagination(url)
        .then((response) => {
          dispatch(getProyectR(response))
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      getProyect()
        .then((response) => {
          dispatch(getProyectR(response))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [dispatch, url])

  return (
    <ProyectView
      PageProyectRef={PageProyectRef}
      project={project}
      setUrl={setUrl}
    />
  )
}
