import './contact.style.css'
import { useTitle } from '../../hooks/useTitle'

export const Contact = (props) => {
  const { setHead } = props

  const [ContactRef] = useTitle(setHead, 'Contact')
  return (
    <div ref={ContactRef} className="ContactContainer">
      <div className="ContactContainer__Circle"></div>
      <div className="ContactContainer__info">
        <div className="ContactContainer__info__title">
          <h1>¿Alguna duda? Contactame</h1>
        </div>
        <div className="ContactContainer__info__whatsApp">
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+505 83330593"
            target="_blank"
          >
            <button>(+505) 8333 - 0593</button>
          </a>
        </div>
        <div className="ContactContainer__info__space">
          <p>0</p>
        </div>
        <div className="ContactContainer__info__gmail">
          <p>
            Mándame un correo a <span> odiseo676@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}
