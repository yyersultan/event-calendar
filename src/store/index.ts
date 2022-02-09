import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { eventReducer } from "./reducers/event";


const reducers = combineReducers({
    auth: authReducer,
    event: eventReducer
})

export const store = createStore(reducers,applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;