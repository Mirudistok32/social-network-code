import { usersAPI } from "../api/users-api";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./store";

export type PhotosType = {
  small: string | null
  large: string | null
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 9,
  currentPage: 1,
  totalUsersCount: 0,
  isPreloading: false, // Для индикатора загрузки
  isFetching: false, // Пока идет запрос подписки и отписки
  isFollow: false, //Для профиля
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case 'SN/USERS/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SN/USERS/SET_IS_PRELOADING': {
      return { ...state, isPreloading: action.isPreloading }
    }
    case 'SN/USERS/SET_FOLLOW': {
      return { ...state, isFollow: action.isFollow }
    }
    case 'SN/USERS/SET_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    default: return state;
  }
};


export const actions = {
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const),
  setIsPreloading: (isPreloading: boolean) => ({ type: 'SN/USERS/SET_IS_PRELOADING', isPreloading } as const),
  setFollow: (isFollow: boolean) => ({ type: 'SN/USERS/SET_FOLLOW', isFollow } as const),
  setIsFetching: (isFetching: boolean) => ({ type: 'SN/USERS/SET_IS_FETCHING', isFetching } as const)
}


export const setUsersThunk = (currentPage: number, pageSize: number): ThunkType => {
  // постоянно вызывается
  return async (dispatch) => {
    dispatch(actions.setIsPreloading(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))

    dispatch(actions.setIsPreloading(false))
  }
}

export const setFollowThunk = (userId: number): ThunkType => async (dispatch) => {
  let isFollowing = await usersAPI.getFollow(userId);

  dispatch(actions.setFollow(isFollowing))
}

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
 
  dispatch(actions.setIsFetching(true))

  let follow = await usersAPI.follow(userId);

  if (follow.resultCode === 0) {
    dispatch(actions.setIsFetching(false))
  }

}

export const unfollowThunk = (userId: number): ThunkType => async (dispatch) => {
 
  dispatch(actions.setIsFetching(true))

  let unfollow = await usersAPI.unfollow(userId);

  if (unfollow.resultCode === 0) {
    dispatch(actions.setIsFetching(false))
  }
} 
