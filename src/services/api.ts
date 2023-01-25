import axios from "axios"

export const api = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
