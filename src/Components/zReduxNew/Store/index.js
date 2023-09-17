import { createStore } from "redux";
import { RootReducers } from './Reducers/index'
export const Store = createStore(RootReducers, window.__REDUX__DEVTOOLS__EXTENSION__ && window.REDUX__DEVTOOLS__EXTENSION())