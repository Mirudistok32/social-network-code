import { instance, GetProfileType } from "./api";

export const profileAPI = {
    getProfile: (id: number) => {
        return instance.get<GetProfileType>(`/profile/${id}`).then(res => res.data)
    },
    getStatusProfile: (id: number) => {
        return instance.get<string>(`profile/status/${id}`).then(res => res.data)
    }
};