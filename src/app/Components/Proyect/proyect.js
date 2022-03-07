import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useOnScreen } from '../../hooks/useOnScreen'
import { sigProyect, sigImg } from '../../../redux/actions/proyect-action'
import { ProyectView } from './proyect.view'
import { useTitle } from '../../hooks/useTitle'

export const Proyect = ({ setHead }) => {
  const [PageProyectRef] = useTitle(setHead, 'Project')

  const dispatch = useDispatch()
  const numberPro = useSelector((state) => state.proyectReducer.numberPro)
  const proyect = useSelector((state) => state.proyectReducer.proyect)

  
  const [ViewProyectRef, showViewProyect] = useOnScreen({
    rootMargin: '-100px',
  })
 

  ////// ACTION CREATOR

  const oneProyect = () => {
    dispatch(sigProyect('primeroPro'))
  }
  const secondProyect = () => {
    dispatch(sigProyect('segundoPro'))
  }
  const threeProyect = () => {
    dispatch(sigProyect('terceroPro'))
  }

  const resetImage = () => {
    dispatch(sigImg('primeroImg'))
  }

  const handleNextProject = () => {
    switch (numberPro) {
      case 'primeroPro':
        secondProyect()
        resetImage()
        break
      case 'segundoPro':
        threeProyect()
        resetImage()
        break
      case 'terceroPro':
        oneProyect()
        resetImage()
        break
      default:
        break
    }
  }
  const handlePreviousProject = () => {
    switch (numberPro) {
      case 'terceroPro':
        secondProyect()
        resetImage()
        break
      case 'segundoPro':
        oneProyect()
        resetImage()
        break
      case 'primeroPro':
        threeProyect()
        resetImage()
        break

      default:
        break
    }
  }

  const changeProyect = (event) => {
    let { name } = event.target
    if (name === 'nextProject') {
      handleNextProject()
    } else if (name === 'previousProject') {
      handlePreviousProject()
    }
  }

  return (
    <ProyectView
      PageProyectRef={PageProyectRef}
      changeProyect={changeProyect}
      numberPro={numberPro}
      proyect={proyect}
      ViewProyectRef={ViewProyectRef}
      showViewProyect={showViewProyect}
    />
  )
}
