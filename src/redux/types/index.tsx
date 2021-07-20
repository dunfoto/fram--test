export * from "./user"
export * from "./increment"
export interface IAction {
    type: string,
    [key: string]: any
}