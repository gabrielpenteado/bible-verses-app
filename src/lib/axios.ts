import axios from "axios";

export const api = axios.create({
  baseURL: "https://bible-api.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
