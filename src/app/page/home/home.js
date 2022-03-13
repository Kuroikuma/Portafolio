import { Navigation } from '../../Components/navigate/nav'
import '../../css/home.style.css'
import { Info } from '../../Components/Home/info'
import { Profile } from '../../Components/Home/profile'
import Helmet from 'react-helmet'

export const Home = ({ flag = true }) => {
  return (
    <div className="HomeContainer">
      {flag && (
        <Helmet>
          <title>Home</title>
        </Helmet>
      )}
      <Navigation />
      <div className="homeContent">
        <Info />
        <Profile />
      </div>
    </div>
  )
}
