import { useNavigate } from 'react-router-dom'

export const ButtonNav = ({ type }) => {
  let navigate = useNavigate()
  const goPage = () => {
    let page = type.toLowerCase()
    navigate(`/${page}`)
  }
  return (
    <div className="NavBar__Right__item">
      <p onClick={goPage} name={type}>
        {type}
      </p>
    </div>
  )
}
