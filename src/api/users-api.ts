import { instance } from "./api";
import { UserType } from "../redux/users-reducer";

type FollowingType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

export type GetUsersItems = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 10) => {
    return instance
      .get<GetUsersItems>(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then((res) => res.data);
  },
  follow: (userId: number) => {
    return instance.post<FollowingType>(`follow/${userId}`).then(res => res.data)
  },
  unfollow: (userId: number) => {
    return instance.delete<FollowingType>(`follow/${userId}`).then(res => res.data)
  }
};
