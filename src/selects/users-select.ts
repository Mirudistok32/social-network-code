import { AppStateType } from "../redux/store";

export const getUsersDataSelect = (state: AppStateType) => state.usersReducer.users
export const getUsersTotalUsersCountSelect = (state: AppStateType) => state.usersReducer.totalUsersCount
export const getUsersCurrentPageSelect = (state: AppStateType) => state.usersReducer.currentPage
export const getUsersPageSizeSelect = (state: AppStateType) => state.usersReducer.pageSize
export const getUsersIsPreloadingSelect = (state: AppStateType) => state.usersReducer.isPreloading
export const getUsersIsFetchingsSelect = (state: AppStateType) => state.usersReducer.isFetchings