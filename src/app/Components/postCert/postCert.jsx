import '../postSkill/postSkill.css'
import React, { useState } from 'react'
import { app } from '../../../firebase-coneccion'
import { postCert } from '../../../services/services.cert'

export const PostCert = () => {
  const [fileUrl, setFileUrl] = useState('')
  const fileHandler = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const filePath = storageRef.child(file.name)
    await filePath.put(file)
    const linkUrl = await filePath.getDownloadURL()
    setFileUrl(linkUrl)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const cert = { image: fileUrl }
    postCert(cert).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={fileHandler} name="img" type="file" />
        <button>Send Request</button>
      </form>
    </>
  )
}
