import { GetProfileType } from "../api/api"
import { InferActionsTypes, AppStateType } from "./store"
import { profileAPI } from "../api/profile-api"
import { ThunkAction } from "redux-thunk"


const initialState = {
    profile: null as GetProfileType | null
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/SET_PROFILE': {
            return { ...state, profile: action.profile }
        }
    }
    return state
}


const actions = {
    setProfile: (profile: GetProfileType) => ({ type: 'SN/PROFILE/SET_PROFILE', profile } as const)
}


export const setProfileThunk = (id: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    
    return async (dispatch) => {
        
        const profile = await profileAPI.getProfile(id)
        dispatch(actions.setProfile(profile))
    }
}