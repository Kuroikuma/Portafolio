import './home.style.css'
import { Info } from './info'
import { Navigation } from './nav'
import { Profile } from './profile'

export const HomeView = ({ HomeRef, dropDownHandler, ScrollChange, show }) => {
  return (
    <div ref={HomeRef} className="HomeContainer">
      <div className="dropdown">
        <button onClick={dropDownHandler}></button>
      </div>
      <Navigation show={show} ScrollChange={ScrollChange} />
      <div className="homeContent">
        <Info />
        <Profile />
      </div>
    </div>
  )
}
