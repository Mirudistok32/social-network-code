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
  pageSize: 10 as number,
  currentPage: 1 as number,
  totalUsersCount: 0 as number,
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/SET_USERS': {
      return { ...state, users: action.users }
    }

    default: return state;
  }
};


export const actions = {
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
}


export const setUsersThunk = (currentPage: number, pageSize: number):
  ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
  // постоянно вызывается
  // console.log('setUsersThunk')
  return async (dispatch) => {
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setUsers(data.items))
  }
}
