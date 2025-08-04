import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
});

export default instance;
 