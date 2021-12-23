import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOnScreen } from "../../hooks/useOnScreen";
import { sigProyect, sigImg } from "../../../redux/actions/proyect-action";
import { ProyectView } from "./proyect.view";

export const Proyect = () => {
  const dispatch = useDispatch();
  const numberPro = useSelector((state) => state.proyectReducer.numberPro);
  const proyect = useSelector((state) => state.proyectReducer.proyect);
  const [TitleProyectRef, showTitleProyect] = useOnScreen({
    rootMargin: "-50px",
  });
  const [ViewProyectRef, showViewProyect] = useOnScreen({
    rootMargin: "-100px",
  });
  const [InfoProyectRef, showInfoProyect] = useOnScreen({
    rootMargin: "-50px",
  });

  const changeProyect = (event) => {
    let { name } = event.target;
    console.log(name);
    if (name === "siguienteProyecto") {
      switch (numberPro) {
        case "primeroPro":
          dispatch(sigProyect("segundoPro"));
          dispatch(sigImg("primeroImg"));
          break;
        case "segundoPro":
          dispatch(sigProyect("terceroPro"));
          dispatch(sigImg("primeroImg"));
          break;
        case "terceroPro":
          dispatch(sigProyect("primeroPro"));
          dispatch(sigImg("primeroImg"));
          break;
        default:
          break;
      }
    } else if (name === "anteriorProyecto") {
      console.log(name);
      switch (numberPro) {
        case "terceroPro":
          dispatch(sigProyect("segundoPro"));
          dispatch(sigImg("primeroImg"));
          break;
        case "segundoPro":
          dispatch(sigProyect("primeroPro"));
          dispatch(sigImg("primeroImg"));
          break;
        case "primeroPro":
          dispatch(sigProyect("terceroPro"));
          dispatch(sigImg("primeroImg"));
          break;

        default:
          break;
      }
    }
  };

  return (
    <ProyectView
      changeProyect={changeProyect}
      numberPro={numberPro}
      proyect={proyect}
      TitleProyectRef={TitleProyectRef}
      showTitleProyect={showTitleProyect}
      InfoProyectRef={InfoProyectRef}
      showInfoProyect={showInfoProyect}
      ViewProyectRef={ViewProyectRef}
      showViewProyect={showViewProyect}
    />
  );
};
