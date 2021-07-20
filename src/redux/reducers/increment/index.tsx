import { ReducerIncrementTypes, IAction } from "src/redux/types"

export const DECREMENT: string = "INCREMENT:DECREMENT"
export const INCREMENT: string = "INCREMENT:INCREMENT"
export const RESET: string = "INCREMENT:RESET"

export const DECREMENT_SAGA: string = "INCREMENT:DECREMENT_SAGA"
export const INCREMENT_SAGA: string = "INCREMENT:INCREMENT_SAGA"
export const RESET_SAGA: string = "INCREMENT:RESET_SAGA"

const initialState: ReducerIncrementTypes = {
    data: 0,
},
    reducer = (state: ReducerIncrementTypes = initialState, action: IAction) => {
        switch (action.type) {
            case INCREMENT:
                return { ...state, data: state.data + 1 }
            case DECREMENT:
                return { ...state, data: state.data - 1 }
            case RESET:
                return { ...state, data: 0 }
            default:
                return state
        }
    }

export default reducer