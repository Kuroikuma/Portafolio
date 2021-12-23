import "./home.style.css";
import React, { useState, useEffect } from "react";
import GitHub from "../../../Assets/github.png";
import { useOnScreen } from "../../hooks/useOnScreen";
import Facebook from "../../../Assets/facebook.png";
import LinkedIn from "../../../Assets/linkedin.png";
import Perfil from "../../../Assets/IMG-20210430-WA0013.jpg";
export const Home = (props) => {
  const { setHead } = props;
  const height = window.innerHeight;
  const [show, setShow] = useState(false);

  const [HomeRef, showHome] = useOnScreen({
    rootMargin: "0px",
  });

  useEffect(() => {
    if (showHome) setHead("Home");
  }, [showHome, setHead]);

  const dropDownHadler = (e) => {
    setShow(!show);
  };

  const ScrollChange = (event) => {
    let { name } = event.target;
    switch (name) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShow(false);
        break;
      case "Skills":
        window.scrollTo({ top: height, behavior: "smooth" });
        setShow(false);
        break;
      case "Project":
        window.scrollTo({ top: height * 2, behavior: "smooth" });
        setShow(false);
        break;
      case "Contact":
        window.scrollTo({ top: height * 3, behavior: "smooth" });
        setShow(false);
        break;

      default:
        break;
    }
  };
  return (
    <div ref={HomeRef} className="HomeContainer">
      <div className="Desplegable">
        <button onClick={dropDownHadler}></button>
      </div>
      <div className={`HomeContainer__NavBar`}>
        <div
          className={
            show
              ? `HomeContainer__NavBar__Rigth show`
              : `HomeContainer__NavBar__Rigth`
          }
        >
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Home" onClick={ScrollChange}>
              Home
            </button>
          </div>
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Skills" onClick={ScrollChange}>
              Skills
            </button>
          </div>
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Project" onClick={ScrollChange}>
              Project
            </button>
          </div>
          <div className="HomeContainer__NavBar__Rigth__item">
            <button name="Contact" onClick={ScrollChange}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="HomeContainer__Image">
        <img src={Perfil} alt="Perfil" />
      </div>
      <div className="HomeContainer__Info">
        <p>
          &nbsp; <span className="titleInfo">Soy programador Junior. </span>{" "}
          <br /> Con amplitud a aprender, autodidacta, responsable en diseñar y
          desarrollar aplicaciones web. Haber participado en desarrollo de
          proyectos en equipo con diferentes lenguajes de programacion y
          diversas tecnologias para el desarrollo de software o aplicaciones.
        </p>
      </div>
      <div className="HomeContainer__Info__Contact">
        <div className="HomeContainer__Info__Contact__item HomeContainer__Info__Contact__LinkedIn">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ulisse-hurtado-cabrera-700409212/"
            target="_blank"
          >
            <img
              className="HomeContainer__Info__Contact__img"
              src={LinkedIn}
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="HomeContainer__Info__Contact__item  HomeContainer__Info__Contact__Facebook">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/ulissejr08"
            target="_blank"
          >
            <img
              className="HomeContainer__Info__Contact__img"
              src={Facebook}
              alt="Facebook"
            />
          </a>
        </div>
        <div className="HomeContainer__Info__Contact__item  HomeContainer__Info__Contact__GitHub">
          <a
            rel="noreferrer"
            href="https://github.com/Kuroikuma"
            target="_blank"
          >
            <img
              className="HomeContainer__Info__Contact__img"
              src={GitHub}
              alt="githud"
            />
          </a>
        </div>
      </div>
      <div className="HomeContainer__Circle"></div>
    </div>
  );
};
