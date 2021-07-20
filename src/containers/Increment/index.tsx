import {
    Container,
    Typography,
    Grid,
    Button
} from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import { DECREMENT, INCREMENT, RESET } from "src/redux/reducers/increment"
import { Reducer } from "src/redux/types"
import { IncrementTypes } from "src/types"

const IncrementComponent = React.memo((props: IncrementTypes) => {
    const { dispatch, data } = props

    const onIncrement = (_: React.MouseEvent<HTMLElement>) => {
        dispatch({
            type: INCREMENT
        })
    }

    const onReset = (_: React.MouseEvent<HTMLElement>) => {
        dispatch({
            type: RESET
        })
    }
    const onDecrement = (_: React.MouseEvent<HTMLElement>) => {
        dispatch({
            type: DECREMENT
        })
    }

    return (
        <Container>
            <Grid container justifyContent="center">
                <Typography variant="h3">{data}</Typography>
            </Grid>

            <Grid container justifyContent="center">
                <Button
                    variant="outlined"
                    onClick={onDecrement}
                >
                    Decrement -
                </Button>
                <Button
                    variant="outlined"
                    onClick={onReset}
                >
                    Reset
                </Button>
                <Button
                    variant="outlined"
                    onClick={onIncrement}
                >
                    Increment +
                </Button>
            </Grid>
        </Container>
    )
})

const mapStateToProps = (state: Reducer) => ({
    data: state.increment.data
})
// @ts-ignore
export default connect(mapStateToProps)(IncrementComponent)