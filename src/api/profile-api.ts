import { instance, GetProfileType } from "./api";

export const profileAPI = {
    getProfile: (id: string) => {
        return instance.get<GetProfileType>(`/profile/${id}`).then(res => res.data)
    }
};