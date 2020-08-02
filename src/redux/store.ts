import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { usersReducer } from "./users-reducer";
import { profileReducer } from "./profile-reducer";
import { authReducer } from "./auth-reducer";

const rootReducers = combineReducers({
    usersReducer,
    profileReducer,
    authReducer
})

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>;

const store = createStore(rootReducers, applyMiddleware(ReduxThunk))
export default store