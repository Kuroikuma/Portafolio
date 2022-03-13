import '../../css/contact.style.css'
import image from '../../../Assets/kindpng_3938892.png'
import { Navigation } from '../../Components/navigate/nav'
import Helmet from 'react-helmet'

export const Contact = ({ flag = true }) => {
  return (
    <div className="ContactContainer">
      {flag && (
        <>
          <Helmet>
            <title>Skill</title>
          </Helmet>
          <Navigation />
        </>
      )}
      <div className="ContactContainer__title">
        <div className="ContactContainer__title__h1">
          <h1>Contact</h1>
        </div>

        <p>Get in touch</p>
      </div>
      <div className="ContactContainer__content">
        <div className="ContactContainer__content__buttonGroup">
          <button className="ContactContainer__content__buttonGroup__item">
            <h2>whatsapp</h2>
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=+505 83330593"
              target="_blank"
            >
              (+505)83330593
            </a>
          </button>
          <button className="ContactContainer__content__buttonGroup__item">
            <h2>Email</h2>
            <a href="mailto:odiseioj676@gmail.com">odiseioj676@gmail.com</a>
          </button>
          <button className="ContactContainer__content__buttonGroup__item">
            <h2>Location</h2>
            <p>Juipalpa,Chontales Nicaragua</p>
          </button>
        </div>
        <div className="ContactContainer__content__image">
          <img src={image} alt="Get in touch" />
        </div>
      </div>
    </div>
  )
}
