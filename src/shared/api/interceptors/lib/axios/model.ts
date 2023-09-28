import axios from "axios";

export const axios_auth = (accessToken: string, base_url: string) => {
  return axios.create({
    baseURL: base_url,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": base_url,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      Authorization: `Bearer ${accessToken}`
    }
  });
};
