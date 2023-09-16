import { combineReducers } from "redux";
import { UpDownReducer } from './UpDownReducer'
export const RootReducer = () => combineReducers({
    UpDownReducer,
})