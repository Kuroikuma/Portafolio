export const ButtonNav = ({ ScrollChange, type }) => {
  return (
    <div className="HomeContainer__NavBar__Right__item">
      <button name={type} onClick={ScrollChange}>
        {type}
      </button>
    </div>
  )
}
