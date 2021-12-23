import "./App.css";
import React, { useState } from "react";
import { Home } from "../../Components/Home/home";
import { Skill } from "../../Components/Skills/skills";
import caret from "../../../Assets/angulo-de-flecha-hacia-arriba.png";
import { Proyect } from "../../Components/Proyect/proyect";
import { Contact } from "../../Components/Contact/contact";
function App() {
  const [show, setShow] = useState(false);

  const ScrollChange = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="app">
      <div
        onClick={ScrollChange}
        className={show ? "showApp go-top-container" : "go-top-container"}
      >
        <div className="go-top-button">
          <img src={caret} alt="goTop" />
        </div>
      </div>
      <Home />
      <Skill />
      <Proyect />
      <Contact />
    </div>
  );
}

export default App;
