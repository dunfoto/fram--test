import { ReducerIncrementTypes, IAction } from "src/redux/types"

export const DECREMENT: string = "INCREMENT:DECREMENT"
export const INCREMENT: string = "INCREMENT:INCREMENT"

export const RESET: string = "INCREMENT:RESET"

const initialState: ReducerIncrementTypes = {
    data: 0,
}
const reducer = (state: ReducerIncrementTypes = initialState, action: IAction) => {
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