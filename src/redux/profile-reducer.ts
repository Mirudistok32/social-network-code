import { GetProfileType } from "../api/api"
import { InferActionsTypes, AppStateType } from "./store"
import { profileAPI } from "../api/profile-api"
import { ThunkAction } from "redux-thunk"
import { PhotosType } from "./users-reducer"
import { SettingsProfileFormInitialValuesType } from "../components/SettingsProfile/SettingsProfileForm"

type InitialStateType = {
    profile: GetProfileType,
    status: string,
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
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
    }
    return state
}


const actions = {
    setProfile: (profile: GetProfileType) => ({ type: 'SN/PROFILE/SET_PROFILE', profile } as const),
    setStatusProfile: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS_PROFILE', status } as const),
    setMyPhotoProfile: (photos: PhotosType) => ({ type: 'SN/PROFILE/SET_MY_PHOTO_PROFILE', photos } as const)
}


export const setProfileThunk = (id: number): ThunkType => {

    return async (dispatch) => {

        const status = await profileAPI.getStatusProfile(id)
        const profile = await profileAPI.getProfile(id)

        dispatch(actions.setProfile(profile))
        dispatch(actions.setStatusProfile(status))

    }
}

export const setMyProfilePhotosThunk = (id: number): ThunkType => {
    return async (dispatch) => {
        const profile = await profileAPI.getProfile(id)
        dispatch(actions.setMyPhotoProfile(profile.photos))
    }
}

//Санка для изменения статуса, здесь мы делаем put запрос на сервер
export const setProfileStatusThunk = (status: string): ThunkType => {

    return async (dispatch) => {
        const statusResult = await profileAPI.setStatusProfile(status)

        //Если код статуса 0, то все успешно, и мы перезаписываем статус
        if (statusResult.resultCode === 0) {
            dispatch(actions.setStatusProfile(status))
        }
    }
}

//
export const setPhotoProfileThunk = (file: File): ThunkType => {
    return async (dispatch) => {
        const statusResult = await profileAPI.setPhotosProfile(file)

        //Если код статуса 0, то все успешно, и мы перезаписываем статус
        if (statusResult.resultCode === 0) {
            dispatch(actions.setMyPhotoProfile(statusResult.data))
        }
    }
}


export const updateProfileThunk = (profile: SettingsProfileFormInitialValuesType): ThunkType => {
    return async (dispatch, getState) => {
        let prof: GetProfileType = { ...getState().profileReducer.profile, ...profile }

        const statusResult = await profileAPI.updateProfile(prof)

        if (statusResult.resultCode === 0) {
            dispatch(actions.setProfile({ ...getState().profileReducer.profile, ...profile }))
        } else {
            console.log("Не получилось")
        }
    }
}