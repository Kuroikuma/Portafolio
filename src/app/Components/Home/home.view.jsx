import { Navigation } from '../navigate/nav'
import './home.style.css'
import { Info } from './info'
import { Profile } from './profile'

export const HomeView = () => {
  return (
    <div className="HomeContainer">
      <Navigation />
      <div className="homeContent">
        <Info />
        <Profile />
      </div>
    </div>
  )
}
