import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./users-reducer";
import { profileReducer } from "./profile-reducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    usersReducer,
    profileReducer,
    authReducer
})

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

const store = createStore(rootReducers, applyMiddleware(thunk))
export default store