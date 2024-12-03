import axios from 'axios'
const apiUrl = 'https://backend-portfolio-nu.vercel.app/api/cert'

export const getCert = async () => {
  const baseUrl = apiUrl
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getCertPagination = async (url) => {
  try {
    const res = await fetch(url)
    const response = await res.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function postCert(cert) {
  const baseUrl = apiUrl
  try {
    const result = await axios.post(baseUrl, cert)
    return result.data
  } catch (error) {
    console.log(
      '🚀 ~ file: services.cert.js ~ line 20 ~ postProject ~ error',
      error
    )
  }
}
