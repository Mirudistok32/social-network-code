import { AppStateType } from "../redux/store";

export const getAuthIsFetchingSelect = (state: AppStateType) => state.authReducer.isFetching
export const getAuthIsAutorizationSelect = (state: AppStateType) => state.authReducer.isAutorization
export const getAuthIdSelect = (state: AppStateType) => state.authReducer.id