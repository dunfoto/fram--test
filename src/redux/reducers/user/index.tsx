import { ReducerUserTypes, IAction } from "src/redux/types"

export const GET_USERS: string = "USER:GET_USERS"
export const GET_USERS_SAGA: string = "USER:GET_USERS_SAGA"

export const UPDATE_PAGINATION: string = "USER:UPDATE_PAGINATION"

const initialState: ReducerUserTypes = {
    data: [],
    pagination: {
        page: 0,
        limit: 0,
        total: 0
    }
}
const reducer = (state: ReducerUserTypes = initialState, action: IAction) => {
    switch (action.type) {
        case GET_USERS_SAGA:
            return { ...state, data: action.data }
        case UPDATE_PAGINATION:
            return { ...state, pagination: action.data }
        default:
            return state
    }
}

export default reducer