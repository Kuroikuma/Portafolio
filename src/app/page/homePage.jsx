import Helmet from 'react-helmet'
import { Home } from '../Components/Home/home'

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
    </>
  )
}
