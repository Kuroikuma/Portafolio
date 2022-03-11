import axios from 'axios'
const apiUrl = 'https://pure-ridge-19998.herokuapp.com/api/skill'

export const getSkill = async () => {
  const baseUrl = apiUrl
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function postSkill(skill) {
  const baseUrl = apiUrl
  try {
    const result = await axios.post(baseUrl, skill)
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}
