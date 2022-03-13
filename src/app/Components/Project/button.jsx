export const Button = ({ value }) => {
  return (
    <button
      name={value}
      className={`ProjectContainer__View__ButtonGroup__item`}
    >
      {value}
    </button>
  )
}
