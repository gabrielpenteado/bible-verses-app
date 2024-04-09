import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.abibliadigital.com.br/api/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
