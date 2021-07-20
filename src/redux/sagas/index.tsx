import { all } from "redux-saga/effects"

import getUsers from "./user/get"
import updatePagination from "./user/pagination"

import increment from "./increment/increment"
import reset from "./increment/reset"
import decrement from "./increment/decrement"

function* sagas() {
    yield all([
        getUsers(),
        updatePagination(),
        increment(),
        reset(),
        decrement()
    ])
}

export default sagas