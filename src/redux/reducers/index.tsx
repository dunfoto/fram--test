import { combineReducers } from "redux"

import user from "./user"
import increment from "./increment"

export default combineReducers({
    user,
    increment
})