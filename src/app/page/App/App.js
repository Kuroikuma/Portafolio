import './app.style.css'
import React from 'react'
import { Home } from '../home/home'
import { Skill } from '../skill/skills'
import { Project } from '../project/project'
import { Contact } from '../Contact/contact'

import Helmet from 'react-helmet'
import { Cert } from '../cert/cert'
import { GoTop } from '../../Components/go-top/go-top'

export const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <GoTop />
      <Home flag={false} />
      <Skill flag={false} />
      <Cert flag={false} />
      <Project flag={false} />
      <Contact flag={false} />
    </div>
  )
}
