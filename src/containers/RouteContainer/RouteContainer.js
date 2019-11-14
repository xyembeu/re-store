import React, {PureComponent} from 'react'
import {Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as PropTypes from "prop-types";

class RouteContainer extends PureComponent {
    render() {
        let {component: Component, isPrivate, ...rest} = this.props;

        return (
            <Route
                {...rest}
                render={props => true || !isPrivate ? (<Component {...props} />) : (<Redirect to={'/login'}/>)
                }
            />
        )
    }
}

RouteContainer.propTypes = {
    component: PropTypes.any,
    isPrivate: PropTypes.any
}

const mapStateToProps = state => {
    return {
        isAuth: true
    }
}

export default RouteContainer
