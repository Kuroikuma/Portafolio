import { useState } from 'react'
import { useTitle } from '../../hooks/useTitle'
import { HomeView } from './home.view'

export const Home = ({ setHead }) => {
  const height = window.innerHeight
  const [show, setShow] = useState(false)

  const [HomeRef] = useTitle(setHead, 'Home')
  const dropDownHandler = (e) => {
    setShow(!show)
  }

  const ScrollChange = (event) => {
    let { name } = event.target
    switch (name) {
      case 'Home':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setShow(false)
        break
      case 'Skills':
        window.scrollTo({ top: height, behavior: 'smooth' })
        setShow(false)
        break
      case 'Project':
        window.scrollTo({ top: height * 2, behavior: 'smooth' })
        setShow(false)
        break
      case 'Contact':
        window.scrollTo({ top: height * 3, behavior: 'smooth' })
        setShow(false)
        break

      default:
        break
    }
  }
  return (
    <HomeView
      HomeRef={HomeRef}
      dropDownHandler={dropDownHandler}
      ScrollChange={ScrollChange}
      show={show}
    />
  )
}
