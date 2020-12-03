import axios from "axios";

export function getAPOD(date = "") {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk&date=${date}`
  );
}
