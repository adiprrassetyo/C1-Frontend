import axios from "axios";

const API = axios.create({
  baseURL: "https://binair-backend-production.up.railway.app/api/v1",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("user").token
    )}`;
  }
  return req;
});

export default API;
