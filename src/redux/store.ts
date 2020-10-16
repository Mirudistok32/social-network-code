import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import {headerReducer} from './header-reducer'
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    usersReducer,
    profileReducer,
    authReducer,
    headerReducer
})

export type AppStateType = ReturnType<typeof rootReducers>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// Расширение для Redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
))

export default store
