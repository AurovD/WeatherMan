import { combineReducers} from 'redux';

import data from "./data";
import currency from "./currency";
import category from "./category";
import banner from "./banner";
const rootReducer = combineReducers({
    data,
    currency,
    category,
    banner
})

export default rootReducer;