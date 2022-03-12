import Helmet from 'react-helmet'
import { Cert } from '../Components/cert/cert'
import { Navigation } from '../Components/navigate/nav'

export const CertPage = () => {
  return (
    <>
      <Helmet>
        <title>Cert</title>
      </Helmet>
      <Navigation />
      <Cert />
    </>
  )
}
