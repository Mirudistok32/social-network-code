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
  isFetchings: [] as Array<number>, // Пока идет запрос подписки или отписки
  // isFollow: false, //Для профиля
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
    // case 'SN/USERS/SET_FOLLOW': {
    //   return { ...state, isFollow: action.isFollow }
    // }
    case 'SN/USERS/SET_IS_FETCHINGS': {
      return {
        ...state, isFetchings: action.isFetging ?
          [...state.isFetchings, action.id] :
          state.isFetchings.filter(element => element !== action.id)
      }
    }
    case 'SN/USERS/FOLLOW': {
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    }
    case 'SN/USERS/UNFOLLOW': {
      return {
        ...state, users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    }
    default: return state;
  }
};


export const actions = {
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const),
  setIsPreloading: (isPreloading: boolean) => ({ type: 'SN/USERS/SET_IS_PRELOADING', isPreloading } as const),
  // setFollow: (isFollow: boolean) => ({ type: 'SN/USERS/SET_FOLLOW', isFollow } as const),
  setIsFetchings: (isFetging: boolean, id: number) => ({ type: 'SN/USERS/SET_IS_FETCHINGS', id, isFetging } as const),
  follow: (id: number) => ({ type: 'SN/USERS/FOLLOW', id } as const),
  unfollow: (id: number) => ({ type: 'SN/USERS/UNFOLLOW', id } as const),
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

// export const setFollowThunk = (userId: number): ThunkType => async (dispatch) => {
//   let isFollowing = await usersAPI.getFollow(userId);

//   dispatch(actions.setFollow(isFollowing))
// }




export const followThunk = (userId: number): ThunkType => async (dispatch) => {

  //Пока идет запрос, кнопка будет за disabled-на
  dispatch(actions.setIsFetchings(true, userId))

  let follow = await usersAPI.follow(userId);

  if (follow.resultCode === 0) {
    // Если запрос прошел успешно, то устанавливаю соответствующие значение в стэйт
    dispatch(actions.follow(userId))
    // Делаем кнопку снова активной
    dispatch(actions.setIsFetchings(false, userId))
  }
  //Никак не обрабатываю запрос, который не удался(т.е. код ошибки 1)

}
export const unfollowThunk = (userId: number): ThunkType => async (dispatch) => {

  //Пока идет запрос, кнопка будет за disabled-на
  dispatch(actions.setIsFetchings(true, userId))

  let unfollow = await usersAPI.unfollow(userId);

  if (unfollow.resultCode === 0) {
    // Если запрос прошел успешно, то устанавливаю соответствующие значение в стэйт
    dispatch(actions.unfollow(userId))
    // Делаем кнопку снова активной
    dispatch(actions.setIsFetchings(false, userId))
  }
  //Никак не обрабатываю запрос, который не удался(т.е. код ошибки 1)
} 
