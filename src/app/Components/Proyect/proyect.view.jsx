import "./proyect.style.css";

import { ProyectViewCard } from "./proyect-view-card";

export const ProyectView = (props) => {
  const {
    TitleProyectRef,
    showTitleProyect,
    ViewProyectRef,
    showViewProyect,
    InfoProyectRef,
    showInfoProyect,
    changeProyect,
    numberPro,
    proyect,
    PageProyectRef,
  } = props;
  return (
    <div ref={PageProyectRef} className="ProyectContainer">
      <div
        className={
          showViewProyect
            ? "ProyectContainer__previousProyect--Left show"
            : "ProyectContainer__previousProyect--Left"
        }
      >
        <button
          name="anteriorProyecto"
          onClick={changeProyect}
          className={
            showViewProyect
              ? "ProyectContainer__previousProyect show"
              : "ProyectContainer__previousProyect"
          }
        ></button>
      </div>
      <div className="proyectContainer2">
        <div
          ref={TitleProyectRef}
          className={
            showTitleProyect
              ? "ProyectContainer__Title show"
              : "ProyectContainer__Title"
          }
        >
          <h1>Proyectos</h1>
        </div>
        <ProyectViewCard
          showViewProyect={showViewProyect}
          ViewProyectRef={ViewProyectRef}
        />
        {/*aqui el componete view */}

        {proyect.map((item) =>
          numberPro === "primeroPro" && item.name === "PORTAFOLIO" ? (
            <div
              ref={InfoProyectRef}
              className={
                showInfoProyect
                  ? "ProyectContainer__Info show"
                  : "ProyectContainer__Info"
              }
            >
              <h3> {item.name} </h3>
              <p>{item.descripcion}</p>
            </div>
          ) : numberPro === "segundoPro" && item.name === "AMERICAN CHEESE" ? (
            <div
              ref={InfoProyectRef}
              className={
                showInfoProyect
                  ? "ProyectContainer__Info show"
                  : "ProyectContainer__Info"
              }
            >
              <h3> {item.name} </h3>
              <p>{item.descripcion}</p>
            </div>
          ) : numberPro === "terceroPro" && item.name === "MediCall" ? (
            <div
              ref={InfoProyectRef}
              className={
                showInfoProyect
                  ? "ProyectContainer__Info show"
                  : "ProyectContainer__Info"
              }
            >
              <h3> {item.name} </h3>
              <p>{item.descripcion}</p>
            </div>
          ) : null
        )}
      </div>
      <div
        className={
          showViewProyect
            ? "ProyectContainer__nextProyect--Right show"
            : "ProyectContainer__nextProyect--Right"
        }
      >
        <button
          name="siguienteProyecto"
          onClick={changeProyect}
          className={
            showViewProyect
              ? "ProyectContainer__nextProyect show"
              : "ProyectContainer__nextProyect"
          }
        ></button>
      </div>
    </div>
  );
};
