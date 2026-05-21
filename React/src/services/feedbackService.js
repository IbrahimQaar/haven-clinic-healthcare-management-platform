import axios from "axios";

export function saveFeedback(feedback) {
  return axios.post("/feedback", feedback);
}
