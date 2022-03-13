import '../../css/title.css'

export const TitleView = ({ TitleRef, showTitle, text }) => {
  return (
    <div
      ref={TitleRef}
      className={showTitle ? 'Container__Title show' : 'Container__Title'}
    >
      <h1>{text.toUpperCase()}</h1>
    </div>
  )
}
