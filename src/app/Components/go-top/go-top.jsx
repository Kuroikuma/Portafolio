import caret from '../../../Assets/angulo-de-flecha-hacia-arriba.png'
import { useScroll } from '../../hooks/useScroll'
import '../../css/go-top.css'

export const GoTop = () => {
  const [show, ScrollChange] = useScroll()
  return (
    <div
      onClick={ScrollChange}
      className={show ? 'showApp go-top-container' : 'go-top-container'}
    >
      <div className="go-top-button">
        <img src={caret} alt="goTop" />
      </div>
    </div>
  )
}
