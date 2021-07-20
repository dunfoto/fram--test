import { all } from "redux-saga/effects"

import getUsers from "./user/get"
import updatePagination from "./user/pagination"

function* sagas() {
    yield all([
        getUsers(),
        updatePagination()
    ])
}

export default sagas