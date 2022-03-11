import axios from 'axios'
const apiUrl = 'https://pure-ridge-19998.herokuapp.com/api/project'

export const getProyect = () => {
  const baseUrl = apiUrl
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function postProyect(proyect) {
  const baseUrl = apiUrl
  try {
    const result = await axios.post(baseUrl, proyect)
    console.log(result.data)
    return result.data
  } catch (error) {
    return 'error'
  }
}
