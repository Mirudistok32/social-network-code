import { InferActionsTypes } from "./store"

const initialState = {
    isActiveWindow: false
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actionsHeaderReducer>


export const headerReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/HEADER/SET_ACTIVE_WINDOWS': {
            return { ...state, isActiveWindow: action.isActiveWindow }
        }
        default: {
            return { ...state }
        }
    }
}

export const actionsHeaderReducer = {
    setActiveWindow: (isActiveWindow: boolean) => ({ type: "SN/HEADER/SET_ACTIVE_WINDOWS", isActiveWindow } as const)
}