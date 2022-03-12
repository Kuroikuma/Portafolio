import style from './gallery.module.css'
import { GalleryItem } from './gallery-item'

export const GalleryColumn = ({ item }) => {
  return (
    <div className={style.item}>
      {item &&
        item.map((element, index) => (
          <GalleryItem key={index} element={element} />
        ))}
    </div>
  )
}
