import axios from "axios";

// Create a new appointment
export function createAppointment(appointmentData) {
  return axios.post("/appointments", appointmentData);
}

// Get all appointments for a user
export function getAppointmentsByUserId(userId) {
  return axios.get(`/appointments/user/${userId}`);
}

// Cancel an appointment
export function cancelAppointment(appointmentId) {
  return axios.put(`/appointments/${appointmentId}/cancel`);
}

// Get active appointment
export function getActiveAppointment() {
  return axios.get("/appointments/active");
}

// Get cancelled appointments
export function getCancelledAppointments() {
  return axios.get("/appointments/cancelled");
}

export function getAvailableTimes(date) {
  return axios.get(`/appointments/available-times?date=${date}`);
}
