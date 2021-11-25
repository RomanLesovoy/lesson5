import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { counterOld } from "./reducers/counterOld";
import { userReducer } from "./reducers/user";

const preloadedState = {}

export default createStore(
    combineReducers({
        counterOld,
        userReducer,
    }),
    preloadedState,
);
