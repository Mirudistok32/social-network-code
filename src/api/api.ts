import axios from "axios";
import { UserType } from "../redux/users-reducer";

export type GetUsersItems = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
