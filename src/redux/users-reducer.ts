import { usersAPI } from "../api/users-api";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./store";

export type PhotosType = {
  small: string | null
  large: string | null
}

export type UserType = {
  id: string
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
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

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
    default: return state;
  }
};


export const actions = {
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const)
}


export const setUsersThunk = (currentPage: number, pageSize: number):
  ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
  // постоянно вызывается
  return async (dispatch) => {
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}
