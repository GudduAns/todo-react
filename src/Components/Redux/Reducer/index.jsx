import { combineReducers } from 'redux';

import { UpDownHandle } from './UpDown';
import { SuccessMsg } from './SuccessMsg'


const RootReducer = combineReducers({
    UpDownHandle,
    SuccessMsg,
})

export default RootReducer;