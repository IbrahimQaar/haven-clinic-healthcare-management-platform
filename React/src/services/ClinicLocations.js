import axios from "axios";

// Axios is getting the locations from the backend and bringing them to the frontend.

// Axios lets the frontend talk to the backend and get data back.

export default {
  // It shares this code with other parts of the app.
  // The method uses Axios to send a GET request to /clinic-locations and returns the clinic locations data from the backend.
  getClinicLocations() {
    return axios.get("/clinic-locations");
  },
};
