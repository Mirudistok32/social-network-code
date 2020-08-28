import { GetProfileType } from "../api/api"
import { InferActionsTypes, AppStateType } from "./store"
import { profileAPI } from "../api/profile-api"
import { ThunkAction } from "redux-thunk"
import { PhotosType } from "./users-reducer"
import { SettingsProfileFormInitialValuesType } from "../components/SettingsProfile/SettingsProfileForm"
import { v1 } from 'uuid'

export type PostsType = {
    id: string,
    text: string
}

type InitialStateType = {
    profile: GetProfileType,
    status: string,
    posts: Array<PostsType>
}

const initialState: InitialStateType = {
    profile: {
        contacts: {
            facebook: '',
            github: "",
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            large: '',
            small: ''
        },
        userId: 0,
        aboutMe: ''
    },
    status: '',
    posts: []
}

type actionsProfileTypes = InferActionsTypes<typeof actionsProfile>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, actionsProfileTypes>

export const profileReducer = (state = initialState, action: actionsProfileTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/SET_PROFILE': {
            return { ...state, profile: action.profile }
        }
        case 'SN/PROFILE/SET_STATUS_PROFILE': {
            return { ...state, status: action.status }
        }
        case 'SN/PROFILE/SET_MY_PHOTO_PROFILE': {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        case 'SN/PROFILE/ADD_NEW_POST': {
            const newPost: PostsType = {
                id: v1(), text: action.payload
            }
            return { ...state, posts: [newPost, ...state.posts] }
        }
    }
    return state
}


export const actionsProfile = {
    setProfile: (profile: GetProfileType) => ({ type: 'SN/PROFILE/SET_PROFILE', profile } as const),
    setStatusProfile: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS_PROFILE', status } as const),
    setMyPhotoProfile: (photos: PhotosType) => ({ type: 'SN/PROFILE/SET_MY_PHOTO_PROFILE', photos } as const),
    addNewPost: (text: string) => ({ type: 'SN/PROFILE/ADD_NEW_POST', payload: text } as const)
}


export const setProfileThunk = (id: number): ThunkType => {

    return async (dispatch) => {

        const status = await profileAPI.getStatusProfile(id)
        const profile = await profileAPI.getProfile(id)

        dispatch(actionsProfile.setProfile(profile))
        dispatch(actionsProfile.setStatusProfile(status))

    }
}

export const setMyProfilePhotosThunk = (id: number): ThunkType => {
    return async (dispatch) => {
        const profile = await profileAPI.getProfile(id)
        dispatch(actionsProfile.setMyPhotoProfile(profile.photos))
    }
}

//Санка для изменения статуса, здесь мы делаем put запрос на сервер
export const setProfileStatusThunk = (status: string): ThunkType => {

    return async (dispatch) => {
        const statusResult = await profileAPI.setStatusProfile(status)

        //Если код статуса 0, то все успешно, и мы перезаписываем статус
        if (statusResult.resultCode === 0) {
            dispatch(actionsProfile.setStatusProfile(status))
        }
    }
}

//
export const setPhotoProfileThunk = (file: File): ThunkType => {
    return async (dispatch) => {
        const statusResult = await profileAPI.setPhotosProfile(file)

        //Если код статуса 0, то все успешно, и мы перезаписываем статус
        if (statusResult.resultCode === 0) {
            dispatch(actionsProfile.setMyPhotoProfile(statusResult.data))
        }
    }
}


export const updateProfileThunk = (profile: SettingsProfileFormInitialValuesType): ThunkType => {
    return async (dispatch, getState) => {
        let prof: GetProfileType = { ...getState().profileReducer.profile, ...profile }

        const statusResult = await profileAPI.updateProfile(prof)

        if (statusResult.resultCode === 0) {
            dispatch(actionsProfile.setProfile(prof))
        } else {
            console.log("Не получилось")
        }
    }
}