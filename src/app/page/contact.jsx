import Helmet from 'react-helmet'
import { Contact } from '../Components/Contact/contact'
import { Navigation } from '../Components/navigate/nav'

export const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Navigation />
      <Contact />
    </>
  )
}
