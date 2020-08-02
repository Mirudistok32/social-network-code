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
  pageSize: 10,
  currentPage: 1,
  totalUsersCount: 0,
}

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/SET_USERS': {
      return { ...state, users: action.users }
    }

    default: return state;
  }
};


export const actions = {
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const)
}
