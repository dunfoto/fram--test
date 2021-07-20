import { all } from "redux-saga/effects"
import getUsers from "./user/get"

function* sagas() {
    yield all([
        getUsers
    ])
}

export default sagas