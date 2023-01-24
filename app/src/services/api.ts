import axios from "axios"

export const api = axios.create({
  baseURL:
    "httpshttps://mks-challenge-api-frontend.herokuapp.com/api/v1/products://newsblog-production.up.railway.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
