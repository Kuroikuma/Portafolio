import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { sigImg } from '../../../redux/actions/proyect-action'
import './proyect.style.css'
import { getProyectR } from '../../../redux/actions/proyect-action'
import './proyect.style.css'
import { getProyect } from '../../../services/services-proyect'

export const ProyectViewCard = (props) => {
  const { showViewProyect, ViewProyectRef } = props

  const numberImg = useSelector((state) => state.proyectReducer.numberImg)
  const numberPro = useSelector((state) => state.proyectReducer.numberPro)
  const proyect = useSelector((state) => state.proyectReducer.proyect)
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

  useEffect(() => {
    const ChangeImgTime = setTimeout(() => {
      console.log('Que pasho')
      switch (numberImg) {
        case 'primeroImg':
          dispatch(sigImg('segundoImg'))
          break
        case 'segundoImg':
          dispatch(sigImg('terceroImg'))
          break
        case 'terceroImg':
          dispatch(sigImg('cuartoImg'))
          break
        case 'cuartoImg':
          dispatch(sigImg('primeroImg'))
          break
        default:
          break
      }
    }, 5000)
    return () => clearTimeout(ChangeImgTime)
  }, [numberImg, dispatch])

  const changeImg = (event) => {
    let { name } = event.target
    console.log(name)
    dispatch(sigImg(name))
  }

  return (
    <div
      ref={ViewProyectRef}
      className={
        showViewProyect
          ? 'ProyectContainer__View show'
          : 'ProyectContainer__View'
      }
    >
      <div className="ProyectContainer__View__img">
        {proyect.map((item) =>
          numberPro === 'primeroPro' && item.name === 'PORTAFOLIO'
            ? item.imgs.map((img) => (
                <img className={`${numberImg} `} src={img} alt={item.name} />
              ))
            : numberPro === 'segundoPro' && item.name === 'AMERICAN CHEESE'
            ? item.imgs.map((img) => (
                <img className={`${numberImg} `} src={img} alt={item.name} />
              ))
            : numberPro === 'terceroPro' && item.name === 'MediCall'
            ? item.imgs.map((img) => (
                <img className={`${numberImg} `} src={img} alt={item.name} />
              ))
            : null
        )}
      </div>
      <div className="ProyectContainer__View__ButtonGroup">
        <button
          onClick={changeImg}
          name="primeroImg"
          className={
            numberImg === 'primeroImg'
              ? `ProyectContainer__View__ButtonGroup__item active`
              : `ProyectContainer__View__ButtonGroup__item`
          }
        ></button>
        <button
          onClick={changeImg}
          name="segundoImg"
          className={
            numberImg === 'segundoImg'
              ? `ProyectContainer__View__ButtonGroup__item active`
              : `ProyectContainer__View__ButtonGroup__item`
          }
        ></button>
        <button
          onClick={changeImg}
          name="terceroImg"
          className={
            numberImg === 'terceroImg'
              ? `ProyectContainer__View__ButtonGroup__item active`
              : `ProyectContainer__View__ButtonGroup__item`
          }
        ></button>
        <button
          onClick={changeImg}
          name="cuartoImg"
          className={
            numberImg === 'cuartoImg'
              ? `ProyectContainer__View__ButtonGroup__item active`
              : `ProyectContainer__View__ButtonGroup__item`
          }
        ></button>
      </div>
    </div>
  )
}
