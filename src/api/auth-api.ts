import { instance } from "./api";

export type GetAuthMeDataType = {
    id: number
    email: string
    login: string
}

export type LoginIn = {
    userId: number
}
export type LoginOut = {}

export type GetAuthMeType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const authAPI = {
    getAuthMe: () => {
        return instance.get<GetAuthMeType<GetAuthMeDataType>>(`auth/me`).then(res => res.data)
    },
    loginIn: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<GetAuthMeType<LoginIn>>(`auth/login`, { email, password, rememberMe }).then(res => res.data)
    },
    loginOut: () => {
        return instance.delete<GetAuthMeType<LoginOut>>(`auth/login`).then(res => res.data)
    }
};