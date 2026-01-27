import axios from "axios";

export default {
  getGiftCards() {
    return axios.get("/giftCards");
  },
};
