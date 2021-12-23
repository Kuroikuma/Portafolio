import "./App.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Home } from "../../Components/Home/home";
import { Skill } from "../../Components/Skills/skills";
import caret from "../../../Assets/angulo-de-flecha-hacia-arriba.png";
import { Proyect } from "../../Components/Proyect/proyect";
import { Contact } from "../../Components/Contact/contact";
function App() {
  const [show, setShow] = useState(false);
  const [head, setHead] = useState("");
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
      <Helmet>
        <title>{head}</title>
      </Helmet>
      <div
        onClick={ScrollChange}
        className={show ? "showApp go-top-container" : "go-top-container"}
      >
        <div className="go-top-button">
          <img src={caret} alt="goTop" />
        </div>
      </div>
      <Home setHead={setHead} />
      <Skill setHead={setHead} />
      <Proyect setHead={setHead} />
      <Contact setHead={setHead} />
    </div>
  );
}

export default App;
