import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProyectView } from './proyect.view'
import { useTitle } from '../../hooks/useTitle'
import { getProyect } from '../../../services/services-proyect'
import { getProyectR } from '../../../redux/actions/proyect-action'

export const Proyect = ({ setHead }) => {
  const [PageProyectRef] = useTitle(setHead, 'Project')

  const project = useSelector((state) => state.proyectReducer.proyect)
  const dispatch = useDispatch()

  useEffect(() => {
    getProyect()
      .then((response) => {
        dispatch(getProyectR(response))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  return <ProyectView PageProyectRef={PageProyectRef} project={project} />
}
