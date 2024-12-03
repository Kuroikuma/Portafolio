import axios from 'axios'
const apiUrl = 'https://backend-portfolio-nu.vercel.app/api/project'

export const getProject = async () => {
  const baseUrl = apiUrl
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
export const getProjectById = async (id) => {
  const baseUrl = `${apiUrl}/${id}`
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getProjectPagination = async (url) => {
  try {
    const res = await fetch(url)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function postProject(project) {
  const baseUrl = apiUrl
  try {
    const result = await axios.post(baseUrl, project)
    console.log(result.data)
    return result.data
  } catch (error) {
    return 'error'
  }
}
