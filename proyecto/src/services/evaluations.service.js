import axios from "axios";

const baseURL = "http://localhost:8080/evaluations";

export function addEvaluation(data) {
  return axios.post(`${baseURL}/create`, data);
}
