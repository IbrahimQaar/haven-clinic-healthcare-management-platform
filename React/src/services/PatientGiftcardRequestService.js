import axios from "axios";

const PatientGiftcardRequestService = {
  createRequest(requestData) {
    return axios.post("/giftcard-requests", requestData);
  },
};

export default PatientGiftcardRequestService;
