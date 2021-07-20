import { Pagination } from "src/types"

export interface ReducerUserTypes {
    data: UserTypes[],
    pagination: Pagination
}

export interface UserTypes {
    id: string,
    name: string,
    avatar: string,
    position: string,
    createdAt: string
}