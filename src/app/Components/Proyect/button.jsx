export const Button = ({ value }) => {
  return (
    <button
      name={value}
      className={`ProyectContainer__View__ButtonGroup__item`}
    >
      {value}
    </button>
  )
}
