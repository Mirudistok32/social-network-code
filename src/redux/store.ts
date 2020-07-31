import { createStore, combineReducers, } from "redux";
import { usersReducer } from "./users-reducer";
import { profileReducer } from "./profile-reducer";
import { authReducer } from "./auth-reducer";

const reducers = combineReducers({
    usersReducer,
    profileReducer,
    authReducer
})

const store = createStore(reducers)
export default store