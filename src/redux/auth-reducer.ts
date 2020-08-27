import { GetAuthMeDataType, GetAuthMeType, authAPI } from '../api/auth-api'
import { InferActionsTypes, AppStateType } from './store'
import { ThunkAction } from 'redux-thunk'
import { securityAPI } from '../api/security-api'

const initialState = {
    login: null as string | null,
    email: null as string | null,
    id: null as number | null,
    isAutorization: false,
    isFetching: false,
    captchaURL: null as string | null
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_DATA_ME': {
            return {
                ...state,
                login: action.payload.data.login,
                email: action.payload.data.email,
                id: action.payload.data.id,
                isAutorization: true
            }
        }
        case 'SN/AUTH/SET_IS_FETCHING': {
            return { ...state, isFetching: action.is }
        }
        case 'SN/AUTH/SET_AUTORIZATION': {
            return { ...state, isAutorization: action.payload }
        }
        case 'SN/AUTH/SET_USER_ID': {
            return { ...state, id: action.payload, isAutorization: true }
        }
        case 'SN/AUTH/SET_CAPTHCA_URL': {
            return { ...state, captchaURL: action.payload }
        }
        default:
            return state
    }
}


const actions = {
    setDataMe: (dataMe: GetAuthMeType<GetAuthMeDataType>) => ({ type: 'SN/AUTH/SET_DATA_ME', payload: dataMe } as const),
    setIsFetching: (is: boolean) => ({ type: 'SN/AUTH/SET_IS_FETCHING', is } as const),
    setAutorization: (isAutorization: boolean) => ({ type: 'SN/AUTH/SET_AUTORIZATION', payload: isAutorization } as const),
    setUserId: (id: number) => ({ type: 'SN/AUTH/SET_USER_ID', payload: id } as const),
    setCaptchaURL: (captcha: string) => ({ type: 'SN/AUTH/SET_CAPTHCA_URL', payload: captcha } as const)
}

export const setDataMeThunk = (): ThunkType => {
    return async (dispatch) => {

        dispatch(actions.setIsFetching(true))
        let dataMe = await authAPI.getAuthMe()

        //А если код 1, т.е. если мы не авторизованы?
        if (dataMe.resultCode === 0) {
            dispatch(actions.setDataMe(dataMe))
        }
        dispatch(actions.setIsFetching(false))
    }
}


//Санка для отправки запросы, который деактивирует авторизацию
export const loginOutThunk = (): ThunkType => async (dispatch) => {

    let data = await authAPI.loginOut()

    if (data.resultCode === 0) {
        dispatch(actions.setAutorization(false))
    }
}

export const loginInThunk = (email: string, password: string, rememberMe: boolean, captcha: string | null = null): ThunkType => async (dispatch) => {
    dispatch(actions.setIsFetching(true))

    let response = await authAPI.loginIn(email, password, rememberMe, captcha)

    if (response.resultCode === 0) {
        dispatch(actions.setUserId(response.data.userId))
    } else {
        if(response.resultCode === 10){
            dispatch(getCaptchaSecurityThunk())
        }
    }

    dispatch(actions.setIsFetching(false))
}


export const getCaptchaSecurityThunk = (): ThunkType => async (dispatch) => {

    const response = await securityAPI.getSecurityCaptcha()
    const captchaURL = response.url

    dispatch(actions.setCaptchaURL(captchaURL))
}