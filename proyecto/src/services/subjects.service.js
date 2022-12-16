import axios from "axios";

const baseURL = "http://localhost:8080/subjects";

export function addSubject(data) {
  return axios.post(`${baseURL}/create`, data);
}

export function getSubject(id) {
  return axios.get(`${baseURL}/${id}`);
}
