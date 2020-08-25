import { AppStateType } from "../redux/store";

export const getProfileDataSelect = (state: AppStateType) => state.profileReducer.profile
export const getProfileStatusSelect = (state: AppStateType) => state.profileReducer.status
export const getProfilePhotosSelect = (state: AppStateType) => state.profileReducer.profile.photos