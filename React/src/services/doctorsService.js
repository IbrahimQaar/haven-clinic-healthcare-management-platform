import axios from "axios";

export function fetchDoctors() {
  return axios.get("/doctors");
}

export function fetchDoctorById(doctorId) {
  return axios.get(`/doctors/${doctorId}`);
}

export function fetchHospitalLocations() {
  return axios.get("/doctors/locations");
}
