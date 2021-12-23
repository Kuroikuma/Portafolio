import axios from "axios";
const apiUrl = "https://pure-ridge-19998.herokuapp.com/skill";

export const getSkill = () => {
  const baseUrl = apiUrl;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response]);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export async function postSkill(skill) {
  const baseUrl = apiUrl;
  try {
    const result = await axios.post(baseUrl, skill);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return "error";
  }
}
