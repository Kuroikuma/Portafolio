import { useOnScreen } from '../../hooks/useOnScreen'

export const InfoProject = ({ name, description }) => {
  const [InfoProyectRef, showInfoProyect] = useOnScreen({
    rootMargin: '-50px',
  })
  return (
    <div
      ref={InfoProyectRef}
      className={
        showInfoProyect
          ? 'ProyectContainer__Info show'
          : 'ProyectContainer__Info'
      }
    >
      <h3> {name} </h3>
      <p>{description}</p>
    </div>
  )
}
