import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { usersReducer } from "./users-reducer";
import { profileReducer } from "./profile-reducer";
import { authReducer } from "./auth-reducer";
import { headerReducer } from './header-reducer'
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    usersReducer,
    profileReducer,
    authReducer,
    headerReducer
})

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

// Расширение для Redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
))
export default store