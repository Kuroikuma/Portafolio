import { GalleryColumn } from './gallery-column'
import style from './gallery.module.css'

export const Gallery = ({ columns }) => {
  return (
    <div className={style.container}>
      {columns &&
        columns.map((item, index) => <GalleryColumn key={index} item={item} />)}
    </div>
  )
}
