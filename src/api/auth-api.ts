import { instance } from "./api";

export type GetAuthMeDataType = {
    id: number
    email: string
    login: string
}

export type LoginIn = {
    id: number
}
export type LoginOut = {
    id: number
}

export type GetAuthMeType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const authAPI = {
    getAuthMe: () => {
        return instance.get<GetAuthMeType<GetAuthMeDataType>>(`auth/me`).then(res => res.data)
    },
    loginIn: () => {
        return instance.post<GetAuthMeType<LoginIn>>(`auth/login`).then(res => res.data)
    },
    loginOut: () => {
        return instance.delete<GetAuthMeType<LoginOut>>(`auth/login`).then(res => res.data)
    }
};