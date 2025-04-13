import axios from "axios";


const api = axios.create({
  baseURL: 'https://662d9fcea7dda1fa378af332.mockapi.io/api/PR4/',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  }
});


export default api;
