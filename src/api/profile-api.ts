import { instance, GetProfileType } from "./api";


type DataType = {

}
type StatusProfileType = {
    resultCode: number
    messages: Array<string>
    data: DataType
}

export const profileAPI = {
    getProfile: (id: number) => {
        return instance.get<GetProfileType>(`profile/${id}`).then(res => res.data)
    },
    getStatusProfile: (id: number) => {
        return instance.get<string>(`profile/status/${id}`).then(res => res.data)
    },
    setStatusProfile: (status: string, id: number) => {
        return instance.put<StatusProfileType>(`profile/status/${id}`, { status }).then(res => res.data)
    }
};