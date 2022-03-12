import axios from 'axios'
const apiUrl = 'https://pure-ridge-19998.herokuapp.com/api/project'

export const getProyect = async () => {
  const baseUrl = apiUrl
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
export const getProyectById = async (id) => {
  const baseUrl = `${apiUrl}/${id}`
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getProyectPagination = async (url) => {
  try {
    const res = await fetch(url)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
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
