import axios from "axios";

export default axios.create({
  baseURL:
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
}); 