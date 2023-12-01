import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/medwessim/ecommerce",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default {
  getUsers() {
    return ApiClient.get("/users");
  },

  getUserById(id) {
    return ApiClient.get("/users/" + id);
  },
};
