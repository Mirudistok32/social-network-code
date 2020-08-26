import { instance, GetProfileType } from "./api";
import { PhotosType } from "../redux/users-reducer";


type DataType = {

}
type StatusProfileType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const profileAPI = {
    getProfile: (id: number) => {
        return instance.get<GetProfileType>(`profile/${id}`).then(res => res.data)
    },
    getStatusProfile: (id: number) => {
        return instance.get<string>(`profile/status/${id}`).then(res => res.data)
    },
    setStatusProfile: (status: string) => {
        return instance.put<StatusProfileType<DataType>>(`profile/status`, { status }).then(res => res.data)
    },
    setPhotosProfile: (file: File) => {
        const formData = new FormData()
        formData.append("image", file)

        return instance.put<StatusProfileType<PhotosType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfile: (profile: GetProfileType) => {
        return instance.put<StatusProfileType<DataType>>(`profile`, profile ).then(response => response.data)
    }
};