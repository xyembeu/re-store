import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const RouteContainer = ({component: Component, isPrivate, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => rest.isAuth || !isPrivate ? (<Component {...props} />) : (<Redirect to={'/login'}/>)
            }
        />
    )
}

const mapStateToProps = state => {
    return {
        isAuth: !!(state.auth.user.username)
    }
}

export default connect(mapStateToProps)(RouteContainer)
