import "./postProyect.style.css";
import React, { useState } from "react";

import { app } from "../../../firebase-coneccion";
import { postProyect } from "../../../services/services-proyect";

const PostProyect = () => {
  const [filesUrl, setFilesUrl] = useState([]);
  const fileHandler = async (e) => {
    console.log(e.target.files);
    for (const key in e.target.files) {
      if (Object.hasOwnProperty.call(e.target.files, key)) {
        const element = e.target.files[key];
        const file = element;
        const storegeRef = app.storage().ref();
        const filePath = storegeRef.child(file.name);
        await filePath.put(file);
        const linkUrl = await filePath.getDownloadURL();
        setFilesUrl((prevFiles) => [...prevFiles, linkUrl]);
      }
    }
  };
  console.log(filesUrl);
  const submitHandler = (e) => {
    e.preventDefault();
    const nameFIle = e.target.nombre.value;
    const descripcion = e.target.descripcion.value;
    const proyect = { name: nameFIle, descripcion, imgs: filesUrl };
    console.log(proyect);
    postProyect(proyect).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-item">
          <h4>Nombre</h4>
          <input name="nombre" type="text" />
        </div>
        <div className="form-item">
          <h4>Descripcion</h4>
          <input name="descripcion" type="text" />
        </div>
        <div className="form-item">
          <h4>Imagenes</h4>
          <input
            onChange={fileHandler}
            name="img"
            multiple="true"
            type="file"
          />
        </div>
        <button>Send Reques</button>
      </form>
    </>
  );
};

export default PostProyect;
