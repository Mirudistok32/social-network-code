import * as axios from "axios";

export const instance = axios.create({
  withCredential: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
