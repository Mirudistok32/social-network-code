import axios from "axios";
import { UserType, PhotosType } from "../redux/users-reducer";

export type GetUsersItems = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type GetProfileContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type GetProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: GetProfileContactsType
  photos: PhotosType
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d023b2c6-7676-43b1-bc4b-aaf1d4db4466"
  }
});
