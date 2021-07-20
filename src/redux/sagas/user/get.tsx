import axios from "src/utils/axios"
import { takeLatest, put, select, call } from "redux-saga/effects"
import { GET_USERS, GET_USERS_SAGA } from "src/redux/reducers/user"
import { UserTypes } from "src/redux/types"
import { Pagination } from "src/types"

function* getUsersSaga() {
    try {
        const { user: { pagination } } = yield select(),
            data: { data: UserTypes[], total: number } = yield call(getUsersAPI, pagination)
        yield put({
            type: GET_USERS_SAGA,
            data: data.data,
            total: data.total
        })
    } catch (err) {
        console.log(err)
    }
}
function* getUsers() {
    yield takeLatest(GET_USERS, getUsersSaga)
}

export default getUsers

const getUsersAPI = async (pagination: Pagination) => {
    try {
        const res = await axios.get(`/users?limit=${pagination.limit}&page=${pagination.page}`)
        return res.data
    } catch (err) {
        console.log(err)
        return []
    }
}