import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../icons/logo'
import { ButtonNav } from './buttonNav'
import './nav.style.css'

export const Navigation = () => {
  const [show, setShow] = useState(false)

  const dropDownHandler = (e) => {
    setShow(!show)
  }

  let navigate = useNavigate()

  const goMain = () => {
    navigate('/')
  }
  return (
    <>
      <button
        className={show ? 'dropdown dropdown--close' : 'dropdown'}
        onClick={dropDownHandler}
      >
        <div
          className={
            show ? 'dropdown__item dropdown__item--close' : 'dropdown__item'
          }
        ></div>
        <div
          className={
            show ? 'dropdown__item dropdown__item--close' : 'dropdown__item'
          }
        ></div>
        <div
          className={
            show ? 'dropdown__item dropdown__item--close' : 'dropdown__item'
          }
        ></div>
      </button>
      <div className={show ? `NavBar NavBar--show` : `NavBar`}>
        <button onClick={goMain} className="goMain">
          <Logo />
        </button>

        <div className={show ? `NavBar__Right show` : `NavBar__Right`}>
          <ButtonNav type="Home" />
          <ButtonNav type="Skills" />
          <ButtonNav type="Certificates" />
          <ButtonNav type="Project" />
          <ButtonNav type="Contact" />
        </div>
      </div>
    </>
  )
}
