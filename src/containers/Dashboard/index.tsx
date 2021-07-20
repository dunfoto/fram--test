import React from "react"
import { connect } from "react-redux"
import { DashboardTypes } from "src/types"
import { Reducer } from "src/redux/types"
import { useEffect } from "react"
import {
    GET_USERS,
    UPDATE_PAGINATION
} from "src/redux/reducers/user"
import {
    DataGrid,
    GridCellParams,
    GridCellValue,
    GridValueGetterParams
} from '@material-ui/data-grid'
import {
    Avatar,
    Pagination,
    Select,
    MenuItem,
    Grid,
    Container
} from "@material-ui/core"
import moment from "moment"

const columns = [
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 100,
        type: "image",
        renderCell: (params: GridCellParams) => <Avatar alt="demo" src={params.row.avatar} />
    },
    {
        field: 'id',
        headerName: 'ID',
        width: 100
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'position',
        headerName: 'Position',
        width: 250,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 150,
        valueGetter: (params: GridValueGetterParams): GridCellValue => moment(params.row.createdAt).format("YYYY-MM-DD HH:mm")
    }
]

const DashboardComponent = React.memo((props: DashboardTypes) => {
    const { dispatch, users, pagination } = props,
        { limit, page } = pagination

    useEffect(() => {
        dispatch({
            type: GET_USERS
        })
    }, [dispatch, limit, page])

    const onPageChange = (_: React.ChangeEvent<unknown>, p: number) => {
        dispatch({
            type: UPDATE_PAGINATION,
            data: {
                ...pagination,
                page: p
            }
        })
    }

    const handleChange = (e: any) => {
        dispatch({
            type: UPDATE_PAGINATION,
            data: {
                ...pagination,
                limit: e.target.value
            }
        })
    }

    return (
        <Container>
            <div
                style={{
                    height: 58 + 52 * pagination.limit,
                    width: 'auto',
                    content: "center"
                }}
            >
                <DataGrid
                    rows={users}
                    columns={columns}
                    loading={users.length === 0}
                    checkboxSelection
                    disableSelectionOnClick
                    pageSize={pagination.limit}
                    hideFooterPagination={true}
                    hideFooter={true}
                    autoHeight={true}
                />
            </div>
            <Grid container item justifyContent="flex-end" spacing={0}>
                <Select
                    id="pageSize"
                    variant="standard"
                    autoWidth={true}
                    margin="none"
                    value={Number(pagination.limit)}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={pagination.total}>All</MenuItem>
                </Select>
                <Pagination
                    page={pagination.page}
                    onChange={onPageChange}
                    count={pagination.total === pagination.limit ? 1 : parseInt(String(pagination.total / pagination.limit)) + 1}
                    shape="rounded"
                    classes={{
                        ul: "justify-end"
                    }}
                />
            </Grid>
        </Container>
    )
})

const mapStateToProps = (state: Reducer) => ({
    users: state.user.data,
    pagination: state.user.pagination
})
// @ts-ignore
export default connect(mapStateToProps)(DashboardComponent)