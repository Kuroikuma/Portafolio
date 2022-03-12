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
      <div className="dropdown">
        <button onClick={dropDownHandler}></button>
      </div>
      <div className={`NavBar`}>
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
