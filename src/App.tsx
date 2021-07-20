import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_USERS } from 'src/redux/reducers/user';

function App(props: any) {
    const { dispatch } = props

    useEffect(() => {
        dispatch({
            type: GET_USERS
        })
    }, [dispatch])

    return (
        <div className="App">
           Dung
        </div>
    );
}

export default connect()(App);
