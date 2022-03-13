import { useOnScreen } from '../../hooks/useOnScreen'
import { GalleryColumn } from './gallery-column'
import style from './gallery.module.css'

export const Gallery = ({ columns }) => {
  const [galleryRef, showGallery] = useOnScreen({
    rootMargin: '-70px',
  })
  return (
    <div
      ref={galleryRef}
      className={
        showGallery ? `${style.container} ${style.show}` : `${style.container}`
      }
    >
      {columns &&
        columns.map((item, index) => <GalleryColumn key={index} item={item} />)}
    </div>
  )
}
