import "./postSkill.css";
import React, { useState } from "react";

import { app } from "../../../firebase-coneccion";
import { postSkill } from "../../../services/services-skill";

const PostSkill = () => {
  const [fileUrl, setFileUrl] = useState("");
  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const storegeRef = app.storage().ref();
    const filePath = storegeRef.child(file.name);
    await filePath.put(file);
    const linkUrl = await filePath.getDownloadURL();
    setFileUrl(linkUrl);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const nameFIle = e.target.nombre.value;
    const skill = { name: nameFIle, img: fileUrl };
    postSkill(skill).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input name="nombre" type="text" />
        <input onChange={fileHandler} name="img" type="file" />
        <button>Send Reques</button>
      </form>
    </>
  );
};

export default PostSkill;
