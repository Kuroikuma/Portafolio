import './app.style.css'
import React from 'react'
import { Home } from '../home/home'
import { Skill } from '../skill/skills'
import caret from '../../../Assets/angulo-de-flecha-hacia-arriba.png'
import { Project } from '../project/project'
import { Contact } from '../Contact/contact'
import { useScroll } from '../../hooks/useScroll'
import Helmet from 'react-helmet'
import { Cert } from '../cert/cert'

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
      <Home flag={false} />
      <Skill flag={false} />
      <Cert flag={false} />
      <Project flag={false} />
      <Contact flag={false} />
    </div>
  )
}
