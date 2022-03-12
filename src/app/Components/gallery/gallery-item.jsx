import style from './gallery.module.css'
import { useState } from 'react'

export const GalleryItem = ({ element }) => {
  const [hover, setHover] = useState(false)
  const handleHover = () => {
    setHover(!hover)
  }
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={style.img}
    >
      <img src={element} alt={element} />
      <div
        className={hover ? `${style.card} ${style.show}` : `${style.card}`}
      ></div>
    </div>
  )
}
