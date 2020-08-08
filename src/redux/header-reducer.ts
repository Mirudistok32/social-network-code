import { InferActionsTypes } from "./store"

const initialState = {

}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


export const headerReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        default: {
            return { ...state }
        }
    }
}

const actions = {

}