import './app.style.css'
import React from 'react'
import { Home } from '../../Components/Home/home'
import { Skill } from '../../Components/Skills/skills'
import caret from '../../../Assets/angulo-de-flecha-hacia-arriba.png'
import { Proyect } from '../../Components/Proyect/proyect'
import { Contact } from '../../Components/Contact/contact'
import { useScroll } from '../../hooks/useScroll'
import Helmet from 'react-helmet'
import { Cert } from '../../Components/cert/cert'

export const App = () => {
  const [show, ScrollChange] = useScroll()

  return (
    <div className="app">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div
        onClick={ScrollChange}
        className={show ? 'showApp go-top-container' : 'go-top-container'}
      >
        <div className="go-top-button">
          <img src={caret} alt="goTop" />
        </div>
      </div>
      <Home />
      <Skill />
      <Cert />
      <Proyect />
      <Contact />
    </div>
  )
}
