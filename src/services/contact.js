import axios from "axios";

const ApiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default {
  getreviews() {
    return ApiClient.get("/reviews");
  },

  getreviewsById(id) {
    return ApiClient.get("/reviews/" + id);
  },

  addReviews(review) {
    return ApiClient.post("/reviews", review);
  },
  deleteReview(id) {
    return ApiClient.delete("/reviews/" + id);
  },
};
