import Helmet from 'react-helmet'
import { Navigation } from '../Components/navigate/nav'
import { Proyect } from '../Components/Proyect/proyect'

export const ProjectPage = () => {
  return (
    <>
      <Helmet>
        <title>Project</title>
      </Helmet>
      <Navigation />
      <Proyect />
    </>
  )
}
