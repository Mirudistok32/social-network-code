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

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type AppStateType = ReturnType<typeof rootReducers>;
// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = T extends (...args: any) => infer P ? P extends { [key: string]: infer U } ? U : never : any

// Расширение для Redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
))

export default store
