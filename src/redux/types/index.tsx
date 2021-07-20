import { ReducerUserTypes } from "./user"
import { ReducerIncrementTypes } from "./increment"

export * from "./user"
export * from "./increment"
export interface IAction {
    type: string,
    [key: string]: any
}

export interface Reducer {
    user: ReducerUserTypes,
    increment: ReducerIncrementTypes
}