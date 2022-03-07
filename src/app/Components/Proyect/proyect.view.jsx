import './proyect.style.css'

import { ProyectViewCard } from './proyect-view-card'
import { Title } from './title'
import { InfoProject } from './info'

export const ProyectView = (props) => {
  const {
    ViewProyectRef,
    showViewProyect,

    changeProyect,
    numberPro,
    proyect,
    PageProyectRef,
  } = props
  return (
    <div ref={PageProyectRef} className="ProyectContainer">
      <div
        className={
          showViewProyect
            ? 'ProyectContainer__previousProyect--Left show'
            : 'ProyectContainer__previousProyect--Left'
        }
      >
        <button
          name="previousProject"
          onClick={changeProyect}
          className={
            showViewProyect
              ? 'ProyectContainer__previousProyect show'
              : 'ProyectContainer__previousProyect'
          }
        ></button>
      </div>
      <div className="proyectContainer2">
        <Title />
        <ProyectViewCard
          showViewProyect={showViewProyect}
          ViewProyectRef={ViewProyectRef}
        />

        {proyect.map((item) =>
          numberPro === 'primeroPro' && item.name === 'PORTAFOLIO' ? (
            <InfoProject name={item.name} description={item.descripcion} />
          ) : numberPro === 'segundoPro' && item.name === 'AMERICAN CHEESE' ? (
            <InfoProject name={item.name} description={item.descripcion} />
          ) : numberPro === 'terceroPro' && item.name === 'MediCall' ? (
            <InfoProject name={item.name} description={item.descripcion} />
          ) : null
        )}
      </div>
      <div
        className={
          showViewProyect
            ? 'ProyectContainer__nextProyect--Right show'
            : 'ProyectContainer__nextProyect--Right'
        }
      >
        <button
          name="nextProject"
          onClick={changeProyect}
          className={
            showViewProyect
              ? 'ProyectContainer__nextProyect show'
              : 'ProyectContainer__nextProyect'
          }
        ></button>
      </div>
    </div>
  )
}
