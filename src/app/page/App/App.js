import './App.css'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Home } from '../../Components/Home/home'
import { Skill } from '../../Components/Skills/skills'
import caret from '../../../Assets/angulo-de-flecha-hacia-arriba.png'
import { Proyect } from '../../Components/Proyect/proyect'
import { Contact } from '../../Components/Contact/contact'
import { useScroll } from '../../hooks/useScroll'
function App() {
  const [show, head, setHead, ScrollChange] = useScroll()

  return (
    <div className="app">
      <Helmet>
        <title>{head}</title>
      </Helmet>
      <div
        onClick={ScrollChange}
        className={show ? 'showApp go-top-container' : 'go-top-container'}
      >
        <div className="go-top-button">
          <img src={caret} alt="goTop" />
        </div>
      </div>
      <Home setHead={setHead} />
      <Skill setHead={setHead} />
      <Proyect setHead={setHead} />
      <Contact setHead={setHead} />
    </div>
  )
}

export default App
