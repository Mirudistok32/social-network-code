import { instance } from "./api";


export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 10) => {
    return instance
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((res) => res.data);
  },
};
