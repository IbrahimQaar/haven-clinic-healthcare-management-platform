import axios from "axios";

export function fetchDoctors() {
  return axios.get("/doctors");
}
