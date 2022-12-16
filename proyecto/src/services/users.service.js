import axios from "axios";

const baseURL = "http://localhost:8080/users";

export function userDetails(id) {
  return axios.get(`${baseURL}/${id}`);
}
