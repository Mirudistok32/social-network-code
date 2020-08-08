import { instance } from "./api";

export type GetAuthMeDataType = {
    id: number
    email: string
    login: string
}

export type GetAuthMeType = {
    resultCode: number
    messages: Array<string>
    data: GetAuthMeDataType
}

export const authAPI = {
    getAuthMe: () => {
        return instance.get<GetAuthMeType>(`auth/me`).then(res => res.data)
    }
};