import { Dispatch } from "redux"
import { RouteComponentProps } from "react-router-dom"
import { UserTypes } from "src/redux/types"
import { Pagination } from "src/types"

export interface DashboardTypes extends Dispatch, RouteComponentProps {
    users: UserTypes[],
    dispatch: Dispatch,
    pagination: Pagination
}