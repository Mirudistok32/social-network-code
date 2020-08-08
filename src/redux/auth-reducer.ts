import { GetAuthMeDataType, GetAuthMeType, authAPI } from '../api/auth-api'
import { InferActionsTypes, AppStateType } from './store'
import { ThunkAction } from 'redux-thunk'

const initialState = {
    login: null as string | null,
    email: null as string | null,
    id: null as number | null,
    data: null as GetAuthMeDataType | null,
    messages: null as Array<string> | null,
    isAutorization: false,
    isFetching: false
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_DATA_ME': {
            return {
                ...state,
                ...action.dataMe.data,
                data: action.dataMe.data,
                messages: action.dataMe.messages,
                isAutorization: true
            }
        }
        case 'SN/AUTH/SET_IS_FETCHING': {
            return { ...state, isFetching: action.is }
        }
        default:
            return state
    }
}



const actions = {
    setDataMe: (dataMe: GetAuthMeType<GetAuthMeDataType>) => ({ type: 'SN/AUTH/SET_DATA_ME', dataMe } as const),
    setIsFetching: (is: boolean) => ({ type: 'SN/AUTH/SET_IS_FETCHING', is } as const)
}

export const setDataMeThunk = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        dispatch(actions.setIsFetching(true))

        let dataMe = await authAPI.getAuthMe()

        //А если код 1, т.е. мы не авторизованы?
        if (dataMe.resultCode === 0) {
            dispatch(actions.setDataMe(dataMe))
        }

        dispatch(actions.setIsFetching(false))
    }
}