import { useOnScreen } from '../../hooks/useOnScreen'

export const Title = () => {
  const [TitleProyectRef, showTitleProyect] = useOnScreen({
    rootMargin: '-50px',
  })
  return (
    <div
      ref={TitleProyectRef}
      className={
        showTitleProyect
          ? 'ProyectContainer__Title show'
          : 'ProyectContainer__Title'
      }
    >
      <h1>MY PROJECTS</h1>
    </div>
  )
}
