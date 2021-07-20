import { ReducerEmployeeTypes, IAction } from "src/redux/types"

export const GET_EMPLOYEE: string = "EMPLOYEE:GET_EMPLOYEE"
export const GET_EMPLOYEE_SAGA: string = "EMPLOYEE:GET_EMPLOYEE_SAGA"

export const UPDATE_PAGINATION: string = "EMPLOYEE:UPDATE_PAGINATION"
export const UPDATE_PAGINATION_SAGA: string = "EMPLOYEE:UPDATE_PAGINATION_SAGA"

const initialState: ReducerEmployeeTypes = {
    data: [],
    pagination: {
        page: 1,
        limit: 5,
        total: 0
    }
},
    reducer = (state: ReducerEmployeeTypes = initialState, action: IAction) => {
        switch (action.type) {
            case GET_EMPLOYEE_SAGA:
                return { ...state, data: action.data, pagination: { ...state.pagination, total: action.total } }
            case UPDATE_PAGINATION:
                return { ...state, pagination: action.data }
            default:
                return state
        }
    }

export default reducer